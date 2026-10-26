// total marine/ocean area
const TOTAL_AREA_T = 768809493.8;
const GRID_SIZE_T = 10;
const TOTAL_SQUARES_T = GRID_SIZE_T * GRID_SIZE_T;

async function drawWaffleChart() {
  // Load your existing data
  const response = await fetch("json_data/final_reserve_cat_t.json");

  if (!response.ok) {
    throw new Error(`Failed to load data: ${response.status}`);
  }

  const rawData = await response.json();

  // Aggregate GIS_AREA by Category
  const areaByCategory = new Map();

  for (const row of rawData) {
    const area = Number(row.GIS_AREA);
    if (!Number.isFinite(area) || area < 0) continue;

    const rawCategory = row.Category;
    const category =
      rawCategory == null || String(rawCategory).trim() === ""
        ? "None"
        : String(rawCategory).trim();

    areaByCategory.set(
      category,
      (areaByCategory.get(category) || 0) + area
    );
  }

  // "None" is reserved for grey cells, including any unallocated area.
  const categories = [...areaByCategory.entries()]
    .filter(([category, area]) =>
      category.toLowerCase() !== "none" && area > 0
    )
    .map(([category, area]) => ({ category, area }))
    .sort((a, b) => b.area - a.area);

  // Calculate each category's exact share of the FIXED total.
  for (const item of categories) {
    item.percentage = (item.area / TOTAL_AREA_T) * 100;
    item.exactSquares = (item.area / TOTAL_AREA_T) * TOTAL_SQUARES_T;
    item.squares = Math.floor(item.exactSquares);
    item.remainder = item.exactSquares - item.squares;
  }

  // Round the combined category coverage to the nearest whole square.
  // Remaining squares are grey.
  const totalCategoryArea = categories.reduce(
    (sum, item) => sum + item.area,
    0
  );

  const targetSquares = Math.min(
    TOTAL_SQUARES_T,
    Math.round((totalCategoryArea / TOTAL_AREA_T) * TOTAL_SQUARES_T)
  );

  let assignedSquares = categories.reduce(
    (sum, item) => sum + item.squares,
    0
  );

  // Largest-remainder method for fair rounding.
  const remainderOrder = [...categories].sort(
    (a, b) => b.remainder - a.remainder
  );

  for (let i = 0; assignedSquares < targetSquares; i++) {
    const item = remainderOrder[i % remainderOrder.length];
    if (!item) break;

    item.squares++;
    assignedSquares++;
  }

  // Generate 100 cells.
  const cells = [];

  for (const item of categories) {
    for (let i = 0; i < item.squares; i++) {
      cells.push({
        Category: item.category,
        "Category Area (ha)": item.area,
        "Percentage (%)": item.percentage
      });
    }
  }

  // All remaining cells represent None / unallocated coverage.
  while (cells.length < TOTAL_SQUARES_T) {
    cells.push({
      Category: "None",
      "Category Area (ha)": areaByCategory.get("None") || 0,
      "Percentage (%)": Math.max(
        0,
        100 - (totalCategoryArea / TOTAL_AREA_T) * 100
      )
    });
  }

  // Position cells in a 10 x 10 grid.
    const grid = cells.slice(0, TOTAL_SQUARES_T).map((cell, index) => ({
    ...cell,
    x: index % GRID_SIZE_T,
    y: Math.floor(index / GRID_SIZE_T)
    }));

    // Reverse the vertical placement so None appears at the bottom.
    grid.forEach(cell => {
    cell.y = GRID_SIZE_T - 1 - cell.y;
    });

  // Create a distinct hue for each real category.
  const domain = [...categories.map(item => item.category), "None"];

  const range = [
          "#027c63", "#a69ac8","#a6569d", "#9fbf52", "#284952", "#d3d3d3"
        ];


  // Render using Vega-Lite v5.
  const spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    title: {
      text: ""
    },
    width: 300,
    height: 300,
    data: { values: grid },
    mark: {
      type: "rect",
      stroke: "white",
      strokeWidth: 2
    },
    encoding: {
      x: {
        field: "x",
        type: "ordinal",
        sort: Array.from({ length: GRID_SIZE_T }, (_, i) => i),
        axis: null,
        scale: { paddingInner: 0.08, paddingOuter: 0.02 }
      },
      y: {
        field: "y",
        type: "ordinal",
        sort: Array.from({ length: GRID_SIZE_T }, (_, i) => i).reverse(),
        axis: null,
        scale: { paddingInner: 0.08, paddingOuter: 0.02 }
      },
      color: {
        field: "Category",
        type: "nominal",
        scale: {
          domain,
          range
        },
        legend: {
          title: "Category",
          orient: "bottom",
          direction: "horizontal",
          columns:2,
          labelLimit:150
        }
      },
      tooltip: [
        { field: "Category", type: "nominal" },
        {
          field: "Category Area (ha)",
          type: "quantitative",
          format: ",.2f"
        },
        {
          field: "Percentage (%)",
          type: "quantitative",
          format: ".2f"
        }
      ]
    },
    config: {
      view: { stroke: null }
    }
  };

  await vegaEmbed("#waffle_t", spec, {
    actions: false
  });
}

drawWaffleChart().catch(console.error);

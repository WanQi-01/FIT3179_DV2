
const fs = require("fs");

// Load the terrestrial protected areas data
const protected_areas = JSON.parse(
    fs.readFileSync("../json_data/final_t_choro.json", "utf8")
);

// Load the allocated terrestrial area for each state
const sea_areas = JSON.parse(
    fs.readFileSync("../json_data/total_land_area.json", "utf8")
);

// Calculate the total GIS_AREA for each state
const state_totals = {};

for (const area of protected_areas) {
    const state = area["State Full Name"]?.trim();
    const gis_area = Number(area["GIS_AREA"]);

    if (!state || area["GIS_AREA"] == null || !Number.isFinite(gis_area)) {
        continue;
    }

    if (!state_totals[state]) {
        state_totals[state] = 0;
    }

    state_totals[state] += gis_area;
}

// Calculate coverage percentage for each state
const state_coverage = sea_areas.map((state_area) => {
    const state = state_area["State Full Name"];
    const total_land_area = Number(state_area["Total Land Area"]);
    const protected_area = state_totals[state] ?? 0;

    const percentage =
        total_land_area > 0
            ? (protected_area / total_land_area) * 100
            : null;

    return {
        "State Full Name": state,
        "Protected Area (ha)": Number(protected_area.toFixed(2)),
        "Total Land Area": total_land_area,
        "Percentage of coverage":
            percentage === null ? null : Number(percentage.toFixed(4))
    };
});

// Save the results as JSON
fs.writeFileSync(
    "../json_data/final_t_choro_coverage.json",
    JSON.stringify(state_coverage, null, 2),
    "utf8"
);

console.log("State coverage calculated successfully!");
console.log(state_coverage);

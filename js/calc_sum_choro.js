
const fs = require("fs");
const path = require("path");

const json_data_dir = path.join(__dirname, "..", "json_data");

// Read land and sea coverage data
const land_data = JSON.parse(
    fs.readFileSync(
        path.join(json_data_dir, "final_t_choro_coverage.json"),
        "utf8"
    )
);

const sea_data = JSON.parse(
    fs.readFileSync(
        path.join(json_data_dir, "final_m_choro_coverage.json"),
        "utf8"
    )
);

// Combine records by state name
const combined_data = {};

function addStateData(data, type) {
    for (const item of data) {
        const state = item["State Full Name"];

        if (!combined_data[state]) {
            combined_data[state] = {
                "State Full Name": state,
                "Protected Land Area (ha)": 0,
                "Protected Sea Area (ha)": 0,
                "Total Land Area": 0,
                "Total Sea Area": 0
            };
        }

        if (type === "land") {
            combined_data[state]["Protected Land Area (ha)"] =
                Number(item["Protected Area (ha)"]) || 0;

            combined_data[state]["Total Land Area"] =
                Number(item["Total Land Area"]) || 0;
        } else {
            combined_data[state]["Protected Sea Area (ha)"] =
                Number(item["Protected Area (ha)"]) || 0;

            combined_data[state]["Total Sea Area"] =
                Number(item["Total Sea Area"]) || 0;
        }
    }
}

addStateData(land_data, "land");
addStateData(sea_data, "sea");

// Calculate combined areas and coverage percentage
const final_data = Object.values(combined_data).map((state) => {
    const protected_area =
        state["Protected Land Area (ha)"] +
        state["Protected Sea Area (ha)"];

    const total_area =
        state["Total Land Area"] +
        state["Total Sea Area"];

    const percentage =
        total_area > 0
            ? (protected_area / total_area) * 100
            : null;

    return {
        "State Full Name": state["State Full Name"],
        "Protected Land Area (ha)":
            Number(state["Protected Land Area (ha)"].toFixed(2)),
        "Protected Sea Area (ha)":
            Number(state["Protected Sea Area (ha)"].toFixed(2)),
        "Total Protected Area (ha)":
            Number(protected_area.toFixed(2)),
        "Total Land Area": state["Total Land Area"],
        "Total Sea Area": state["Total Sea Area"],
        "Total Allocated Area": total_area,
        "Percentage of coverage":
            percentage === null ? null : Number(percentage.toFixed(4))
    };
});

// Save combined JSON
fs.writeFileSync(
    path.join(json_data_dir, "final_sum_choro.json"),
    JSON.stringify(final_data, null, 2),
    "utf8"
);

console.log("Combined coverage calculated successfully!");
console.log(final_data);




const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");


const baseDir = path.resolve(__dirname, "..");
const dataDir = path.join(baseDir, "data");
const jsonDir = path.join(baseDir, "json_data");


const excelData = [

    // "MCAPAD_2024.xlsx",
    // "TCAPAD_2024.xlsx",
    // "marine_annualCAPAD.xlsx",
    // "ter_annualCAPAD.xlsx",
    // "PA_INFO.xlsx",
    // "chart1.xlsx",
    // "T_area1.xlsx",
    // "IBRA_bioregion.xlsx",

    // "m_pa.xlsx",
    // "t_pa.xlsx",
    // "final_reserve_cat_m.csv",
    // "final_reserve_cat_t.csv",
    // "final_annual_growth_conser.xlsx"
    // "final_m_choro.csv",
    // "final_t_choro.csv"
    // "final_state_growth_m.xlsx",
    // "final_state_growth_t.xlsx"
    "final_governance.xlsx"


]

for (const fileName of excelData) {

    const inputPath = path.join(dataDir, fileName);


    const sheet = XLSX.readFile(inputPath);

    const sheetName = sheet.SheetNames[0];
    const workSheet = sheet.Sheets[sheetName];


    //conv rows to data
    const data = XLSX.utils.sheet_to_json(workSheet, {
        defval: null,
        raw: true,
        blankrows: false
    });

    const outName = path.basename(fileName, path.extname(fileName)) + ".json";
    const outputPath = path.join(
        jsonDir,
        outName
    );

    fs.writeFileSync(
        outputPath,
        JSON.stringify(data, null, 2),
        "utf8"
    );

    console.log(`Converted ${fileName} -> ${outputPath} (${data.length} rows)`);
}


console.log("All files converted!");
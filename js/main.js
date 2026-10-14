


var chart1_choro = "";
var chart2_choro = "";
var chart3_choro = "";



// the percentage of protected areas of each cat over time - heatmap
var chart4  = "json_data/vg/marine_annualCAPAD.vg.json";
var chart5  = "json_data/vg/ter_annualCAPAD.vg.json";

// var chart4 = "https://raw.githubusercontent.com/WanQi-01/FIT3179_DV2/main/json_data/vg/marine_annualCAPAD.vg.json";
// var chart5 = "https://raw.githubusercontent.com/WanQi-01/FIT3179_DV2/main/json_data/vg/ter_annualCAPAD.vg.json";


// categories of IUCN protected areas - bar
var chart6_1 = "json_data/vg/m_bar_cat1.vg.json";
var chart6_2 = "json_data/vg/m_bar_cat2.vg.json";
var chart7_1 = "json_data/vg/t_bar_cat.vg.json";
var chart7_2 = "json_data/vg/t_bar_cat2.vg.json";


// change of percentage coverage over time: line
var chart8 = "json_data/vg/m_pa.vg.json";
var chart9 = "json_data/vg/t_pa.vg.json";


// proportion of protected areas in % in 2024: donut
var chart10 = "json_data/vg/m_donut.vg.json";
var chart11 = "json_data/vg/t_donut.vg.json";

// call the vis
vegaEmbed("#heatmap_m", chart4).then(function(result) {

}).catch(console.error);

vegaEmbed("#heatmap_t", chart5).then(function(result) {

}).catch(console.error);

vegaEmbed("#bar_chart_m1", chart6_1).then(function(result) {

}).catch(console.error);

vegaEmbed("#bar_chart_m2", chart6_2).then(function(result) {

}).catch(console.error);

vegaEmbed("#bar_chart_t1", chart7_1).then(function(result) {

}).catch(console.error);
vegaEmbed("#bar_chart_t2", chart7_2).then(function(result) {

}).catch(console.error);

vegaEmbed("#line_chart_m", chart8).then(function(result) {

}).catch(console.error);

vegaEmbed("#line_chart_t", chart9).then(function(result) {

}).catch(console.error);

vegaEmbed("#pie_chart_m", chart10).then(function(result) {

}).catch(console.error);

vegaEmbed("#pie_chart_t", chart11).then(function(result) {

}).catch(console.error);
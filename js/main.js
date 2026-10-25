
var t_choro = "json_data/vg/t_choro.vg.json"
var m_choro = "json_data/vg/m_choro.vg.json"


// vegaEmbed("#t_choro", t_choro).then(function(result) {}).catch(console.error);
// vegaEmbed("#m_choro", m_choro).then(function(result) {}).catch(console.error);

var growth_line = "json_data/vg/growth_conser_line.vg.json";
vegaEmbed("#growth_line", growth_line).then(function(result) {}).catch(console.error);

// var state_choro = "json_data/vg/state_choro.vg.json";
// vegaEmbed("#state_choro", state_choro).then(function(result) {}).catch(console.error);

// var state_growth_m = "json_data/vg/state_growth_m.vg.json";
// var state_growth_t = "json_data/vg/state_growth_t.vg.json";

// vegaEmbed("#state_growth_m", state_growth_m).then(function(result) {}).catch(console.error);
// vegaEmbed("#state_growth_t", state_growth_t).then(function(result) {}).catch(console.error);

// var bumpchart_m = "json_data/vg/m_pa.vg.json";
// var bumpchart_t = "json_data/vg/t_pa.vg.json";

// vegaEmbed("#bumpchart_m", bumpchart_m).then(function(result) {}).catch(console.error);
// vegaEmbed("#bumpchart_t", bumpchart_t).then(function(result) {}).catch(console.error);

// var governance = "json_data/vg/governance.vg.json"
// vegaEmbed("#governance", governance).then(function(result) {}).catch(console.error);

var heatmap_m  = "json_data/vg/final_heatmap_m.vg.json";
var heatmap_t  = "json_data/vg/final_heatmap_t.vg.json";


vegaEmbed("#heatmap_m", heatmap_m).then(function(result) {}).catch(console.error);
vegaEmbed("#heatmap_t", heatmap_t).then(function(result) {}).catch(console.error);


var chart2_radbartop5 = "json_data/vg/IBRA_biore_top5.vg.json";
var chart3_radbarlowest5 = "json_data/vg/IBRA_biore_lowest5.vg.json";


var line_growth_conserv = "json_data/vg/growth_conser.vg.json";
// the percentage of protected areas of each cat over time - heatmap


// var chart4 = "https://raw.githubusercontent.com/WanQi-01/FIT3179_DV2/main/json_data/vg/marine_annualCAPAD.vg.json";
// var chart5 = "https://raw.githubusercontent.com/WanQi-01/FIT3179_DV2/main/json_data/vg/ter_annualCAPAD.vg.json";


// categories of IUCN protected areas - bar
// var chart6_1 = "json_data/vg/m_bar_cat1.vg.json";
var chart6_2 = "json_data/vg/m_bar_cat2.vg.json";
var chart7_1 = "json_data/vg/t_bar_cat.vg.json";
var chart7_2 = "json_data/vg/t_bar_cat2.vg.json";


// change of percentage coverage over time: line
// var chart8 = "json_data/vg/m_pa.vg.json";
// var chart9 = "json_data/vg/t_pa.vg.json";

var waffle_m = "json_data/vg/waffle_m.vg.json";
// proportion of protected areas in % in 2024: donut
var chart10 = "json_data/vg/m_donut.vg.json";
var chart11 = "json_data/vg/t_donut.vg.json";

// call the vis

vegaEmbed("#IBRA_top5", chart2_radbartop5).then(function(result) {}).catch(console.error);
vegaEmbed("#IBRA_lowest5", chart3_radbarlowest5).then(function(result) {}).catch(console.error);

vegaEmbed("#line_growth_in_consv", line_growth_conserv).then(function(result) {}).catch(console.error);


// vegaEmbed("#bar_chart_m1", chart6_1).then(function(result) {

// }).catch(console.error);

vegaEmbed("#bar_chart_m2", chart6_2).then(function(result) {

}).catch(console.error);

vegaEmbed("#bar_chart_t1", chart7_1).then(function(result) {

}).catch(console.error);
vegaEmbed("#bar_chart_t2", chart7_2).then(function(result) {

}).catch(console.error);

// vegaEmbed("#line_chart_m", chart8).then(function(result) {

// }).catch(console.error);

// vegaEmbed("#line_chart_t", chart9).then(function(result) {

// }).catch(console.error);

vegaEmbed("#pie_chart_m", chart10).then(function(result) {

}).catch(console.error);

vegaEmbed("#pie_chart_t", chart11).then(function(result) {

}).catch(console.error);
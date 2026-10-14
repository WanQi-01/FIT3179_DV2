


var chart1_choro = "";
var chart2_choro = "";
var chart3_choro = "";



// the percentage of protected areas of each cat over time - heatmap
var chart4 = "marine_annualCAPAD.vg.json";
var chart5 = "ter_annualCAPAD.vg.json";


// categories of IUCN protected areas - bar
var chart6_1 = "m_bar_cat1.vg.json";
var chart6_2 = "m_bar_cat2.vg.json";
var chart7 = "t_bar_cat.vg.json";

// change of percentage coverage over time: line
var chart8 = "m_pa.vg.json";
var chart9 = "t_pa.vg.json";


// proportion of protected areas in % in 2024: donut
var chart10 = "m_donut.vg.json";
var chart11 = "t_donut.vg.json";

// call the vis
vegaEmbed("#heatmap_m", chart4).then(function(result) {

}).catch(console.error);

vegaEmbed("#heatmap_t", chart5).then(function(result) {

}).catch(console.error);

vegaEmbed("#bar_chart_m1", chart6_1).then(function(result) {

}).catch(console.error);

vegaEmbed("#bar_chart_m2", chart6_2).then(function(result) {

}).catch(console.error);

vegaEmbed("#bar_chart_t", chart7).then(function(result) {

}).catch(console.error);

vegaEmbed("#line_chart_m", chart8).then(function(result) {

}).catch(console.error);

vegaEmbed("#line_chart_t", chart9).then(function(result) {

}).catch(console.error);

vegaEmbed("#pie_chart_m", chart10).then(function(result) {

}).catch(console.error);

vegaEmbed("#pie_chart_t", chart11).then(function(result) {

}).catch(console.error);
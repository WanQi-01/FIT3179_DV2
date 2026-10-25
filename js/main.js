
var t_choro = "json_data/vg/t_choro.vg.json"
var m_choro = "json_data/vg/m_choro.vg.json"


vegaEmbed("#t_choro", t_choro).then(function(result) {}).catch(console.error);
vegaEmbed("#m_choro", m_choro).then(function(result) {}).catch(console.error);

var growth_line = "json_data/vg/growth_conser_line.vg.json";
vegaEmbed("#growth_line", growth_line).then(function(result) {}).catch(console.error);

var state_choro = "json_data/vg/state_choro.vg.json";
vegaEmbed("#state_choro", state_choro).then(function(result) {}).catch(console.error);

var state_growth_m = "json_data/vg/state_growth_m.vg.json";
var state_growth_t = "json_data/vg/state_growth_t.vg.json";

vegaEmbed("#state_growth_m", state_growth_m).then(function(result) {}).catch(console.error);
vegaEmbed("#state_growth_t", state_growth_t).then(function(result) {}).catch(console.error);

var bumpchart_m = "json_data/vg/m_pa.vg.json";
var bumpchart_t = "json_data/vg/t_pa.vg.json";

vegaEmbed("#bumpchart_m", bumpchart_m).then(function(result) {}).catch(console.error);
vegaEmbed("#bumpchart_t", bumpchart_t).then(function(result) {}).catch(console.error);

var governance = "json_data/vg/governance.vg.json"
vegaEmbed("#governance", governance).then(function(result) {}).catch(console.error);

var heatmap_m  = "json_data/vg/final_heatmap_m.vg.json";
var heatmap_t  = "json_data/vg/final_heatmap_t.vg.json";

vegaEmbed("#heatmap_m", heatmap_m).then(function(result) {}).catch(console.error);
vegaEmbed("#heatmap_t", heatmap_t).then(function(result) {}).catch(console.error);

var IBRA_top5 = "json_data/vg/IBRA_biore_top5.vg.json";
var IBRA_lowest5 = "json_data/vg/IBRA_biore_lowest5.vg.json";

vegaEmbed("#IBRA_top5", IBRA_top5).then(function(result) {}).catch(console.error);
vegaEmbed("#IBRA_lowest5", IBRA_lowest5).then(function(result) {}).catch(console.error);

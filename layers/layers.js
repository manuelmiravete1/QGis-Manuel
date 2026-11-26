var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_M3_1_VisualizacionProyectos_obra_1 = new ol.format.GeoJSON();
var features_M3_1_VisualizacionProyectos_obra_1 = format_M3_1_VisualizacionProyectos_obra_1.readFeatures(json_M3_1_VisualizacionProyectos_obra_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M3_1_VisualizacionProyectos_obra_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M3_1_VisualizacionProyectos_obra_1.addFeatures(features_M3_1_VisualizacionProyectos_obra_1);
var lyr_M3_1_VisualizacionProyectos_obra_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M3_1_VisualizacionProyectos_obra_1, 
                style: style_M3_1_VisualizacionProyectos_obra_1,
                popuplayertitle: 'M3_1_Visualizacion — Proyectos_obra',
                interactive: true,
                title: '<img src="styles/legend/M3_1_VisualizacionProyectos_obra_1.png" /> M3_1_Visualizacion — Proyectos_obra'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_M3_1_VisualizacionProyectos_obra_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_M3_1_VisualizacionProyectos_obra_1];
lyr_M3_1_VisualizacionProyectos_obra_1.set('fieldAliases', {'fid': 'fid', 'proyecto': 'proyecto', 'region': 'region', 'tipo': 'tipo', 'presupuesto_mxn': 'presupuesto_mxn', 'avance_prog_jun': 'avance_prog_jun', 'avance_real_jun': 'avance_real_jun', 'avance_prog_sep': 'avance_prog_sep', 'avance_real_sep': 'avance_real_sep', 'AV_REAL_G': 'AV_REAL_G', 'AV_PROG_G': 'AV_PROG_G', 'AV_REAL_R': 'AV_REAL_R', 'AV_PROG__R': 'AV_PROG__R', });
lyr_M3_1_VisualizacionProyectos_obra_1.set('fieldImages', {'fid': 'Hidden', 'proyecto': 'TextEdit', 'region': 'TextEdit', 'tipo': 'TextEdit', 'presupuesto_mxn': 'Range', 'avance_prog_jun': 'TextEdit', 'avance_real_jun': 'TextEdit', 'avance_prog_sep': 'TextEdit', 'avance_real_sep': 'TextEdit', 'AV_REAL_G': 'TextEdit', 'AV_PROG_G': 'TextEdit', 'AV_REAL_R': 'TextEdit', 'AV_PROG__R': 'TextEdit', });
lyr_M3_1_VisualizacionProyectos_obra_1.set('fieldLabels', {'proyecto': 'inline label - always visible', 'region': 'inline label - always visible', 'tipo': 'inline label - always visible', 'presupuesto_mxn': 'inline label - always visible', 'avance_prog_jun': 'inline label - always visible', 'avance_real_jun': 'inline label - always visible', 'avance_prog_sep': 'inline label - always visible', 'avance_real_sep': 'inline label - always visible', 'AV_REAL_G': 'inline label - always visible', 'AV_PROG_G': 'inline label - always visible', 'AV_REAL_R': 'inline label - always visible', 'AV_PROG__R': 'inline label - always visible', });
lyr_M3_1_VisualizacionProyectos_obra_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
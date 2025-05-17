var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gadm36_IDN_shpgadm36_IDN_2shp_1 = new ol.format.GeoJSON();
var features_gadm36_IDN_shpgadm36_IDN_2shp_1 = format_gadm36_IDN_shpgadm36_IDN_2shp_1.readFeatures(json_gadm36_IDN_shpgadm36_IDN_2shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_IDN_shpgadm36_IDN_2shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm36_IDN_shpgadm36_IDN_2shp_1.addFeatures(features_gadm36_IDN_shpgadm36_IDN_2shp_1);
var lyr_gadm36_IDN_shpgadm36_IDN_2shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm36_IDN_shpgadm36_IDN_2shp_1, 
                style: style_gadm36_IDN_shpgadm36_IDN_2shp_1,
                popuplayertitle: 'gadm36_IDN_shp — gadm36_IDN_2.shp',
                interactive: true,
    title: 'gadm36_IDN_shp — gadm36_IDN_2.shp<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_0.png" /> Asahan<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_1.png" /> Batu Bara<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_2.png" /> Dairi<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_3.png" /> Deli Serdang<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_4.png" /> Gunungsitoli<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_5.png" /> Humbang Hasundutan<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_6.png" /> Karo<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_7.png" /> Kota Binjai<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_8.png" /> Kota Medan<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_9.png" /> Kota Tanjungbalai<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_10.png" /> Labuhanbatu<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_11.png" /> Labuhanbatu Selatan<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_12.png" /> Labuhanbatu Utara<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_13.png" /> Langkat<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_14.png" /> Mandailing Natal<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_15.png" /> Nias<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_16.png" /> Nias Barat<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_17.png" /> Nias Selatan<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_18.png" /> Nias Utara<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_19.png" /> Padang Lawas<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_20.png" /> Padang Lawas Utara<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_21.png" /> Padangsidimpuan<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_22.png" /> Pakpak Barat<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_23.png" /> Pematangsiantar<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_24.png" /> Samosir<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_25.png" /> Serdang Bedagai<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_26.png" /> Sibolga<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_27.png" /> Simalungun<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_28.png" /> Tapanuli Selatan<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_29.png" /> Tapanuli Tengah<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_30.png" /> Tapanuli Utara<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_31.png" /> Tebingtinggi<br />\
    <img src="styles/legend/gadm36_IDN_shpgadm36_IDN_2shp_1_32.png" /> Toba Samosir<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_gadm36_IDN_shpgadm36_IDN_2shp_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_gadm36_IDN_shpgadm36_IDN_2shp_1];
lyr_gadm36_IDN_shpgadm36_IDN_2shp_1.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Sumatera Utara 1_Jumlah Penduduk': 'Sumatera Utara 1_Jumlah Penduduk', 'Sumatera Utara 1_PDRB': 'Sumatera Utara 1_PDRB', 'Sumatera Utara 1_Indeks Kedalaman Kemiskinan': 'Sumatera Utara 1_Indeks Kedalaman Kemiskinan', });
lyr_gadm36_IDN_shpgadm36_IDN_2shp_1.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Sumatera Utara 1_Jumlah Penduduk': 'Range', 'Sumatera Utara 1_PDRB': 'Range', 'Sumatera Utara 1_Indeks Kedalaman Kemiskinan': 'TextEdit', });
lyr_gadm36_IDN_shpgadm36_IDN_2shp_1.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'inline label - always visible', 'GID_1': 'no label', 'NAME_1': 'inline label - always visible', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'inline label - always visible', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', 'Sumatera Utara 1_Jumlah Penduduk': 'inline label - always visible', 'Sumatera Utara 1_PDRB': 'inline label - always visible', 'Sumatera Utara 1_Indeks Kedalaman Kemiskinan': 'inline label - always visible', });
lyr_gadm36_IDN_shpgadm36_IDN_2shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Total_1 = new ol.format.GeoJSON();
var features_Total_1 = format_Total_1.readFeatures(json_Total_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Total_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Total_1.addFeatures(features_Total_1);
var lyr_Total_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Total_1, 
                style: style_Total_1,
                popuplayertitle: 'Total',
                interactive: true,
    title: 'Total<br />\
    <img src="styles/legend/Total_1_0.png" /> 1 - 2<br />\
    <img src="styles/legend/Total_1_1.png" /> 2 - 5<br />\
    <img src="styles/legend/Total_1_2.png" /> 5 - 10<br />\
    <img src="styles/legend/Total_1_3.png" /> 10 - 15<br />\
    <img src="styles/legend/Total_1_4.png" /> 15 - 20<br />\
    <img src="styles/legend/Total_1_5.png" /> 20 - 30<br />\
    <img src="styles/legend/Total_1_6.png" /> 30 - 40<br />\
    <img src="styles/legend/Total_1_7.png" /> 40 - 50<br />\
    <img src="styles/legend/Total_1_8.png" /> 50 - 80<br />\
    <img src="styles/legend/Total_1_9.png" /> 80 - 254<br />' });
var format_Insectes_2 = new ol.format.GeoJSON();
var features_Insectes_2 = format_Insectes_2.readFeatures(json_Insectes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Insectes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Insectes_2.addFeatures(features_Insectes_2);
var lyr_Insectes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Insectes_2, 
                style: style_Insectes_2,
                popuplayertitle: 'Insectes',
                interactive: false,
    title: 'Insectes<br />\
    <img src="styles/legend/Insectes_2_0.png" /> 1 - 2<br />\
    <img src="styles/legend/Insectes_2_1.png" /> 2 - 5<br />\
    <img src="styles/legend/Insectes_2_2.png" /> 5 - 10<br />\
    <img src="styles/legend/Insectes_2_3.png" /> 10 - 15<br />\
    <img src="styles/legend/Insectes_2_4.png" /> 15 - 20<br />\
    <img src="styles/legend/Insectes_2_5.png" /> 20 - 30<br />\
    <img src="styles/legend/Insectes_2_6.png" /> 30 - 40<br />\
    <img src="styles/legend/Insectes_2_7.png" /> 40 - 50<br />\
    <img src="styles/legend/Insectes_2_8.png" /> 50 - 80<br />\
    <img src="styles/legend/Insectes_2_9.png" /> 80 - 254<br />' });
var format_Oiseaux_3 = new ol.format.GeoJSON();
var features_Oiseaux_3 = format_Oiseaux_3.readFeatures(json_Oiseaux_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oiseaux_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oiseaux_3.addFeatures(features_Oiseaux_3);
var lyr_Oiseaux_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oiseaux_3, 
                style: style_Oiseaux_3,
                popuplayertitle: 'Oiseaux',
                interactive: false,
    title: 'Oiseaux<br />\
    <img src="styles/legend/Oiseaux_3_0.png" /> 1 - 2<br />\
    <img src="styles/legend/Oiseaux_3_1.png" /> 2 - 5<br />\
    <img src="styles/legend/Oiseaux_3_2.png" /> 5 - 10<br />\
    <img src="styles/legend/Oiseaux_3_3.png" /> 10 - 15<br />\
    <img src="styles/legend/Oiseaux_3_4.png" /> 15 - 20<br />\
    <img src="styles/legend/Oiseaux_3_5.png" /> 20 - 30<br />\
    <img src="styles/legend/Oiseaux_3_6.png" /> 30 - 40<br />\
    <img src="styles/legend/Oiseaux_3_7.png" /> 40 - 50<br />\
    <img src="styles/legend/Oiseaux_3_8.png" /> 50 - 80<br />\
    <img src="styles/legend/Oiseaux_3_9.png" /> 80 - 254<br />' });
var format_Mammifres_4 = new ol.format.GeoJSON();
var features_Mammifres_4 = format_Mammifres_4.readFeatures(json_Mammifres_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mammifres_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mammifres_4.addFeatures(features_Mammifres_4);
var lyr_Mammifres_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mammifres_4, 
                style: style_Mammifres_4,
                popuplayertitle: 'Mammifères',
                interactive: false,
    title: 'Mammifères<br />\
    <img src="styles/legend/Mammifres_4_0.png" /> 1 - 2<br />\
    <img src="styles/legend/Mammifres_4_1.png" /> 2 - 5<br />\
    <img src="styles/legend/Mammifres_4_2.png" /> 5 - 10<br />\
    <img src="styles/legend/Mammifres_4_3.png" /> 10 - 15<br />\
    <img src="styles/legend/Mammifres_4_4.png" /> 15 - 20<br />\
    <img src="styles/legend/Mammifres_4_5.png" /> 20 - 30<br />\
    <img src="styles/legend/Mammifres_4_6.png" /> 30 - 40<br />\
    <img src="styles/legend/Mammifres_4_7.png" /> 40 - 50<br />\
    <img src="styles/legend/Mammifres_4_8.png" /> 50 - 80<br />\
    <img src="styles/legend/Mammifres_4_9.png" /> 80 - 254<br />' });
var format_Angiospermes_5 = new ol.format.GeoJSON();
var features_Angiospermes_5 = format_Angiospermes_5.readFeatures(json_Angiospermes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Angiospermes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Angiospermes_5.addFeatures(features_Angiospermes_5);
var lyr_Angiospermes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Angiospermes_5, 
                style: style_Angiospermes_5,
                popuplayertitle: 'Angiospermes',
                interactive: false,
    title: 'Angiospermes<br />\
    <img src="styles/legend/Angiospermes_5_0.png" /> 1 - 2<br />\
    <img src="styles/legend/Angiospermes_5_1.png" /> 2 - 5<br />\
    <img src="styles/legend/Angiospermes_5_2.png" /> 5 - 10<br />\
    <img src="styles/legend/Angiospermes_5_3.png" /> 10 - 15<br />\
    <img src="styles/legend/Angiospermes_5_4.png" /> 15 - 20<br />\
    <img src="styles/legend/Angiospermes_5_5.png" /> 20 - 30<br />\
    <img src="styles/legend/Angiospermes_5_6.png" /> 30 - 40<br />\
    <img src="styles/legend/Angiospermes_5_7.png" /> 40 - 50<br />\
    <img src="styles/legend/Angiospermes_5_8.png" /> 50 - 80<br />\
    <img src="styles/legend/Angiospermes_5_9.png" /> 80 - 254<br />' });
var format_Contoursparc_6 = new ol.format.GeoJSON();
var features_Contoursparc_6 = format_Contoursparc_6.readFeatures(json_Contoursparc_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contoursparc_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contoursparc_6.addFeatures(features_Contoursparc_6);
var lyr_Contoursparc_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contoursparc_6, 
                style: style_Contoursparc_6,
                popuplayertitle: 'Contours parc',
                interactive: false,
                title: '<img src="styles/legend/Contoursparc_6.png" /> Contours parc'
            });
var format_Pointsdobservation_7 = new ol.format.GeoJSON();
var features_Pointsdobservation_7 = format_Pointsdobservation_7.readFeatures(json_Pointsdobservation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsdobservation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsdobservation_7.addFeatures(features_Pointsdobservation_7);
var lyr_Pointsdobservation_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointsdobservation_7, 
                style: style_Pointsdobservation_7,
                popuplayertitle: 'Points d\'observation',
                interactive: true,
                title: '<img src="styles/legend/Pointsdobservation_7.png" /> Points d\'observation'
            });
var group_Pargroupe = new ol.layer.Group({
                                layers: [lyr_Insectes_2,lyr_Oiseaux_3,lyr_Mammifres_4,lyr_Angiospermes_5,],
                                fold: 'close',
                                title: 'Par groupe'});

lyr_OSMStandard_0.setVisible(true);lyr_Total_1.setVisible(true);lyr_Insectes_2.setVisible(false);lyr_Oiseaux_3.setVisible(false);lyr_Mammifres_4.setVisible(false);lyr_Angiospermes_5.setVisible(false);lyr_Contoursparc_6.setVisible(true);lyr_Pointsdobservation_7.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_Total_1,group_Pargroupe,lyr_Contoursparc_6,lyr_Pointsdobservation_7];
lyr_Total_1.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'total': 'Nombre d\'observations', });
lyr_Insectes_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'insectes': 'insectes', });
lyr_Oiseaux_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'oiseaux': 'oiseaux', });
lyr_Mammifres_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'mammiferes': 'mammiferes', });
lyr_Angiospermes_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'angiospermes': 'angiospermes', });
lyr_Contoursparc_6.set('fieldAliases', {'fid': 'fid', 'id_local': 'id_local', 'code_r_enp': 'code_r_enp', 'nom_site': 'nom_site', 'date_crea': 'date_crea', 'decret': 'decret', 'modif': 'modif', 'charte': 'charte', 'arr_pref': 'arr_pref', 'modif_adm': 'modif_adm', 'modif_geo': 'modif_geo', 'surf_ha': 'surf_ha', 'gest_site': 'gest_site', 'precision': 'precision', 'src_geom': 'src_geom', 'src_annee': 'src_annee', });
lyr_Pointsdobservation_7.set('fieldAliases', {'fid': 'fid', 'id_synthes': 'id_synthes', 'id_source': 'id_source', 'id_perm_si': 'id_perm_si', 'id_perm_gr': 'id_perm_gr', 'date_debut': 'date_debut', 'date_fin': 'date_fin', 'cd_nom': 'cd_nom', 'cd_ref': 'cd_ref', 'version_ta': 'version_ta', 'nom_cite': 'nom_cite', 'nom_vern': 'Nom vernaculaire', 'nom_valide': 'nom_valide', 'regne': 'regne', 'group1_inp': 'group1_inp', 'group2_inp': 'group2_inp', 'classe': 'classe', 'ordre': 'ordre', 'famille': 'famille', 'rang_taxo': 'rang_taxo', 'nombre_min': 'nombre_min', 'nombre_max': 'nombre_max', 'altitude_m': 'altitude_m', 'altitude_1': 'altitude_1', 'profondeur': 'profondeur', 'profonde_1': 'profonde_1', 'observateu': 'observateu', 'determinat': 'determinat', 'validateur': 'validateur', 'numero_pre': 'numero_pre', 'preuve_num': 'preuve_num', 'preuve_non': 'preuve_non', 'comment_re': 'comment_re', 'comment_oc': 'comment_oc', 'date_creat': 'date_creat', 'date_modif': 'date_modif', 'derniere_a': 'derniere_a', 'jdd_uuid': 'jdd_uuid', 'jdd_nom': 'jdd_nom', 'jdd_acteur': 'jdd_acteur', 'ca_uuid': 'ca_uuid', 'ca_nom': 'ca_nom', 'reference_': 'reference_', 'code_habit': 'code_habit', 'habitat': 'habitat', 'nom_lieu': 'nom_lieu', 'precision': 'precision', 'donnees_ad': 'donnees_ad', 'nature_obj': 'nature_obj', 'type_regro': 'type_regro', 'methode_re': 'methode_re', 'comporteme': 'comporteme', 'technique_': 'technique_', 'statut_bio': 'statut_bio', 'etat_biolo': 'etat_biolo', 'naturalite': 'naturalite', 'preuve_exi': 'preuve_exi', 'precision_': 'precision_', 'stade_vie': 'stade_vie', 'sexe': 'sexe', 'objet_deno': 'objet_deno', 'type_denom': 'type_denom', 'niveau_sen': 'niveau_sen', 'statut_obs': 'statut_obs', 'floutage_d': 'floutage_d', 'statut_sou': 'statut_sou', 'type_info_': 'type_info_', 'methode_de': 'methode_de', });
lyr_Total_1.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'total': 'TextEdit', });
lyr_Insectes_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'insectes': 'TextEdit', });
lyr_Oiseaux_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'oiseaux': 'TextEdit', });
lyr_Mammifres_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'mammiferes': 'TextEdit', });
lyr_Angiospermes_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'angiospermes': 'TextEdit', });
lyr_Contoursparc_6.set('fieldImages', {'fid': 'Range', 'id_local': 'TextEdit', 'code_r_enp': 'TextEdit', 'nom_site': 'TextEdit', 'date_crea': 'DateTime', 'decret': 'TextEdit', 'modif': 'TextEdit', 'charte': 'TextEdit', 'arr_pref': 'TextEdit', 'modif_adm': 'DateTime', 'modif_geo': 'DateTime', 'surf_ha': 'TextEdit', 'gest_site': 'TextEdit', 'precision': 'TextEdit', 'src_geom': 'TextEdit', 'src_annee': 'TextEdit', });
lyr_Pointsdobservation_7.set('fieldImages', {'fid': 'TextEdit', 'id_synthes': 'TextEdit', 'id_source': 'TextEdit', 'id_perm_si': 'TextEdit', 'id_perm_gr': 'TextEdit', 'date_debut': 'TextEdit', 'date_fin': 'TextEdit', 'cd_nom': 'TextEdit', 'cd_ref': 'TextEdit', 'version_ta': 'TextEdit', 'nom_cite': 'TextEdit', 'nom_vern': 'TextEdit', 'nom_valide': 'TextEdit', 'regne': 'TextEdit', 'group1_inp': 'TextEdit', 'group2_inp': 'TextEdit', 'classe': 'TextEdit', 'ordre': 'TextEdit', 'famille': 'TextEdit', 'rang_taxo': 'TextEdit', 'nombre_min': 'TextEdit', 'nombre_max': 'TextEdit', 'altitude_m': 'TextEdit', 'altitude_1': 'TextEdit', 'profondeur': 'TextEdit', 'profonde_1': 'TextEdit', 'observateu': 'TextEdit', 'determinat': 'TextEdit', 'validateur': 'TextEdit', 'numero_pre': 'TextEdit', 'preuve_num': 'TextEdit', 'preuve_non': 'TextEdit', 'comment_re': 'TextEdit', 'comment_oc': 'TextEdit', 'date_creat': 'TextEdit', 'date_modif': 'TextEdit', 'derniere_a': 'TextEdit', 'jdd_uuid': 'TextEdit', 'jdd_nom': 'TextEdit', 'jdd_acteur': 'TextEdit', 'ca_uuid': 'TextEdit', 'ca_nom': 'TextEdit', 'reference_': 'TextEdit', 'code_habit': 'TextEdit', 'habitat': 'TextEdit', 'nom_lieu': 'TextEdit', 'precision': 'TextEdit', 'donnees_ad': 'TextEdit', 'nature_obj': 'TextEdit', 'type_regro': 'TextEdit', 'methode_re': 'TextEdit', 'comporteme': 'TextEdit', 'technique_': 'TextEdit', 'statut_bio': 'TextEdit', 'etat_biolo': 'TextEdit', 'naturalite': 'TextEdit', 'preuve_exi': 'TextEdit', 'precision_': 'TextEdit', 'stade_vie': 'TextEdit', 'sexe': 'TextEdit', 'objet_deno': 'TextEdit', 'type_denom': 'TextEdit', 'niveau_sen': 'TextEdit', 'statut_obs': 'TextEdit', 'floutage_d': 'TextEdit', 'statut_sou': 'TextEdit', 'type_info_': 'TextEdit', 'methode_de': 'TextEdit', });
lyr_Total_1.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'total': 'header label - always visible', });
lyr_Insectes_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'insectes': 'no label', });
lyr_Oiseaux_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'oiseaux': 'no label', });
lyr_Mammifres_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'mammiferes': 'no label', });
lyr_Angiospermes_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'angiospermes': 'header label - visible with data', });
lyr_Contoursparc_6.set('fieldLabels', {'fid': 'no label', 'id_local': 'no label', 'code_r_enp': 'no label', 'nom_site': 'no label', 'date_crea': 'no label', 'decret': 'no label', 'modif': 'no label', 'charte': 'no label', 'arr_pref': 'no label', 'modif_adm': 'no label', 'modif_geo': 'no label', 'surf_ha': 'no label', 'gest_site': 'no label', 'precision': 'no label', 'src_geom': 'no label', 'src_annee': 'no label', });
lyr_Pointsdobservation_7.set('fieldLabels', {'fid': 'hidden field', 'id_synthes': 'hidden field', 'id_source': 'hidden field', 'id_perm_si': 'hidden field', 'id_perm_gr': 'hidden field', 'date_debut': 'hidden field', 'date_fin': 'hidden field', 'cd_nom': 'hidden field', 'cd_ref': 'hidden field', 'version_ta': 'hidden field', 'nom_cite': 'hidden field', 'nom_vern': 'header label - visible with data', 'nom_valide': 'hidden field', 'regne': 'hidden field', 'group1_inp': 'hidden field', 'group2_inp': 'hidden field', 'classe': 'hidden field', 'ordre': 'hidden field', 'famille': 'hidden field', 'rang_taxo': 'hidden field', 'nombre_min': 'hidden field', 'nombre_max': 'hidden field', 'altitude_m': 'hidden field', 'altitude_1': 'hidden field', 'profondeur': 'hidden field', 'profonde_1': 'hidden field', 'observateu': 'hidden field', 'determinat': 'hidden field', 'validateur': 'hidden field', 'numero_pre': 'hidden field', 'preuve_num': 'hidden field', 'preuve_non': 'hidden field', 'comment_re': 'hidden field', 'comment_oc': 'hidden field', 'date_creat': 'hidden field', 'date_modif': 'hidden field', 'derniere_a': 'hidden field', 'jdd_uuid': 'hidden field', 'jdd_nom': 'hidden field', 'jdd_acteur': 'hidden field', 'ca_uuid': 'hidden field', 'ca_nom': 'hidden field', 'reference_': 'hidden field', 'code_habit': 'hidden field', 'habitat': 'hidden field', 'nom_lieu': 'hidden field', 'precision': 'hidden field', 'donnees_ad': 'hidden field', 'nature_obj': 'hidden field', 'type_regro': 'hidden field', 'methode_re': 'hidden field', 'comporteme': 'hidden field', 'technique_': 'hidden field', 'statut_bio': 'hidden field', 'etat_biolo': 'hidden field', 'naturalite': 'hidden field', 'preuve_exi': 'hidden field', 'precision_': 'hidden field', 'stade_vie': 'hidden field', 'sexe': 'hidden field', 'objet_deno': 'hidden field', 'type_denom': 'hidden field', 'niveau_sen': 'hidden field', 'statut_obs': 'hidden field', 'floutage_d': 'hidden field', 'statut_sou': 'hidden field', 'type_info_': 'hidden field', 'methode_de': 'hidden field', });
lyr_Pointsdobservation_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

// Initialize the map and set its view to chosen geographical coordinates(london) and a zoom level(13):
var mymap = L.map('mapid').setView([53.046775, -4.286951], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWxleHJpZ2J5IiwiYSI6ImNra3V6ZHUxdjRkdGIycHF0OWY2MmY1MGoifQ.huw3PRhwLPINPzih4CGrhQ'
}).addTo(mymap);



var shpfile = new L.Shapefile('/data/hru2.zip', {
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup(Object.keys(feature.properties).map(function (k) {
                return k + ": " + feature.properties[k];
            }).join("<br />"), {
                maxHeight: 100
            });
        }
    }
});
shpfile.addTo(mymap);
shpfile.once("data:loaded", function () {
    console.log("finished loaded shapefile");
});


var shpfile2 = new L.Shapefile('/data/hru1.zip', {
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            layer.bindPopup(Object.keys(feature.properties).map(function (k) {
                return k + ": " + feature.properties[k];
            }).join("<br />"), {
                maxHeight: 100
            });
        }
    }
});
shpfile2.addTo(mymap);
shpfile2.once("data:loaded", function () {
    console.log("finished loaded shapefile");
});

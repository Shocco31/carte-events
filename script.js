// votre code JS
var mymap = L.map('mapid').setView([48.8534, 2.3488], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 12,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianVsaWVua29tcCIsImEiOiJjanR1NGFuYjkxMmNvNDBucGI1aXZ4Y285In0.hiSplFD5CODUd9yxRO_qkg'
}).addTo(mymap);

var marker = L.marker([48.858370, 2.294481]).addTo(mymap);
marker.bindPopup("<b>La Tour Eiffel</b><br>Elle est toute mimi :)").openPopup();
var marker = L.marker([48.860682, 2.337590]).addTo(mymap);
marker.bindPopup("<b>Le musée du Louvre</b><br>Il est tout choupi :)").openPopup();
var marker = L.marker([48.887698, 2.343000]).addTo(mymap);
marker.bindPopup("<b>Le sacré coeur</b><br>Sacrément impressionnant :)").openPopup();
var marker = L.marker([48.848215, 2.347622]).addTo(mymap);
marker.bindPopup("<b>Le Panthéon</b><br>A la Sorbonne :)").openPopup();
var marker = L.marker([48.853133, 2.349890]).addTo(mymap);
marker.bindPopup("<b>Cathédrale Notre-Dame de Paris</b><br>Toujours debout :)").openPopup();
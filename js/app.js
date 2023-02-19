var api_key = config.MY_KEY;
let lat = 0;
let long = 0;

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var submitBtn = document.getElementById('submit-btn')

var ip = document.getElementById('ip-add');

var loc = document.getElementById('loc');

var timezone = document.getElementById('timezone');

var isp = document.getElementById('isp')

var inputField = document.querySelector('#ip-input');

async function fetchData() {
    let response = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_'+api_key+'&ipAddress='+inputField.value);
    let data = await response.json();
    lat = data.location.lat;
    long = data.location.lng;
    map.setView([lat, long]);
    ip.innerHTML = data.ip;
    loc.innerHTML = data.location.city+ ' , ' +data.location.country+ ' , ' +data.location.region;
    timezone.innerHTML = "UTC "+data.location.timezone
    isp.innerHTML = data.isp
}

submitBtn.addEventListener('click', fetchData);
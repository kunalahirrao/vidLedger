let map;

function initMap() {
  const loc = { lat: 19.997454, lng: 73.789803 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    center: loc,
    zoom: 8,
  });
  const marker = new google.maps.Marker({position: loc, map: map});
}


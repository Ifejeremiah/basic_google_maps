// Initialize and add the map
function initMap() {
  // The location of Uluru
  const location = { lat: 6.489810, lng: 3.356230 };
  // The map, centered at location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: location,
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
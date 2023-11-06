function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 17.1905004, lng: -93.0539442};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Pantepec, Chiapas' // Title Location
    });
}
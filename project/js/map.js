 // code from https://www.w3schools.com/graphics/tryit.asp?filename=trymap_overlays_marker
 // the function will generate the map
 function myMap() {
            var myCenter = new google.maps.LatLng(63.4347593, 10.4115624);
            var mapCanvas = document.getElementById("map");
            var mapOptions = {center: myCenter, zoom: 17};
            var map = new google.maps.Map(mapCanvas, mapOptions);
            var marker = new google.maps.Marker({position:myCenter});
            marker.setMap(map);
            }
functiion initialize(){
	var mapOptions = {
		zoom: 15;
		center: new google.maps.LatLng(59.9387969,30.3208893)
	}

	var map = new google.maps.Map(Document.getElementById('map-canvas'),mapOptions);
	var image = 
	"../img/Pin.png";
	var myLatLng = new google.maps.LatLng(59.9387969,30.3208893);
	var beachMarker = new google.maps.Marker ({
		position: myLatLng,
		map: map,
		icon: image
	})
}
google.maps.event.addDomListener(window, 'load', initialize);
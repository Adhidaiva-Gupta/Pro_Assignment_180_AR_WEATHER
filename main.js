let latitude, longitude, destination;

$(document).ready(function () {
	alert("Please allow the device to know your location!")
	initGeolocation();
})

function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

$(function () {
	$("#navigate-button").click(function () {
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

function success(position) {
	longitude = position.coords.longitude;
	latitude = position.coords.latitude

	// Initializing Mapbox
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 4
	});

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}).on('result', function (e) {
			destination = e.result.center
		})
	);

	var img1 = document.querySelector("#amber")

	// Create a Amber Palace, Jaipur Marker and add it to the map.
	var marker1 = new mapboxgl.Marker({
		element: img1
	})
		.setLngLat([75.85133, 26.98547])
		.addTo(map);

	var img2 = document.querySelector("#gateway")
	// Create a  Gateway of India, Mumbai Marker and add it to the map.
	var marker2 = new mapboxgl.Marker({
		element: img2
	})
		.setLngLat([72.835163, 18.920180])
		.addTo(map);

	var img3 = document.querySelector("#gate")
	// Create a India Gate Marker and add it to the map.
	var marker3 = new mapboxgl.Marker({
		element: img3
	})
		.setLngLat([77.22931, 28.61495])
		.addTo(map);


	var img4 = document.querySelector("#lotus")

	// Create a Lotus Temple, Delhi Marker and add it to the map.
	var marker4 = new mapboxgl.Marker({
		element: img4
	})
		.setLngLat([77.25880, 28.553501])
		.addTo(map);


	//Create a Victoria Memorial, Kolkata Marker and add it to the map.
	var img5 = document.querySelector("#victoria")

	var marker5 = new mapboxgl.Marker({
		element: img5
	})
		.setLngLat([88.342785, 22.546170])
		.addTo(map);


        //Grand Canyon
        var img6 = document.querySelector("#canyon")

        var marker6 = new mapboxgl.Marker({
            element: img6
        })  
            .setLngLat([-112.22811903726956, 36.29010200731467])
            .addTo(map)


        //Disney Land

        var img7 = document.querySelector("#disney-land")

        var marker7 = new mapboxgl.Marker({
            element: img7
        })
            .setLngLat([-117.91904930524628, 33.812350285707204])
            .addTo(map)


        //Harvard University
        var img8 = document.querySelector("#harvard")

        var marker8 = new mapboxgl.Marker({
            element: img8
        })
            .setLngLat([-71.11743341145055, 42.37460321682586])
            .addTo(map)


        //Statue of Liberty

        var img9 = document.querySelector("#liberty")

        var marker9 = new mapboxgl.Marker({
            element: img9
        })
            .setLngLat([-74.04409270731094, 40.689338858662886])
            .addTo(map)


        //Space Needle

        var img10 = document.querySelector("#space-needle")

        var marker10 = new mapboxgl.Marker({
            element: img10
        })
            .setLngLat([-122.34912719903214, 47.620629208987694])
            .addTo(map)


}
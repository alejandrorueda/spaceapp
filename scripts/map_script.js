var map;
var state = "";
var marker;
var infowindow;
var prev_infowindow =false;
var mdata = citymap;
var mmarker = [];
var circles = [];

function auto_update(){
	if(state===""){

	}
	if(state==="earthquake"){
		load_earthquakes();
	}
	//setTimeout(auto_update, 5000);
}

/** Show and hide menu buttons */
function toggle_buttons(){
	var str_visibility = document.getElementById("btn-menu-icon").className;
	var visibility;
	if(str_visibility === "fa fa-bars w3-large"){visibility = 0;}else{visibility = 1;}
	var btn_menu_icon = document.getElementById("btn-menu-icon");
	var x = document.getElementsByClassName("round-btn");
	if(visibility === 0){
		btn_menu_icon.className = "fa fa-times fa-2x";
		for(i=0; i<x.length; i++){
			setTimeout(show_btn, (i*100), x[i], 2);
		}
	}else{
		btn_menu_icon.className = "fa fa-bars w3-large";
		for(i=0; i<x.length; i++){
			setTimeout(hide_btn, ((x.length-1)*100 - i*100), x[i], 40);
		}
	}
}

/**Shows the buttons with a fade effect*/
function show_btn(x,p){
	if(p<=40){
		x.style.width = (p+"px");
		x.style.height = (p+"px");
		x.style.opacity = p/40;
		x.style.marginLeft = (-20*(p/40)+"px");
		setTimeout(show_btn, 10, x, (p+2))	;
	}
}

/**Hide the buttons with a fade effect*/
function hide_btn(x,p){
	if(p>=0){
		x.style.width = (p+"px");
		x.style.height = (p+"px");
		x.style.opacity = p/40;
		x.style.marginLeft = (-20*(p/40)+"px");
		setTimeout(hide_btn, 10, x, (p-2))	;
	}
}

/**Centers the map in the user location*/
function find_location(){
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(update_position);
    }
}

/**Auxiliar function to find_location*/
function update_position(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	infowindow.close();
	infowindow.setContent("<strong>You are here!</strong><br>["+latitude+","+longitude+"]");
	marker.setVisible(false);
	marker.setPosition(new google.maps.LatLng(latitude, longitude));
	marker.setVisible(true);
	infowindow.open(map, marker);

	map.setCenter(new google.maps.LatLng(latitude, longitude))
	map.setZoom(17);
}

/** Hide splash screen after a few seconds */
function hide_splash_screen(){
	sscreen = document.getElementById("splash-screen");
	sscreen.style.display = "none";
}


/** Draws the map in the screen */
function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
	  	center: {lat: 38.977032, lng: -1.855353},
	  	zoom: 5
	});

	innerElements();
	auto_update();
	setTimeout(hide_splash_screen, 1500);
	load_information();
}

/** Draws earthquake information on the map */
function load_earthquakes(){
	state = "earthquake";

	delete_draws();
	delete_markers();

	// Create a <script> tag and set the USGS URL as the source.
	var script = document.createElement('script');

	script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
	document.getElementsByTagName('head')[0].appendChild(script);

	map.data.setStyle(function(feature) {
	  var magnitude = feature.getProperty('mag');
	  return {
		icon: getCircle(magnitude)
	  };
	});
}

function colorGradiente(porcentaje){
	if(porcentaje == undefined) return '#EEE';

	var red = 'FF0000'
	var lime = '00FF00'
	var ratio = porcentaje/100;
	var r = Math.ceil(parseInt(red.substring(0,2), 16) * ratio + parseInt(lime.substring(0,2), 16) * (1-ratio));
	var g = Math.ceil(parseInt(red.substring(2,4), 16) * ratio + parseInt(lime.substring(2,4), 16) * (1-ratio));
	var b = Math.ceil(parseInt(red.substring(4,6), 16) * ratio + parseInt(lime.substring(4,6), 16) * (1-ratio));
	var hex = hexCode(r)+hexCode(g)+hexCode(b);
	return '#'+hex;
}

function hexCode(x){
	x = x.toString(16);
	return (x.length == 1) ? '0'+x :x;
}

function load_co2(){
	delete_draws();
	delete_markers();
	for (var city in citymap) {
		// Add the circle for this city to the map.
		var cityCircle = new google.maps.Circle({
		strokeColor: colorGradiente(citymap[city].co2_per),
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: colorGradiente(citymap[city].co2_per),
		fillOpacity: 0.35,
		map: map,
		center: citymap[city].center,
		radius: 50000
	});
	circles.push(cityCircle);
	}
}

function load_co(){
	delete_draws();
	delete_markers();
	for (var city in citymap) {
		// Add the circle for this city to the map.
		var cityCircle = new google.maps.Circle({
		strokeColor: colorGradiente(citymap[city].co_per),
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: colorGradiente(citymap[city].co_per),
		fillOpacity: 0.35,
		map: map,
		center: citymap[city].center,
		radius: 50000
	});
	circles.push(cityCircle);
	}
}

function load_no(){
	delete_draws();
	delete_markers();
	for (var city in citymap) {
		// Add the circle for this city to the map.
		var cityCircle = new google.maps.Circle({
		strokeColor: colorGradiente(citymap[city].no2_per),
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: colorGradiente(citymap[city].no2_per),
		fillOpacity: 0.35,
		map: map,
		center: citymap[city].center,
		radius: 50000
	});
	circles.push(cityCircle);
	}
}

function load_long_wave_flux(){
	delete_draws();
	delete_markers();
	for (var city in citymap) {
		// Add the circle for this city to the map.
		var cityCircle = new google.maps.Circle({
		strokeColor: colorGradiente(citymap[city].lw_flux_per),
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: colorGradiente(citymap[city].lw_flux_per),
		fillOpacity: 0.35,
		map: map,
		center: citymap[city].center,
		radius: 50000
	});
	circles.push(cityCircle);
	}
}

function load_short_wave_flux(){
	delete_draws();
	delete_markers();
	for (var city in citymap) {
		// Add the circle for this city to the map.
		var cityCircle = new google.maps.Circle({
		strokeColor: colorGradiente(citymap[city].sw_flux_per),
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: colorGradiente(citymap[city].sw_flux_per),
		fillOpacity: 0.35,
		map: map,
		center: citymap[city].center,
		radius: 50000
	});
	circles.push(cityCircle);
	}
}

function delete_draws(){
	map.data.setStyle(null);
	circles.forEach(function(element) {
		element.setMap(null);
	}, this);
}

function delete_markers(){
	if(mmarker.length > 0){
		for (var i = 0; i < mmarker.length; i++) {
          mmarker[i].setMap(null);
        }
	}
	mmarker = [];
}

function load_information(){
	var miterator=0;
	var minfowindow;

	delete_draws();
	delete_markers();

	for(key in mdata){
		var mname= citymap[key].city;
		var lat = citymap[key].center.lat;
		var lng = citymap[key].center.lng;
		var _co2 = citymap[key].co2;
		var _co = citymap[key].co;
		var _no2 = citymap[key].no2;
		var _dust = citymap[key].dust;
		var _lw_flux = citymap[key].lw_flux;
		var _sw_flux = citymap[key].sw_flux;

		var str_co2 = "";
		var str_co = "";
		var str_dust = "";
		var str_lw = "";
		var str_sw = "";

		if(_co2 !== null){
			str_co2 = '<p><strong>CO2:</strong> '+_co2+'</p>';
		}

		if(_co !== null){
			str_co = '<p><strong>CO:</strong> '+_co+'</p>';
		}

		if(_dust !== null){
			str_no2 = '<p><strong>Dust:</strong> '+_dust+'</p>';
		}

		if(_no2 !== null){
			str_dust = '<p><strong>NO2:</strong> '+_no2+'</p>';
		}

		if(_lw_flux !== null){
			str_lw = '<p><strong>Long Wave Flux:</strong> '+_lw_flux+'</p>';
		}

		if(_sw_flux !== null){
			str_sw = '<p><strong>Short Wave Flux:</strong> '+_sw_flux+'</p>';
		}

		var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+mname+'</h1>'+
            '<div id="bodyContent">'+
            str_co+
			str_co2+
			str_dust+
			str_lw+
			str_sw+
            '</div>'+
            '</div>';


        mmarker[miterator] = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map,
          title: mname
        });

		var minfowindow = new google.maps.InfoWindow();

		google.maps.event.addListener(mmarker[miterator],'click', (function(marker,content,infowindow){
			return function() {
				if( prev_infowindow ) {
				   prev_infowindow.close();
				}

				prev_infowindow = infowindow;
				infowindow.setContent(content);
				infowindow.open(map,marker);
			};
		})(mmarker[miterator],contentString,minfowindow));

		miterator++;
	}
}

function addInfoMarker(mmarker, minfowindow){
	minfowindow.open(map, mmarker);
}

/** Draw every element on the map */
  function innerElements() {
	var input = /** @type {!HTMLInputElement} */(
		document.getElementById('nav-search-box'));
	var btn_location = (document.getElementById('location-btn'));
	var btn_menu = (document.getElementById('btn-menu'));
	var btn_info = (document.getElementById('info-filter-btn-container'));
	var btn_co = (document.getElementById('co-filter-btn-container'));
	var btn_no = (document.getElementById('no-filter-btn-container'));
	var btn_co2 = (document.getElementById('co2-filter-btn-container'));
	var btn_earthquake = (document.getElementById('earthquake-filter-btn-container'));
	var splash_screen = (document.getElementById('splash-screen'));
	var btn_swf = (document.getElementById('swf-filter-btn-container'));
	var btn_lwf = (document.getElementById('lwf-filter-btn-container'));

	map.controls[google.maps.ControlPosition.CENTER].push(splash_screen);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(btn_location);
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(btn_menu);
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(btn_info);
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(btn_co);
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(btn_co2);
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(btn_no);
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(btn_swf);
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(btn_lwf);
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(btn_earthquake);

	var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

	infowindow = new google.maps.InfoWindow();
	marker = new google.maps.Marker({
	  map: map,
	  anchorPoint: new google.maps.Point(0, -29)
	});

	autocomplete.addListener('place_changed', function() {
	  infowindow.close();
	  marker.setVisible(false);
	  var place = autocomplete.getPlace();
	  if (!place.geometry) {
		// User entered the name of a Place that was not suggested and
		// pressed the Enter key, or the Place Details request failed.
		window.alert("No details available for input: '" + place.name + "'");
		return;
	  }

	  // If the place has a geometry, then present it on a map.
	  if (place.geometry.viewport) {
		map.fitBounds(place.geometry.viewport);
	  } else {
		map.setCenter(place.geometry.location);
		map.setZoom(17);
	  }
	  marker.setIcon(/** @type {google.maps.Icon} */({
		url: place.icon,
		size: new google.maps.Size(71, 71),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(17, 34),
		scaledSize: new google.maps.Size(35, 35)
	  }));
	  marker.setPosition(place.geometry.location);
	  marker.setVisible(true);

	  var address = '';
	  if (place.address_components) {
		address = [
		  (place.address_components[0] && place.address_components[0].short_name || ''),
		  (place.address_components[1] && place.address_components[1].short_name || ''),
		  (place.address_components[2] && place.address_components[2].short_name || '')
		].join(' ');
	  }

	  infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
	  infowindow.open(map, marker);
	});

  }


function getCircle(magnitude) {
	return {
	  path: google.maps.SymbolPath.CIRCLE,
	  fillColor: 'red',
	  fillOpacity: .2,
	  scale: Math.pow(2, magnitude) / 2,
	  strokeColor: 'white',
	  strokeWeight: .5
	};
}

function getColoredCircle(magnitude) {
	return {
	  path: google.maps.SymbolPath.CIRCLE,
	  fillColor: 'red',
	  fillOpacity: .2,
	  scale: Math.pow(2, magnitude) / 2,
	  strokeColor: 'white',
	  strokeWeight: .5
	};
}


function getSquare(size) {
	return {
	  path: 'M 0,0 1,0 1,1 0,1 z',
	  fillColor: 'red',
	  fillOpacity: .2,
	  scale: Math.pow(2, size) / 2,
	  strokeColor: 'white',
	  strokeWeight: .0
	};
}

function eqfeed_callback(results) {
	map.data.addGeoJson(results);
}

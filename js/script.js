// Map Initialization.
function init() {
  var canvas_element = document.getElementById('map-show');
  var myLocation = new google.maps.LatLng(29.58888, 52.58652); // Shiraz City
  var mapOptions = {
    center: myLocation,
    zoom: 10,
    mapTypeId: 'roadmap',
    mapTypeControl: true,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'terrain', 'hybrid', 'satellite']
    },
  };

  // Form a marker for the map
  const Star = {
    fillOpacity:.2,
    scale: 0.15,
    strokeWeight: 30,
  };

  //define the map
  var myMap = new google.maps.Map(canvas_element, mapOptions);

  //marker on the map
  var marker = new google.maps.Marker({
    position: myLocation,
    title: "Shiraz City",
    icon: Star, 
    map: myMap,
  });

  //  info message to the map
  var contentString = '<h1 id="headermap">Shiraz City</h1><p id="textmap">Shiraz is a city in south-central Iran, known for its literary history and many gardens. </p>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 500,
  });

  //  this is info message when mouse is put on marker
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });

  //this is info message when mouse is take out the marker
  google.maps.event.addListener(marker, 'mouseout', function() {
    infowindow.close();
  });

  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
      ],
    },
    markerOptions: {
      icon:
        "https://s16.picofile.com/file/8415471568/mark.png",
    },
    circleOptions: {
      fillColor: "#ffffff",
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1,
    },
  });

  drawingManager.setMap(myMap); // this is Drawing Tool on the map
}

// Box Slider with auto play
$(document).ready(function(){
  $('.slider').slSlider({
    mode: 'horizontal',
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    controls: true,
    captions: false,
    touchEnabled: true,
    infiniteLoop: true,
  });
});

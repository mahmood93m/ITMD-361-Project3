// Map Initialization.
function init() {
  var canvas_element = document.getElementById('map-show');
  var myLocation = new google.maps.LatLng(29.58888, 52.58652); // Shiraz City
  var mapOptions = {
    center: myLocation,
    zoom: 10,
    mapTypeId: 'hybrid',
    mapTypeControl: true,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'terrain', 'hybrid', 'satellite']
    },
  };

  // Form a marker for the map
  const Star = {
    path:
      "M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z",
    fillColor: "blue",
    fillOpacity: 0.8,
    scale: 0.15,
    strokeColor: "black",
    strokeWeight: 2,
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
    maxWidth: 200,
  });

  //  this is info message when mouse is put on marker
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });

  //this is info message when mouse is take out the marker
  google.maps.event.addListener(marker, 'mouseout', function() {
    infowindow.close();
  });

  // Enable Drawing Tool (marker, circle, etc.) at the top of the Map.
  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        google.maps.drawing.OverlayType.RECTANGLE,
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

// Box Slider with auto play and vertical transition between slides.
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

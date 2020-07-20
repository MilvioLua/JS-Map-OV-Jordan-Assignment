function initMap(){
  // Map options

  var options = {
    zoom:2,
    center:{lat:-14.9285889,lng:13.478803}
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);


  // Listen for click on map
  //google.maps.event.addListener(map, 'click', function(event){
    // Add marker
  //  addMarker({coords:event.latLng});
//  });

  /*
  // Add marker
  var marker = new google.maps.Marker({
    position:{lat:42.4668,lng:-70.9495},
    map:map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h1>Lynn MA</h1>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
  */

  // Array of markers
  var markers = [
    {
      //1
      coords:{lat:42.4668,lng:-70.9495},
      iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
      "Aboriginal people of the area. It has many springs, waterholes, " +
      "rock caves and ancient paintings. Uluru is listed as a World " +
      "Heritage Site.</p>" +
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
      "(last visited June 22, 2009).</p>" +
      "</div>"
    },




    //2
    {
      coords:{lat:42.8584,lng:-70.9300},
      content:'<h1>Amesbury MA</h1>'
    },





    //3
    {
      coords:{lat:42.7762,lng:-71.0773}
    }
  ];





  // Loop through markers
  for(var i = 0;i < markers.length;i++){
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      //icon:props.iconImage
    });

    // Check for customicon
    if(props.iconImage){
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content,
        maxWidth: 200

      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  }
}

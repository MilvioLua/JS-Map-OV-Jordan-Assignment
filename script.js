function initMap(){
  // Map options

  var options = {
    zoom:2.5,
    center:{lat:38.9637,lng:35.2433}
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
      coords:{lat:27.700769,lng:85.300140},
      iconImage:'img/Nepal.png',
      content:'<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h4>Nepal</h4>' +
      '<div id="bodyContent">' +
      '<p> <b class="carrer">VFX Artist</b>, </br> ' +
      '<b class="major">Diploma in VFX and Animation</b> </br> ' +
      '<b class="location">Nepal | Kathmandu</b>, </br>  ' +
      '<b class="duties">Video Editing | Animation design</b></p>' +
      "</div>"
    },

    {
      coords:{lat:-14.91717,lng:13.4925},
      iconImage:'img/milvio.png',
      content:'<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h4>Milvio LuA</h4>' +
      '<div id="bodyContent">' +
      '<p> <b class="carrer">Software Developer</b>, </br> ' +
      '<b class="major">BA. PC Engineering</b> </br> ' +
      '<b class="location">Angola</b>, </br>  ' +
      '<b class="duties">Development & Design</b></p>' +
      "</div>"
    },

    {
      coords:{lat:10.762622,lng:106.660172},
      iconImage:'img/Hanh.png',
      content:'<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h4>Hanh Tran</h4>' +
      '<div id="bodyContent">' +
      '<p> <b class="carrer">Designer</b>, </br> ' +
      '<b class="major">BA. in Business Administration</b> </br> ' +
      '<b class="location">Vietnam | Nha Trang </b>, </br>  ' +
      '<b class="duties">Research & Design</b></p>' +
      "</div>"
    },

    {
      coords:{lat:33.510414,lng:36.278336},
      iconImage:'img/Syria.png',
      content:'<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h4>Syria</h4>' +
      '<div id="bodyContent">' +
      '<p> <b class="carrer">Law Student International Laws</b>, </br> ' +
      '<b class="major">MA. Business Administration BA. Art & Humanities</b> </br> ' +
      '<b class="location">Syria | Alhsakeh</b>, </br>  ' +
      '<b class="duties">Research Communication & Drafting</b></p>' +
      "</div>"
    },

    {
      coords:{lat:30.741482,lng:76.768066},
      iconImage:'img/Arsun.png',
      content:'<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h4>Arsum Pathak</h4>' +
      '<div id="bodyContent">' +
      '<p> <b class="carrer">Graduate Teaching Assistant</b>, </br> ' +
      '<b class="major">MSc/Ph.D Candidate (ABD)</b> </br> ' +
      '<b class="location">India | Chandigarh</b>, </br>  ' +
      '<b class="duties">Research & Communication</b></p>' +
      "</div>"
    },


    {
      coords:{lat:21.1289956,lng:82.7792201},
      iconImage:'img/Palak.png',
      content:'<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h4>Palak Gupta</h4>' +
      '<div id="bodyContent">' +
      '<p> <b class="carrer">Sub Editor</b>, </br> ' +
      '<b class="major">BA. in journalism and then post Graduate Diploma in English journalism</b> </br> ' +
      '<b class="location">India | Pathankot</b>, </br>  ' +
      '<b class="duties">Editing, Research & Analysis</b></p>' +
      "</div>"
    },


    {
        coords:{lat:37.6000,lng:-95.6650},
        iconImage:'img/Chris.png',
        content:'<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h4>Christopher Wizda</h4>' +
        '<div id="bodyContent">' +
        '<p> <b class="carrer">NGO Strategy Consultant, English Teacher</b>, </br> ' +
        '<b class="major">MSc International Business Development</b> </br> ' +
        '<b class="location">USA | Anchorage</b>, </br>  ' +
        '<b class="duties">Communication</b></p>' +
        "</div>"
      },


      {
          coords:{lat:40.730610,lng:-73.935242},
          iconImage:'img/Swetal.png',
          content:'<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h4>Swetal Sindhvad</h4>' +
          '<div id="bodyContent">' +
          '<p> <b class="carrer">Research Manager & Education Specialist</b>, </br> ' +
          '<b class="major">PHD in Comparative & International Development Education</b> </br> ' +
          '<b class="location">USA | New York</b>, </br>  ' +
          '<b class="duties">Research, Policy Analysis Report/ Policy Brief Writing</b></p>' +
          "</div>"
        },


        {
            coords:{lat:38.8951,lng:-77.0364},
            iconImage:'img/Erin.png',
            content:'<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h4>Erin Lyons</h4>' +
            '<div id="bodyContent">' +
            '<p> <b class="carrer">Freelance Translator Editor & Consultant</b>, </br> ' +
            '<b class="major">BA. Romance Languages and Literatures MA. Translation and Interpretation</b> </br> ' +
            '<b class="location">USA | Washington DC</b>, </br>  ' +
            '<b class="duties">Translation / Editing & Research</b></p>' +
            "</div>"
          },

          {
              coords:{lat:14.0818,lng:-87.20681},
              iconImage:'img/Maria.png',
              content:'<div id="content">' +
              '<div id="siteNotice">' +
              "</div>" +
              '<h4>Maria Torres</h4>' +
              '<div id="bodyContent">' +
              '<p> <b class="carrer">Field Producer/ Freelance</b>, </br> ' +
              '<b class="major">Audiovisual Comunications and Advertising with specialization in strategic and digital Marketing</b> </br> ' +
              '<b class="location">Honduras | Tegucigalpa</b>, </br>  ' +
              '<b class="duties">Production | Graphic Design & Social media strategist</b></p>' +
              "</div>"
            },

            {
                coords:{lat:15.2000,lng:-86.2419},
                iconImage:'img/Lisa.png',
                content:'<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h4>Lisa Wong Un</h4>' +
                '<div id="bodyContent">' +
                '<p> <b class="carrer">Freelance</b>, </br> ' +
                '<b class="major">HBA in Communication Culture, Information & Technology</b> </br> ' +
                '<b class="location">Honduras | Tegucigalpa</b>, </br>  ' +
                '<b class="duties">Design & Comunications</b></p>' +
                "</div>"
              },

              {
                  coords:{lat:55.15402,lng:61.42915},
                  iconImage:'img/Valeria.png',
                  content:'<div id="content">' +
                  '<div id="siteNotice">' +
                  "</div>" +
                  '<h4>Valeriia Leonte</h4>' +
                  '<div id="bodyContent">' +
                  '<p> <b class="carrer">Policy Advisor</b>, </br> ' +
                  '<b class="major">BA. of Arts (Communications) Juris Doctor, MA. Public & International Lawy</b> </br> ' +
                  '<b class="location">Russia | Cheliabinsk</b>, </br>  ' +
                  '<b class="duties">Research | Policy design & Project management</b></p>' +
                  "</div>"
                },

                {
                    coords:{lat:4.60971,lng:-74.08175},
                    iconImage:'img/Giselle.png',
                    content:'<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h4>Giselle Vargas</h4>' +
                    '<div id="bodyContent">' +
                    '<p> <b class="carrer">Graphic Designer & Art Director</b>, </br> ' +
                    '<b class="major">BA. of Industrial design studies in art and illustration</b> </br> ' +
                    '<b class="location">Colombia | Bogota</b>, </br>  ' +
                    '<b class="duties">Illustration | Design & Comunication</b></p>' +
                    "</div>"
                  },

                  {
                      coords:{lat:36.806389,lng:10.181667},
                      iconImage:'img/Abesh.png',
                      content:'<div id="content">' +
                      '<div id="siteNotice">' +
                      "</div>" +
                      '<h4>Abesh Subba</h4>' +
                      '<div id="bodyContent">' +
                      '<p> <b class="carrer">Student</b>, </br> ' +
                      '<b class="major">MA. in Media Engineering</b> </br> ' +
                      '<b class="location">Tunisia | Bizerte</b>, </br>  ' +
                      '<b class="duties">Design, Project management</b></p>' +
                      "</div>"
                    },

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

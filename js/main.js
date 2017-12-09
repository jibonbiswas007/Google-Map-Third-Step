(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
        var uluru = {lat: 22.8810521, lng: 89.4455682};
            $('.map')
              .gmap3({
                zoom: 14,
                center: uluru,
                scrollwheel: false
              })
              .marker({
                position: uluru
              })
              .infowindow({
                position: uluru,
                content: "Hello from Khulna",
                pixelOffset: new google.maps.Size(0,-37),
                
              })
              .then(function (infowindow) {
                infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
              })
            .rectangle({
                bounds: [22.9071, 89.52, 22.845641, 89.5403279],
                fillColor: "#000000"
              })
        
        
          }); // End of document ready
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));
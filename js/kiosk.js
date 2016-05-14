$(window).ready(function() {

  var body = $("body");
  var initialize = true;

  var kiosk = {

      init: function() {

          var params = this.getParams();

          if (params["source"]) {

            if (params["type"] === 'kiosk') {
              console.log(window.location.pathname);
              window.location = "screensaver.html?source=" + params["source"]
            }

            return;
          }

          window.location = "https://www.hideawaypizza.com"
      },

      getParams: function(param) {
          var vars = {};
          window.location.href.replace( location.hash, '' ).replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function( m, key, value ) { // callback
              vars[key] = value !== undefined ? value : '';
            }
          );

          if ( param ) {
            return vars[param] ? vars[param] : null;
          }
          return vars;
      },

      loading: function() {
        $('.modal').toggle();
      }
  };


      kiosk.init();

      $('a').click(kiosk.loading);

});

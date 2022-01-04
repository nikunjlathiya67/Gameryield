var $j = jQuery.noConflict();

let globalVolume = 0;
let isVolumeOn = false;
$j("a").on('mouseover', function(e) {
  if (!isVolumeOn) {
    return false;
  }
  var x = document.getElementById("bg_music");
  x.volume = globalVolume;
  x.play();
});

$j(document).ready(function() {
  $j('#music_btn').on('click', function() {
    isVolumeOn = !isVolumeOn;
    if(isVolumeOn) {
      globalVolume = 0.05;
      $j(this).html('On');
    } else {
      globalVolume = 0;
      $j(this).html('Off');
    }
  });
  setTimeout(function () {
    $j('header').trigger('click');
  }, 500)
   
    $j('.loading-overlay').show();
    setTimeout(function() {$j('.loading-overlay').hide()}, 5000);

    var str_section = window.location.href;
    var section_id = str_section.substring(str_section.indexOf('#') + 1, str_section.length);
    if (section_id == "Token_allocation") {
        window.setTimeout(initHighChart, 1000);
    }
});


// FAQ start
var MODULE = MODULE || {};

(function($j, MODULE) {
  MODULE.init_accordion = function() {
    // Logic for accordion
    var accordion = (function() {
      var $jaccordion_elem = $j(".c-accordion"),
        $jaccordion_headerlink = $jaccordion_elem.find(
          ".js-accordion__entry-header-link"
        ),
        $jaccordion_item = $jaccordion_elem.find(".c-accordion__entry");

      var settings = {
        speed: parseInt($jaccordion_elem.attr("data-speed")) || 400,
        individual_openable: $jaccordion_elem.attr("data-individual-openable") === "true"
      };

      return {
        init: function() {
          $jaccordion_headerlink.on("click", function(e) {
            e.preventDefault();
            accordion.toggle($j(this));
          });

          if (
            !settings.individual_openable &&
            $j(".c-accordion__entry.is-expanded").length > 1
          ) {
            $j(".c-accordion__entry.is-expanded").removeClass(
              "is-expanded"
            );
          }
        },
        toggle: function(self) {
          if (
            !settings.individual_openable &&
            self[0] !=
              self
                .closest(".c-accordion")
                .find(
                  ".c-accordion__entry.is-expanded .c-accordion__entry-header-link"
                )[0]
          ) {
            self
              .closest(".c-accordion")
              .find(".c-accordion__entry")
              .removeClass("is-expanded")
              .find(".c-accordion__entry-body")
              .slideUp();
          }

          self
            .closest(".c-accordion__entry")
            .toggleClass("is-expanded")
            .attr("aria-expanded", function(i, attr) {
              return attr == "true" ? "false" : "true";
            });

          self.parent().attr("aria-selected", function(i, attr) {
            return attr == "true" ? "false" : "true";
          });

          self
            .parent()
            .next()
            .stop()
            .slideToggle(settings.speed)
            .attr("aria-hidden", function(i, attr) {
              return attr == "true" ? "false" : "true";
            });
        }
      };
    })();

    accordion.init();
  };

  /* READY FUNCTION
  ====================== */

  $j(function() {
    MODULE.init_accordion();
  });
})(jQuery, MODULE);

// FAQ ends
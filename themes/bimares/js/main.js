(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.sidebarCanvas = {
    attach: function (context, settings) {
      $('.s-menu__toggle')
          .click(function () {
            $(this).toggleClass('active');
            $('.s-menu__canvas').toggleClass('active');
          });
    }
  };
})(jQuery, Drupal, drupalSettings);
/*global gettext, $*/
var ep = ep || {};
ep.ui = (function() {
    function wrapFileUploads() {
        $('input[type=file]').each(function() {
            var statusLine = $('<span>').addClass('status');
            var wrapper = $('<span>').addClass('input-wrapper').addClass('btn-primary').text(gettext('Choose a file'));
            var outerWrapper = $('<span>').addClass('file-outer-wrapper');
            $(this).wrap(wrapper);
            $(this).parent('span').wrap(outerWrapper);
            $(this).parents('.file-outer-wrapper').append(statusLine);
        });

        $('body').on('change', 'input[type=file]', function(evt) {
            var filename = "";
            if ($(this)[0].files) {
                filename = $(this)[0].files[0].name;
            }
            $(this).parents('.file-outer-wrapper').find('.status').text(filename);
        });
    }

    function init() {
        wrapFileUploads();
    }

    init();
}());
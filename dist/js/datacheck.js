'use strict';

$(document).ready(function () {
    $('.image').click(function (e) {
        var previewImage = $(e.currentTarget).find('img')[0].getAttribute('src');

        var imageNumber = previewImage.split('image').pop().split('.').shift();

        sessionStorage.setItem('selectedImage', imageNumber);
        window.location.href = 'gallery.html';
    });
});
//# sourceMappingURL=datacheck.js.map
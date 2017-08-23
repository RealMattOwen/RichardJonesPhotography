$(document).ready(() => {
    $('.image').click(e => {
        let previewImage = $(e.currentTarget).find('img')[0].getAttribute('src');

        let imageNumber = previewImage.split('image').pop().split('.').shift();

        sessionStorage.setItem('selectedImage', imageNumber);
        window.location.href='gallery.html';
    });
});
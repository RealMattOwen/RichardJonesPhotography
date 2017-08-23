"use strict";

var path = "images/gallery/";

var gallery = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg"];

var currentImg = 0;

var imageNum = sessionStorage.getItem('selectedImage');

function prev() {
	currentImg--;
	if (currentImg < 0) {
		currentImg = 8;
	}
	sessionStorage.setItem('selectedImage', currentImg + 1);
	$("#image").attr("src", path + gallery[currentImg]).removeClass().addClass("image" + currentImg);
}

function next() {
	currentImg++;
	if (currentImg > 8) {
		currentImg = 0;
	}
	sessionStorage.setItem('selectedImage', currentImg + 1);
	$("#image").attr("src", path + gallery[currentImg]).removeClass().addClass("image" + currentImg);
}

function dataCheck() {
	switch (imageNum) {
		case "1":
			currentImg = 0;
			$("#image").attr("src", path + gallery[currentImg]).removeClass().addClass("image0");
			break;
		case "2":
			currentImg = 1;
			$("#image").attr("src", path + gallery[currentImg]).removeClass().addClass("image1");
			break;
		case "3":
			currentImg = 2;
			$("#image").attr("src", path + gallery[currentImg]).removeClass().addClass("image2");
			break;
		case "4":
			currentImg = 3;
			$("#image").attr("src", path + gallery[currentImg]).removeClass().addClass("image3");
			break;
		case "5":
			currentImg = 4;
			$("#image").attr("src", path + gallery[currentImg]).removeClass().addClass("image4");
			break;
		case "6":
			currentImg = 5;
			$("#image").attr("src", path + gallery[currentImg]).removeClass().addClass("image5");
			break;
		case "7":
			currentImg = 6;
			$("#image").attr("src", path + gallery[currentImg]).removeClass().addClass("image6");
			break;
		case "8":
			currentImg = 7;
			$("#image").attr("src", path + gallery[currentImg]).removeClass().addClass("image7");
			break;
		case "9":
			currentImg = 8;
			$("#image").attr("src", path + gallery[currentImg]).removeClass().addClass("image8");
			break;
	}
}

$(document).ready(function () {
	dataCheck();
	$(document).on("keyDown", function (e) {
		var x = e.which || e.keyCode;
		switch (x) {
			case 37:
				prev();
				break;
			case 39:
				next();
				break;
			default:
				break;
		}
	});
});
//# sourceMappingURL=gallery.js.map
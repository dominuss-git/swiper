import $ from "jquery";
import "../css/style.css";

const photos = ["../images/IH4AgXeHhOk.jpg", "../images/Без названия.png"];
let current_index = 1;

$(window).ready(() => {
  $(".my-gallery__prev").click();
});

const addPic = (link) => {
  return `
  <img class="my-gallery__my-photo" src="${link}">
  `;
};

$(".my-gallery__prev").click(() => {
  if (current_index === 0) {
    return;
  } else {
    current_index -= 1;
    $(".my-gallery__my-photo").remove();
    $(".my-gallery").append(addPic(photos[current_index]));
  }
  if (current_index === 0) {
    $(".my-gallery__prev").addClass("disabled");
    $(".my-gallery__next").removeClass("disabled");
  } else {
    $(".my-gallery__prev").removeClass("disabled");
  }
});

$(".my-gallery__next").click(() => {
  if (current_index === photos.length -1) {
    return;
  } else {
    current_index += 1;
    $(".my-gallery__my-photo").remove();
    $(".my-gallery").append(addPic(photos[current_index]));
  }
  if (current_index === photos.length -1) {
    $(".my-gallery__next").addClass("disabled");
    $(".my-gallery__prev").removeClass("disabled");
  } else {
    $(".my-gallery__next").removeClass("disabled");
  }
});

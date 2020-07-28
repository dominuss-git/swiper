import $ from "jquery";
import "../css/style.css";
// import "../css/lightbox.min.css";

const photos = ["../images/IH4AgXeHhOk.jpg", "../images/Без названия.png"];
let current_index;
let el_array = [];

$(window).ready(() => {
  // $(".my-gallery__prev").click();
  init();
  set_data();
  setOnClickListener();
});

const init = () => {
  for (let i in photos) {
    $(".my-gallery-update").append(init_up_gallery(photos[i]));
    // console.log(photos[i]);
  }
};

const setOnClickListener = () => {
  for (let i = 0; i < el_array.length; i+=1 ) {
    el_array[i].$el.click(() => {
      console.log(el_array[i].photo);
      $(".modal").addClass("modal-active");
      $(".modal__body").addClass("modal-active__body");
      $(".modal__img").append(`<img class="my-gallery-update__photo" src="${el_array[i].photo}">`);
      current_index = i;
      // console.log(el_array.length - 1);
      if(current_index === 0) {
        $(".modal__prev").addClass("disabled");
      }
      if(current_index === el_array.length - 1) {
        $(".modal__next").addClass("disabled");
      }
    });
  }
};

const set_data = () => {
  $(".my-gallery-update__my-photo").each((i, el) => {
    // $(this).css("width", "100px");
    console.log($(el));
    el_array.push({
      $el : $(el),
      photo : photos[i]
    })
  });
};

$(".modal__close").click(() => {
  $(".modal").removeClass("modal-active");
  $(".modal__body").removeClass("modal-active__body");
  $(".my-gallery-update__photo").remove();
  $(".modal__prev").removeClass("disabled");
  $(".modal__next").removeClass("disabled");
})

$(".modal__prev").click(() => {
  current_index -= 1;
  console.log(current_index);
  if(current_index === 0) {
    $(".modal__prev").addClass("disabled");
  }
  if(current_index !== el_array.length - 1) {
    $(".modal__next").removeClass("disabled");
  }
  $(".my-gallery-update__photo").remove();
  $(".modal__img").append(`<img class="my-gallery-update__photo" src="${el_array[current_index].photo}">`);
}) 

$(".modal__next").click(() => {
  current_index += 1;
  console.log(current_index);
  if(current_index === el_array.length - 1) {
    $(".modal__next").addClass("disabled");
  }
  if(current_index !== 0) {
    $(".modal__prev").removeClass("disabled");
  }
  $(".my-gallery-update__photo").remove();
  $(".modal__img").append(`<img class="my-gallery-update__photo" src="${el_array[current_index].photo}">`);
}) 

const init_up_gallery = (link) => {
  return `<img class="my-gallery-update__my-photo" src="${link}">`;
};

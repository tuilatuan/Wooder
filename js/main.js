let header = document.querySelector("header .container-fluid");

let backTotop = document.querySelector(".totop");
let getheightWindown = window.innerHeight;

function showbackTotop() {
  let footer = document.querySelector("footer");
  let scrollY = window.pageYOffset;

  if (scrollY > getheightWindown) {
    backTotop.classList.add("active");
  } else {
    backTotop.classList.remove("active");
  }
  if (scrollY > 4600) {
    backTotop.classList.remove("active");
  }
}
function backtoTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
backTotop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
function setbgHeader() {
  let scrollY = window.pageYOffset;
  if (scrollY > header.clientHeight) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
document.addEventListener("scroll", function () {
  showbackTotop();
  setbgHeader();
});

function nav__mobile() {
  let hiden = document.querySelector(".header__langue-hiden");
  let nav__mobile = document.querySelector("#nav__mobile");

  hiden.addEventListener("click", function () {
    hiden.classList.toggle("active");
    nav__mobile.classList.toggle("active");
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 766) {
      hiden.classList.remove("active");
      nav__mobile.classList.remove("active");
    }
  });
}
nav__mobile();
function selectLangue() {
  let selectname = document.querySelector(".header__langue-select");
  let langCurrent = document.querySelector(".header__langue-select span");
  let option = document.querySelector(".header__langue-option");
  let optionitem = document.querySelectorAll(".header__langue-option a");
  ///////
  function addClass() {
    selectname.classList.toggle("active");
    option.classList.toggle("active");
  }
  selectname.addEventListener("click", function (e) {
    e.stopPropagation();
    addClass();
  });
  optionitem.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      let langtext = item.textContent;
      let langCurrentspan = langCurrent.textContent;
      langCurrent.innerHTML = langtext;
      item.innerHTML = langCurrentspan;
    });
  });
  document.addEventListener("click", function () {
    selectname.classList.remove("active");
    option.classList.remove("active");
  });
}
selectLangue();

function setWidthtopbar() {
  let scrollY = window.pageYOffset;
  let bodyheight = document.querySelector("body").clientHeight;
  let topBar = document.querySelector(".topbar");
  let widthtopbar = (scrollY / (bodyheight - getheightWindown)) * 100;
  topBar.style.width = Math.round(widthtopbar) + "%";
}
// setTimeout(function () {
//   setWidthtopbar();
// }, 200);
document.addEventListener("scroll", function () {
  setWidthtopbar();
});

// function setbtnslider() {
//   let slideritem = document.querySelectorAll(".slider__item");
//   let number = document.querySelector(".slider__active-left span");
//   let btnli = document.querySelectorAll(".dotted li");
//   let btnprev = document.querySelector(".prev");
//   let btnnext = document.querySelector(".next");
//   let position = 0;
//   slideritem.forEach(function (item, index) {
//     if (item.classList.contains("active")) {
//       position = index;
//     }
//   });
//   btnli.forEach(function (item, index) {
//     item.addEventListener("click", function () {
//       goto(index);
//     });
//   });
//   btnnext.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (position < slideritem.length - 1) {
//       goto(position + 1);
//     } else {
//       goto(0);
//     }
//   });
//   btnprev.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (position <= 0) {
//       goto(slideritem.length - 1);
//     } else {
//       goto(position - 1);
//     }
//   });
//   function goto(index) {
//     btnli[position].classList.remove("active");
//     slideritem[position].classList.remove("active");
//     btnli[index].classList.add("active");
//     slideritem[index].classList.add("active");
//     position = index;
//     number.innerHTML = (position + 1).toString().padStart(2, "0");
//   }
// }
// setbtnslider();

function srolltosection() {
  let navitem = document.querySelectorAll(".nav a");
  let heightheader = header.clientHeight;
  let sections = [];
  function removenavactive() {
    navitem.forEach(function (aitem) {
      aitem.classList.remove("active");
    });
  }
  navitem.forEach(function (item) {
    let href = item.getAttribute("href");
    let classname = href.replace("#", "");
    let section = document.querySelector("." + classname);
    sections.push(section);

    item.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: section.offsetTop - (heightheader - 14),
        behavior: "smooth",
      });
      removenavactive(navitem);
      item.classList.add("active");
    });
  });

  window.addEventListener("scroll", function (e) {
    let scrollY = window.pageYOffset;
    sections.forEach(function (section, index) {
      if (
        scrollY > section.offsetTop - heightheader &&
        scrollY < section.offsetTop + section.clientHeight
      ) {
        removenavactive();
        navitem[index].classList.add("active");
      } else {
        navitem[index].classList.remove("active");
      }
    });
  });
}
srolltosection();
function scrolltomobile() {
  let navitem = document.querySelectorAll("#nav__mobile ul a");
  let heightheader = header.clientHeight;
  let hiden = document.querySelector(".header__langue-hiden");
  let nav__mobile = document.querySelector("#nav__mobile");

  let sections = [];
  function removenavactive() {
    navitem.forEach(function (aitem) {
      aitem.classList.remove("active");
    });
  }
  navitem.forEach(function (item) {
    let href = item.getAttribute("href");
    let classname = href.replace("#", "");
    let section = document.querySelector("." + classname);
    sections.push(section);

    item.addEventListener("click", function (e) {
      e.preventDefault();
      hiden.classList.toggle("active");
      nav__mobile.classList.toggle("active");
      window.scrollTo({
        top: section.offsetTop - (heightheader - 14),
        behavior: "smooth",
      });
      removenavactive(navitem);
      item.classList.add("active");
    });
  });

  window.addEventListener("scroll", function (e) {
    let scrollY = window.pageYOffset;
    sections.forEach(function (section, index) {
      if (
        scrollY > section.offsetTop - heightheader &&
        scrollY < section.offsetTop + section.clientHeight
      ) {
        removenavactive();
        navitem[index].classList.add("active");
      } else {
        navitem[index].classList.remove("active");
      }
    });
  });
}
scrolltomobile();
function popupVideo() {
  let btnvideo = document.querySelectorAll(".btnplay");
  let popupvideo = document.querySelector(".popup-video");
  let iframe = document.querySelector(".popup__iframe");
  let close = document.querySelector(".close");
  btnvideo.forEach(function (item) {
    item.addEventListener("click", function (e) {
      let idvideo = item.getAttribute("data-video-id");
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/" + idvideo + "?autoplay=1"
      );
      popupvideo.style.display = "flex";
    });
  });
  close.addEventListener("click", function () {
    iframe.setAttribute("src", "");
    popupvideo.style.display = "none";
  });
  popupvideo.addEventListener("click", function () {
    iframe.setAttribute("src", "");
    popupvideo.style.display = "none";
  });
}
popupVideo();

function newsChange() {
  let btnnews = document.querySelectorAll(".btnhiden a");
  let contentnew = document.querySelectorAll(".news__box");
  function removeactive(item) {
    item.forEach(function (aitem) {
      aitem.classList.remove("active");
    });
  }
  btnnews.forEach(function (item, index) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      removeactive(btnnews);
      btnnews[index].classList.add("active");
      console.log(index);
      removeactive(contentnew);
      contentnew[index].classList.add("active");
    });
  });
}
newsChange();

function changeSlider() {
  var elem = document.querySelector(".slider__item-warp");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    imagesLoaded: true,
    prevNextButtons: false,
    on: {
      ready: function () {
        let dotted = $(".flickity-page-dots");
        paging = $(".slider__active-left .dotted");
        dotted.appendTo(paging);
      },
      change: function (index) {
        let number = document.querySelector(".slider__active-left span");
        let indexPage = index + 1;
        number.innerHTML = indexPage.toString().padStart(2, "0");
      },
    },
  });

  var flkty = new Flickity(".slider__item-warp");

  var previousButton = document.querySelector(".prev");
  previousButton.addEventListener("click", function (e) {
    e.preventDefault();

    flkty.previous();
  });
  var nextButton = document.querySelector(".next");
  nextButton.addEventListener("click", function (e) {
    e.preventDefault();
    flkty.next();
  });
}
changeSlider();

function scrollbottom() {
  var elem = document.querySelector(".transimg__group-warp");
  var flkt = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    freeRoll: true,
    prevNextButtons: false,
  });

  var progressBar = document.querySelector(".progress-bar");
  flkt.on("scroll", function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + "%";
  });
}
scrollbottom();

AOS.init();

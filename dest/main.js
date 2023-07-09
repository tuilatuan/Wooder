let btnTotop = document.querySelector(".btnTotop");
let menus = document.querySelectorAll(".header__menu a");
let header = document.querySelector(".header .container-fluid");
let heightHeader = document.querySelector(
  ".header .container-fluid"
).offsetHeight;
let getheightWindown = window.innerHeight;
function setWidthtopbar() {
  let scrollY = window.pageYOffset;
  let bodyheight = document.querySelector("body").clientHeight;
  let topBar = document.querySelector(".topbar");
  let widthtopbar = (scrollY / (bodyheight - getheightWindown)) * 100;
  topBar.style.width = Math.round(widthtopbar) + "%";
}
function selectLang() {
  let langCurrent = document.querySelector(".header__lang-current .btntext"),
    langSelected = document.querySelector(".header__lang-current"),
    listOption = document.querySelector(".header__lang-option"),
    optionItem = document.querySelectorAll(".header__lang-option .--item");
  function addClass() {
    langSelected.classList.toggle("active");
    listOption.classList.toggle("active");
  }
  langSelected.addEventListener("click", function (e) {
    e.stopPropagation();
    addClass();
  });
  optionItem.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      let langtext = item.textContent;
      let langCurrentspan = langCurrent.textContent;
      langCurrent.innerHTML = langtext;
      item.innerHTML = langCurrentspan;
    });
  });
  document.addEventListener("click", function () {
    langSelected.classList.remove("active");
    listOption.classList.remove("active");
  });
}
selectLang();
function menumobileHandle() {
  const btnmb = document.querySelector(".header__lang-btnmenu"),
    menumb = document.querySelector(".menu-mb");
  //   console.log(btnmb);
  btnmb.addEventListener("click", function () {
    this.classList.toggle("active");
    menumb.classList.toggle("active");
  });
  function hidenav() {
    btnmb.classList.remove("active");
    menumb.classList.remove("active");
  }
  window.addEventListener("resize", function () {
    let sz = window.innerWidth;
    if (sz > 767) {
      hidenav();
    }
  });
}
menumobileHandle();
function handleTabnews() {
  const tabs = document.querySelectorAll(".btnnews"),
    news__list = document.querySelectorAll(".news__warp-boxs");
  //   console.log(news__list);
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });
      this.classList.add("active");
      news__list.forEach(function (item) {
        item.classList.remove("active");
      });
      let id = this.dataset.tab;
      document.querySelector(".news__list-" + id).classList.add("active");
    });
  });
}
handleTabnews();
function popupVideo() {
  let videos = document.querySelectorAll(
      ".video__vidgrs .video__vidgrs-item .box-img"
    ),
    btnclose = document.querySelector(".popupvideo_inner-iframe .close"),
    iframevideo = document.querySelector(".popupvideo_inner-iframe iframe"),
    modalVideo = document.querySelector(".popupvideo"),
    btnBanner = document.querySelector(".banner__btn");
  videos.forEach(function (video) {
    video.addEventListener("click", function () {
      modalVideo.classList.add("active");
      let code = video.getAttribute("data-video-src");
      iframevideo.setAttribute(
        "src",
        `https://www.youtube.com/embed/${code}?autoplay=1`
      );
    });
    btnBanner.addEventListener("click", function () {
      modalVideo.classList.add("active");
      let code = btnBanner.getAttribute("data-video-src");
      iframevideo.setAttribute(
        "src",
        `https://www.youtube.com/embed/${code}?autoplay=1`
      );
    });
    function closeModal() {
      modalVideo.classList.remove("active");
      iframevideo.setAttribute("src", ``);
    }
    btnclose.addEventListener("click", function () {
      closeModal();
    });
    modalVideo.addEventListener("click", function () {
      closeModal();
    });
  });
}
popupVideo();

function removeActivemenu() {
  menus.forEach(function (menu, index) {
    menu.classList.remove("active");
  });
}

function scrollTosection() {
  let sections = [];

  menus.forEach(function (item, index) {
    let href = item.getAttribute("href");
    let className = href.replace("#", "");
    let section = document.querySelector("." + className);
    sections.push(section);
    item.addEventListener("click", function (e) {
      let positionSection = section.offsetTop;
      window.scrollTo({
        top: positionSection - heightHeader + 1,
        behavior: "smooth",
      });
      removeActivemenu();
      item.classList.add("active");
    });
  });
  window.addEventListener("scroll", function () {
    let positionScroll = window.pageYOffset;
    sections.forEach(function (section, index) {
      if (
        positionScroll > section.offsetTop - heightHeader &&
        positionScroll < section.offsetTop + section.offsetHeight
      ) {
        removeActivemenu();
        menus[index].classList.add("active");
      } else {
        menus[index].classList.remove("active");
      }
    });
  });
}
scrollTosection();
function showSldier() {
  let slider = document.querySelector(".slider");
  let sliders = document.querySelector(".slider .slider__item-warp");
  if (document.contains(slider) == true) {
    var flkty = new Flickity(sliders, {
      cellAlign: "left",
      // pageDots: true,
      wrapAround: true,
      contain: true,
      imagesLoaded: true,
      prevNextButtons: false,
      autoPlay: 3000,
      on: {
        ready: function () {
          let dotted = $(".flickity-page-dots");
          paging = $(".dotted");
          dotted.appendTo(paging);
        },
        change: function (index) {
          let number = document.querySelector(
            ".slider__bottom-text .slider-current"
          );
          let indexPage = index + 1;
          number.innerHTML = indexPage.toString().padStart(2, "0");
          // anigsap();
        },
      },
    });
    var previousButton = document.querySelector(".btnprev ");
    previousButton.addEventListener("click", function (e) {
      e.preventDefault();
      flkty.previous();
      // anigsap();
    });
    var nextButton = document.querySelector(".btnnext");
    nextButton.addEventListener("click", function (e) {
      e.preventDefault();
      flkty.next();
      // anigsap();
    });
  }
}
showSldier();
function showSliderimg() {
  let caroucels = document.querySelector(".carousels");
  let elem = document.querySelector(".carousels__warp");
  if (document.contains(caroucels) == true) {
    var flkty = new Flickity(elem, {
      cellAlign: "left",
      // pageDots: true,
      wrapAround: true,
      contain: true,
      imagesLoaded: true,
      prevNextButtons: false,
      freeScroll: true,
    });
    var progressBar = document.querySelector(".progess-bar");
    flkty.on("scroll", function (progress) {
      progress = Math.max(0, Math.min(1, progress));
      progressBar.style.width = progress * 100 + "%";
    });
  }
}
showSliderimg();
function showbackTotop() {
  let scrollY = window.pageYOffset;
  console.log(scrollY);

  if (scrollY > getheightWindown) {
    btnTotop.classList.add("active");
  } else {
    btnTotop.classList.remove("active");
  }
  if (scrollY > 5550) {
    btnTotop.classList.remove("active");
  }
}
showbackTotop();
function backtoTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
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
  setWidthtopbar();
  setbgHeader();
});
Fancybox.bind('[data-fancybox="galery"]', {
  //
});

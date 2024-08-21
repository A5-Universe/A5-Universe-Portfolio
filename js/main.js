let toggleBtn = document.querySelector("#toggleBtn"),
  tabs = document.querySelector("#tabs"),
  tabsLis = document.querySelectorAll("#tabs li a"),
  filterLi = document.querySelectorAll(".filter li"),
  profileBox = document.querySelectorAll(".project-container .box"),
  sections = document.querySelectorAll(".section"),
  home = document.querySelector('[data-sec="home"]'),
  settings = document.querySelector("#settings"),
  settingsBtn = document.querySelector("#settings .icon"),
  colorBtn = document.querySelectorAll("#settings ul li"),
  reset = document.querySelector("#reset"),
  preloader = document.querySelector("#preloader");

toggleBtn.addEventListener("click", () => {
  tabs.classList.toggle("active");
});

/*Testimonial Slider With Bullet Points */
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    //When window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    //When window width is >= 992px
    992: {
      slidesPerView: 3,
    },
  },
  //autoplay the slider with a delay of 2.5s
  autoplay: {
    delay: 2500,
    disableInteraction: false,
  },
  //show the pagination bullet and make it clickable
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //loop the slider
  lazyLoading: true,
  loop: true,
});

filterLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    filterLi.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    profileBox.forEach((box) => {
      box.classList.remove("active");
    });
    if (e.currentTarget.dataset.profile === "All") {
      profileBox.forEach((box) => {
        box.classList.add("active");
      });
    } else {
      document
        .querySelectorAll("." + e.currentTarget.dataset.profile)
        .forEach((el) => {
          el.classList.add("active");
        });
    }
  });
});

tabsLis.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabsLis.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    document
      .querySelector("#" + e.currentTarget.dataset.sec)
      .classList.add("active");
  });
});

home.addEventListener("click", (e) => {
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  document
    .querySelector("#" + e.currentTarget.dataset.sec)
    .classList.add("active");
});

settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("show");
});

colorBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //set Color on root
    document.documentElement.style.setProperty(
      "--primaryColor",
      e.target.dataset.color
    );
    document.documentElement.style.setProperty(
      "--hoverColor",
      e.target.dataset.color
    );
  });
});

reset.addEventListener("click", () => {
  document.documentElement.style.setProperty("--primaryColor", "#0072b1");
  document.documentElement.style.setProperty("--hoverColor", "#00a6ff");
});

window.addEventListener("load", () => {
  const fadeOutEffect = setInterval(() => {
    preloader.classList.add("hide");
    clearInterval(fadeOutEffect);
  }, 1000);
});

//download resume
function downloadResume() {
  var fileUrl =
    "https://drive.google.com/file/d/1YX43MCAi6DbYmaaYrXHqDPlzEyiCuGwH/view?usp=sharing"; // Replace DRIVE_FILE_ID with the actual file ID from Google Drive
  var a = document.createElement("a");
  a.href = fileUrl;
  a.download = "resume.pdf"; // Set the desired file name here

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

//hd5 wallpaper link
function downloadHd5() {
  var apkFilePath = "androidApp/HD5 Wallpaper.apk"; // Replace with the actual path to your APK file
  var apkFileName = "HD5 Wallpaper"; // Replace with the desired file name

  var downloadLink = document.createElement("a");
  downloadLink.href = apkFilePath;
  downloadLink.download = apkFileName;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

//hd5 wallpaper link
function downloadLoop() {
  var apkFilePath = "androidApp/Loop-Chat App.apk"; // Replace with the actual path to your APK file
  var apkFileName = "Loop - Chat App"; // Replace with the desired file name

  var downloadLink = document.createElement("a");
  downloadLink.href = apkFilePath;
  downloadLink.download = apkFileName;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

//Courses link
function javaCourse() {
  window.open('https://www.javatpoint.com/java-tutorial', '_blank');
}
function kotlinCourse() {
  window.open('https://www.javatpoint.com/kotlin-tutorial', '_blank');
}
function androidCourse() {
  window.open('https://www.javatpoint.com/android-tutorial', '_blank');
}
function htmlCourse() {
  window.open('https://www.javatpoint.com/html-tutorial', '_blank');
}
function cssCourse() {
  window.open('https://www.javatpoint.com/css-tutorial', '_blank');
}
function javaScriptCourse() {
  window.open('https://www.javatpoint.com/javascript-tutorial', '_blank');
}
function nodejsCourse() {
  window.open('https://www.javatpoint.com/nodejs-tutorial', '_blank');
}
function mongodbCourse() {
  window.open('https://www.javatpoint.com/mongodb-tutorial', '_blank');
}
function reactjsCourse() {
  window.open('https://www.javatpoint.com/reactjs-tutorial', '_blank');
}
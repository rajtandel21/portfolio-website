window.addEventListener("load", () => {
  //containers are the div with all info
  const allContainers = document.querySelectorAll(".sectionHeading");
  //info is the infomation inside the containers
  const allInfo = document.querySelectorAll(".hidden");
  //Education Info
  const allEdu = document.querySelectorAll(".eduInfo");

  //Hover is all the option in the education section
  const allHover = document.querySelectorAll(".hover");

  //All education logos
  //translate to top of info and shrink by half
  const allEduLogos = document.querySelectorAll(".eduLogos");

  const githubLink = document.querySelectorAll(".github");
  const linkedinLink = document.querySelectorAll(".linkedin");

  const projectGifs = document.querySelectorAll(".projectGif");

  const bigGifSection = document.querySelector(".bigProjectGif");
  const bigGifImg = document.querySelector(".bigGifImage");
  const closeBtn = document.querySelector(".close");

  allContainers.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      allInfo.forEach((info, index) => {
        info.classList.add("active");
        allContainers[index].classList.add("smallText");
      });
      allInfo[index].classList.remove("active");
      pad.classList.remove("smallText");
    });
  });

  allHover.forEach((hover, index) => {
    hover.addEventListener("mouseover", function() {
      hover.style.flex = "2";
      allEduLogos[index].classList.add("shrink");
      allEdu[index].classList.remove("effect");
    });
    hover.addEventListener("mouseout", function() {
      hover.style.flex = "1";
      allEduLogos[index].classList.remove("shrink");
      allEdu[index].classList.add("effect");
    });
  });

  githubLink.forEach(link => {
    link.addEventListener("click", () => {
      window.open("https://github.com/rajtandel21?tab=repositories");
    });
  });

  linkedinLink.forEach(link => {
    link.addEventListener("click", () => {
      window.open("https://www.linkedin.com/in/raj-tandel-100b76146");
    });
  });

  if (document.images) {
    //project images
    XnOImg = new Image();
    travelImg = new Image();
    unityGameImg = new Image();
    advertImg = new Image();

    //project gifs
    XnOGif = new Image();
    travelGif = new Image();
    unityGameGif = new Image();
    advertGif = new Image();

    XnOImg.src = "./proImg/XnOImg.png";
    travelImg.src = "./proImg/travelImg.png";
    unityGameImg.src = "./proImg/unityGameImg.png";
    advertImg.src = "./proImg/advertImg.png";

    XnOGif.src = "./proImg/XnOgif.gif";
    travelGif.src = "./proImg/travelGif.gif";
    unityGameGif.src = "./proImg/unityGameGif.gif";
    advertGif.src = "./proImg/advertGif.gif";
  }

  closeBtn.addEventListener("click", function() {
    bigGifSection.style.display = "none";
    bigGifImg.src = "";
  });

  //for the mouseover to play gif substitute between image and gif
  projectGifs.forEach((gif, index) => {
    gif.addEventListener("mouseover", function() {
      switch (index) {
        case 0:
          gif.src = XnOGif.src;
          break;
        case 1:
          gif.src = travelGif.src;
          break;
        case 2:
          gif.src = unityGameGif.src;
          break;
        case 3:
          gif.src = advertGif.src;
          break;
      }
    });
    gif.addEventListener("click", function() {
      bigGifSection.style.display = "block";
      switch (index) {
        case 0:
          bigGifImg.src = XnOGif.src;
          break;
        case 1:
          bigGifImg.src = travelGif.src;
          break;
        case 2:
          bigGifImg.src = unityGameGif.src;
          break;
        case 3:
          bigGifImg.src = advertGif.src;
          break;
      }
    });
  });

  projectGifs.forEach((gif, index) => {
    gif.addEventListener("mouseout", function() {
      switch (index) {
        case 0:
          gif.src = XnOImg.src;
          break;
        case 1:
          gif.src = travelImg.src;
          break;
        case 2:
          gif.src = unityGameImg.src;
          break;
        case 3:
          gif.src = advertImg.src;
          break;
      }
    });
  });
});

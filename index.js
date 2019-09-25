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

  const XnOGif = "./proImg/XnOgif.gif";
  const travelGif = "./proImg/travelGif.gif";
  const unityGameGif = "./proImg/unityGameGif.gif";
  const advertGif = "./proImg/advertGif.gif";

  //for the mouseover to play gif substitute between image and gif
  projectGifs.forEach((gif, index) => {
    gif.addEventListener("mouseover", function() {
      switch (index) {
        case 0:
          gif.src = XnOGif;
          break;
        case 1:
          gif.src = travelGif;
          break;
        case 2:
          gif.src = unityGameGif;
          break;
        case 3:
          gif.src = advertGif;
          break;
      }
    });
    gif.addEventListener("click", function() {
      bigGifSection.style.display = "block";
      switch (index) {
        case 0:
          bigGifImg.src = XnOGif;
          break;
        case 1:
          bigGifImg.src = travelGif;
          break;
        case 2:
          bigGifImg.src = unityGameGif;
          break;
        case 3:
          bigGifImg.src = advertGif;
          break;
      }
    });
  });

  projectGifs.forEach((gif, index) => {
    gif.addEventListener("mouseout", function() {
      switch (index) {
        case 0:
          gif.src = "./proImg/XnOImg.png";
          break;
        case 1:
          gif.src = "./proImg/travelImg.png";
          break;
        case 2:
          gif.src = "./proImg/unityGameImg.png";
          break;
        case 3:
          gif.src = "./proImg/advertImg.png";
          break;
      }
    });
  });

  closeBtn.addEventListener("click", function() {
    bigGifSection.style.display = "none";
  });
});

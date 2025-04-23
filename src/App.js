import "./App.css";
import { useEffect } from "react";
import { Header } from "./component/header";
import { Visual } from "./component/visual";
import { Banner } from "./component/banner";
import { News } from "./component/news";
import { Game } from "./component/game";
import { Product } from "./component/product";
import { Footer } from "./component/footer";

function App() {
  useEffect(() => {
    //슬라이더
    let slides = document.querySelector(".slides"),
      slide = document.querySelectorAll(".slides li"),
      currentIdx = 0,
      slideCount = slide.length,
      slideWidth = window.innerWidth,
      prevBtn = document.querySelector(".prev"),
      nextBtn = document.querySelector(".next");
    function makeClone() {
      for (let i = 0; i < slideCount; i++) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.appendChild(cloneSlide);
      }
      for (let i = slideCount - 1; i >= 0; i--) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add("clone");
        slides.prepend(cloneSlide);
      }
      updateWidth();
      setinit();
      setTimeout(function () {
        slides.classList.add("animated");
      }, 100);
    }
    function updateWidth() {
      let currentSlides = document.querySelectorAll(".slides li");
      let newSlideCount = currentSlides.length;
      let newWidth = slideWidth * newSlideCount + "px";
      slides.style.width = newWidth;
    }
    function setinit() {
      let TranslateValue = -slideWidth * slideCount;
      slides.style.transform = "translateX(" + TranslateValue + "px)";
    }
    nextBtn.addEventListener("click", function () {
      moveSlide(currentIdx + 1);
      makeClone();
    });
    prevBtn.addEventListener("click", function () {
      moveSlide(currentIdx - 1);
      makeClone();
    });
    function moveSlide(num) {
      slides.style.left = -num * slideWidth + "px";
      currentIdx = num;
      console.log(currentIdx, slideCount);
      if (currentIdx === slideCount || currentIdx === -slideCount) {
        setTimeout(function () {
          slides.classList.remove("animated");
          slides.style.left = "0px";
          currentIdx = 0;
        }, 500);
        setTimeout(function () {
          slides.classList.add("animated");
        }, 600);
      }
    }
    function sliderEffect() {
      moveSlide(currentIdx + 1);
    }
    setInterval(sliderEffect, 8000);
  }, []);

  return (
    <body>
      <Header />
      <main>
        <Visual />
        <Banner />
        <News />
        <Game />
        <Product />
      </main>
      <Footer />
    </body>
  );
}
export default App;

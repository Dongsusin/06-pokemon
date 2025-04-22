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
    let slides = document.querySelector(".slides"), //슬라이더 전체
      slide = document.querySelectorAll(".slides li"), //슬라이더 1페이지
      currentIdx = 0, //현재 페이지
      slideCount = slide.length, //슬라이더 갯수
      slideWidth = window.innerWidth, //슬라이더 크기
      prevBtn = document.querySelector(".prev"), //이전 페이지 버튼
      nextBtn = document.querySelector(".next"); //다음 페이지 버튼
    //슬라이더 복제본 생성
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
    //슬라이더 길이 계산
    function updateWidth() {
      let currentSlides = document.querySelectorAll(".slides li");
      let newSlideCount = currentSlides.length;

      let newWidth = slideWidth * newSlideCount + "px";
      slides.style.width = newWidth;
    }
    //슬라이더 위치 초기화
    function setinit() {
      let TranslateValue = -slideWidth * slideCount;
      slides.style.transform = "translateX(" + TranslateValue + "px)";
    }
    //다음 페이지 버튼 클릭
    nextBtn.addEventListener("click", function () {
      moveSlide(currentIdx + 1);
    });
    //이전 페이지 버튼 클릭
    prevBtn.addEventListener("click", function () {
      moveSlide(currentIdx - 1);
    });
    //페이지 이동
    function moveSlide(num) {
      slides.style.left = -num * slideWidth + "px";
      currentIdx = num;
      console.log(currentIdx, slideCount);
      makeClone();
    }
    //페이지 자동이동
    setInterval(sliderEffect, 8000);
    function sliderEffect() {
      moveSlide(currentIdx + 1);
    }
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

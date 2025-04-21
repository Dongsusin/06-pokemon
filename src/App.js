import "./App.css";
import logo from "./image/header-logo.png";
import visual1 from "./image/main-visual1.png";
import visual2 from "./image/main-visual2.png";
import visual3 from "./image/main-visual3.png";
import visual4 from "./image/main-visual4.png";
import visual5 from "./image/main-visual5.png";
import visualmo1 from "./image/main-visual-mobile1.png";
import visualmo2 from "./image/main-visual-mobile2.png";
import visualmo3 from "./image/main-visual-mobile3.png";
import visualmo4 from "./image/main-visual-mobile4.png";
import visualmo5 from "./image/main-visual-mobile5.png";
import banner1 from "./image/main-banner1.png";
import banner2 from "./image/main-banner2.png";
import banner3 from "./image/main-banner3.png";
import banner4 from "./image/main-banner4.png";
import news1 from "./image/main-news1.png";
import news2 from "./image/main-news2.jpg";
import news3 from "./image/main-news3.png";
import news4 from "./image/main-news4.png";
import news5 from "./image/main-news5.png";
import news6 from "./image/main-news6.png";
import news7 from "./image/main-news7.png";
import news8 from "./image/main-news8.png";
import news9 from "./image/main-news9.jpg";
import news10 from "./image/main-news10.png";
import news11 from "./image/main-news11.png";
import news12 from "./image/main-news12.png";
import gameleft from "./image/main-game-image.png";
import game1 from "./image/main-game1.png";
import game2 from "./image/main-game2.png";
import game3 from "./image/main-game3.png";
import game4 from "./image/main-game4.png";
import game5 from "./image/main-game5.png";
import game6 from "./image/main-game6.png";
import more from "./image/main-product-icon-more.png";
import porodeuct1 from "./image/main-product1.png";
import porodeuct2 from "./image/main-product2.png";
import porodeuct3 from "./image/main-product3.png";
import porodeuct4 from "./image/main-product4.jpg";
import porodeuct5 from "./image/main-product5.jpg";
import porodeuct6 from "./image/main-product6.jpg";
import footerlogo from "./image/footer-logo.png";
import { useEffect } from "react";

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
      makeClone();
    });
    //이전 페이지 버튼 클릭
    prevBtn.addEventListener("click", function () {
      moveSlide(currentIdx - 1);
      makeClone();
    });
    //페이지 이동
    function moveSlide(num) {
      slides.style.left = -num * slideWidth + "px";
      currentIdx = num;
      console.log(currentIdx, slideCount);
    }
    //페이지 자동이동
    setInterval(sliderEffect, 8000);
    function sliderEffect() {
      moveSlide(currentIdx + 1);
    }
  }, []);

  return (
    <body>
      <header>
        <h1>
          <a href="#visual">
            <img src={logo} alt="" />
          </a>
        </h1>
        <div className="menu">
          <nav>
            <ul className="gnb">
              <li>
                <a className="news" href="https://pokemonkorea.co.kr/news">
                  <i className="icon-news" />
                  소식
                </a>
              </li>
              <li>
                <a className="game" href="https://pokemonkorea.co.kr/game">
                  <i className="icon-game" />
                  게임
                </a>
              </li>
              <li>
                <a className="card" href="https://pokemoncard.co.kr/main">
                  <i className="icon-card" />
                  카드게임
                </a>
              </li>
              <li>
                <a className="anim" href="https://pokemonkorea.co.kr/animation">
                  <i className="icon-anim" />
                  애니메이션
                </a>
              </li>
              <li>
                <a className="ball" href="https://pokemonkorea.co.kr/goods">
                  <i className="icon-ball" />
                  상품
                </a>
              </li>
            </ul>
          </nav>
          <ul className="acc">
            <li>
              <a href="https://helpful-starburst-392168.netlify.app/">
                <i className="icon-ball-c" />
                포켓몬 도감
              </a>
            </li>
            <li>
              <a href="https://pokemonkorea.co.kr/member/login?next=/goods">
                <i className="icon-login" />
                로그인
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section id="visual">
          <div className="slide_wrapper">
            <ul className="slides">
              <li>
                <a href="https://pokemonkorea.co.kr/legends_z-a">
                  <img className="pc" src={visual1} alt="" />
                  <img className="mobile" src={visualmo1} alt="" />
                </a>
              </li>
              <li>
                <a href="https://pokemonkorea.co.kr/pokemon_champions">
                  <img className="pc" src={visual2} alt="" />
                  <img className="mobile" src={visualmo2} alt="" />
                </a>
              </li>
              <li>
                <a href="https://pokemoncard.co.kr/card/731">
                  <img className="pc" src={visual3} alt="" />
                  <img className="mobile" src={visualmo3} alt="" />
                </a>
              </li>
              <li>
                <a href="https://pokemoncard.co.kr/card/750">
                  <img className="pc" src={visual4} alt="" />
                  <img className="mobile" src={visualmo4} alt="" />
                </a>
              </li>
              <li>
                <a href="https://pokemoncard.co.kr/card/740">
                  <img className="pc" src={visual5} alt="" />
                  <img className="mobile" src={visualmo5} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <p className="button">
            <span className="prev" />
            <span className="next" />
          </p>
        </section>
        <section id="banner">
          <div className="container">
            <div className="banner-container">
              <ul>
                <li>
                  <a href="https://www.nintendo.com/kr/switch/sv/updateData.html">
                    <div className="image">
                      <img src={banner1} alt="" />
                    </div>
                    <div className="bx">
                      <div className="text">
                        <h3>업데이트 데이터(Ver.3.0.1) 배포 안내</h3>
                        <span>게임</span>
                      </div>
                      <div className="btm">
                        <div className="b-flex">
                          <i className="primary" />
                          <i className="pry" />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://pokemonkorea.co.kr/pokemonhome/menu300?number=3645&mode=view">
                    <div className="image">
                      <img src={banner2} alt="" />
                    </div>
                    <div className="bx">
                      <div className="text">
                        <h3>【중요】개인정보 처리방침 개정 사항 안내</h3>
                        <span>게임</span>
                      </div>
                      <div className="btm">
                        <div className="b-flex">
                          <i className="primary" />
                          <i className="pry" />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.pokemonsleep.net/ko/">
                    <div className="image">
                      <img src={banner3} alt="" />
                    </div>
                    <div className="bx">
                      <div className="text">
                        <h3>「Pokémon Sleep」 절찬 배포 중!</h3>
                        <span>게임</span>
                      </div>
                      <div className="btm">
                        <div className="b-flex">
                          <i className="primary" />
                          <i className="pry" />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.pokemonkorea.co.kr/2024_3rd_project">
                    <div className="image">
                      <img src={banner4} alt="" />
                    </div>
                    <div className="bx">
                      <div className="text">
                        <h3>
                          포켓몬스터 금은편: 은빛산 이야기 8월 10일 (토) 첫
                          방송!
                        </h3>
                        <span>게임</span>
                      </div>
                      <div className="btm">
                        <div className="b-flex">
                          <i className="primary" />
                          <i className="pry" />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="news">
          <div className="back2" />
          <div className="container">
            <h2>새로운 소식</h2>
            <ul className="list-card-line">
              <li className="list-card">
                <a href="https://pokemoncard.co.kr/card/750">
                  <div>
                    <div className="tump-wrp">
                      <img src={news1} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>포켓몬 카드 게임 아크릴 카드 스탠드 9종 발매!</h3>
                    <ul className="list-split">
                      <li>카드 게임</li>
                      <li>2025년 03월 21일</li>
                    </ul>
                    <i
                      className="round-go"
                      style={{
                        backgroundColor: "#0080ff",
                      }}
                    />
                    <i
                      className="btn-line"
                      style={{
                        backgroundColor: "#0080ff",
                      }}
                    />
                  </div>
                </a>
              </li>
              <li className="list-card">
                <a href="https://pokemonkorea.co.kr/koreanleague_2025/menu583">
                  <div>
                    <div className="tump-wrp">
                      <img src={news2} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>2025 코리안 리그 시즌4 개최!</h3>
                    <ul className="list-split">
                      <li>카드 게임</li>
                      <li>2025년 03월 20일</li>
                      <i
                        className="round-go"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                      <i
                        className="btn-line"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                    </ul>
                  </div>
                </a>
              </li>
              <li className="list-card">
                <a href="https://pokemonkorea.co.kr/cardshopmd">
                  <div>
                    <div className="tump-wrp">
                      <img src={news3} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>포켓몬 카드샵 시리즈 발매!</h3>
                    <ul className="list-split">
                      <li>카드 게임</li>
                      <li>2025년 03월 12일</li>
                      <i
                        className="round-go"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                      <i
                        className="btn-line"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                    </ul>
                  </div>
                </a>
              </li>
              <li className="list-card">
                <a href="https://www.pokemonkorea.co.kr/SV9_tournament">
                  <div>
                    <div className="tump-wrp">
                      <img src={news4} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>확장팩「배틀파트너즈」발매 기념 토너먼트 개최!</h3>
                    <ul className="list-split">
                      <li>카드 게임</li>
                      <li>2025년 03월 12일</li>
                      <i
                        className="round-go"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                      <i
                        className="btn-line"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                    </ul>
                  </div>
                </a>
              </li>
              <li className="list-card">
                <a href="https://pokemonkorea.co.kr/news/2/16724?cate=0&sword=">
                  <div>
                    <div className="tump-wrp">
                      <img src={news5} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>「배틀파트너즈」 프로모 카드 팩 증정 이벤트!</h3>
                    <ul className="list-split">
                      <li>카드 게임</li>
                      <li>2025년 03월 07일</li>
                      <i
                        className="round-go"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                      <i
                        className="btn-line"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                    </ul>
                  </div>
                </a>
              </li>
              <li className="list-card">
                <a href="https://pokemoncard.co.kr/card/740">
                  <div>
                    <div className="tump-wrp">
                      <img src={news6} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>
                      스칼렛&바이올렛 배틀 강화 BOX 「배틀파트너즈」 3월 대발매!
                    </h3>
                    <ul className="list-split">
                      <li>카드 게임</li>
                      <li>2025년 03월 07일</li>
                      <i
                        className="round-go"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                      <i
                        className="btn-line"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                    </ul>
                  </div>
                </a>
              </li>
              <li className="list-card">
                <a href="https://www.youtube.com/watch?v=F--XZqBjhFc">
                  <div>
                    <div className="tump-wrp">
                      <img src={news7} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>「Pokémon Presents」 23시부터 방송 시작!</h3>
                    <ul className="list-split">
                      <li>공지</li>
                      <li>2025년 02월 27일</li>
                      <i
                        className="round-go"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                      <i
                        className="btn-line"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                    </ul>
                  </div>
                </a>
              </li>
              <li className="list-card">
                <a href="https://pokemoncard.co.kr/card/734">
                  <div>
                    <div className="tump-wrp">
                      <img src={news8} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>미니리그 오리지널 틴 케이스 증정 이벤트!</h3>
                    <ul className="list-split">
                      <li>카드 게임</li>
                      <li>2025년 02월 26일</li>
                      <i
                        className="round-go"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                      <i
                        className="btn-line"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                    </ul>
                  </div>
                </a>
              </li>
              <li className="list-card">
                <a href="https://www.instagram.com/metamong._.project/">
                  <div>
                    <div className="tump-wrp">
                      <img src={news9} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>METAMONG PROJECT 공식 인스타그램 바로가기!</h3>
                    <ul className="list-split">
                      <li>이벤트</li>
                      <li>2025년 02월 25일</li>
                      <i
                        className="round-go"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                      <i
                        className="btn-line"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                    </ul>
                  </div>
                </a>
              </li>
              <li className="list-card">
                <a href="https://pokemonkorea.co.kr/news/2/16612?cate=0&sword=">
                  <div>
                    <div className="tump-wrp">
                      <img src={news10} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>레귤레이션 변경 안내</h3>
                    <ul className="list-split">
                      <li>카드 게임</li>
                      <li>2025년 02월 24일</li>
                      <i
                        className="round-go"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                      <i
                        className="btn-line"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                    </ul>
                  </div>
                </a>
              </li>
              <li className="list-card">
                <a href="https://pokemoncard.co.kr/card/731">
                  <div>
                    <div className="tump-wrp">
                      <img src={news11} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>스칼렛&바이올렛 확장팩 「배틀파트너즈」3월 대발매!</h3>
                    <ul className="list-split">
                      <li>카드 게임</li>
                      <li>2025년 02월 21일</li>
                      <i
                        className="round-go"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                      <i
                        className="btn-line"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                    </ul>
                  </div>
                </a>
              </li>
              <li className="list-card">
                <a href="https://pokemoncard.co.kr/card/729">
                  <div>
                    <div className="tump-wrp">
                      <img src={news12} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h3>컬렉션 세트 「테라스탈 페스타 ex」 2월 대발매!</h3>
                    <ul className="list-split">
                      <li>카드 게임</li>
                      <li>2025년 02월 14일</li>
                      <i
                        className="round-go"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                      <i
                        className="btn-line"
                        style={{
                          backgroundColor: "#0080ff",
                        }}
                      />
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
            <a className="puls" href="https://pokemonkorea.co.kr/news">
              <div className="puls-before" />
              <p>더보기</p>
            </a>
          </div>
        </section>
        <section id="game">
          <div className="container">
            <div className="row">
              <div className="left">
                <img src={gameleft} alt="" />
              </div>
              <div className="right">
                <h2>게임</h2>
                <div className="game-bar">
                  <ul>
                    <li>
                      <a href="https://pokemonkorea.co.kr/pokemon_tcg_pocket">
                        <div className="image">
                          <img src={game1} alt="" />
                        </div>
                        <div className="text">
                          <h3>「포켓몬 카드 게임 Pocket」 절찬 배포 중!</h3>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://pokemonkorea.co.kr/sv_dlc">
                        <div className="image">
                          <img src={game2} alt="" />
                        </div>
                        <div className="text">
                          <h3>
                            {`「포켓몬스터스칼렛・바이올렛 제로의 비보」<후편:남청의 원반> 배포 개시!`}
                          </h3>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://pokemonkorea.co.kr/detective_pikachu">
                        <div className="image">
                          <img src={game3} alt="" />
                        </div>
                        <div className="text">
                          <h3>「돌아온 명탐정 피카츄」 절찬 판매 중!</h3>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://pokemonkorea.co.kr/sv">
                        <div className="image">
                          <img src={game4} alt="" />
                        </div>
                        <div className="text">
                          <h3>「포켓몬스터스칼렛・바이올렛」 공식 사이트</h3>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pokemonsleep.net/ko/">
                        <div className="image">
                          <img src={game5} alt="" />
                        </div>
                        <div className="text">
                          <h3>「Pokémon Sleep」 절찬 배포 중!</h3>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pokemongoplusplus.com/ko/">
                        <div className="image">
                          <img src={game6} alt="" />
                        </div>
                        <div className="text">
                          <h3>「Pokémon GO Plus +」 발매 개시!</h3>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="product">
          <div className="container">
            <h2>상품</h2>
            <div className="row">
              <div className="content">
                <div className="list-top">
                  <h3>온라인 스토어</h3>
                  <a href="https://www.pokemonstore.co.kr/">
                    MORE
                    <img src={more} alt="" />
                  </a>
                </div>
                <div className="swiper-container">
                  <div className="swiper">
                    <ul>
                      <li>
                        <a
                          className="gutters"
                          href="https://pokemonstore.co.kr/pages/product/list.html?categoryNo=488333&orderBy=register"
                        >
                          <div className="image">
                            <img src={porodeuct1} alt="" />
                          </div>
                          <div className="text">
                            <h4>포켓몬 스토어 METAMONG Cherry Blossom</h4>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="gutters"
                          href="https://pokemonstore.co.kr/pages/product/list.html?depth=2&categoryNo=873091"
                        >
                          <div className="image">
                            <img src={porodeuct2} alt="" />
                          </div>
                          <div className="text">
                            <h4>포켓몬 스토어 Lucky for you</h4>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="gutters"
                          href="https://pokemonstore.co.kr/pages/product/list.html?depth=2&categoryNo=870578"
                        >
                          <div className="image">
                            <img src={porodeuct3} alt="" />
                          </div>
                          <div className="text">
                            <h4>포켓몬센터 전국도감 메탈참</h4>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="list-top">
                  <h3>라이센스 상품</h3>
                  <a href="https://pokemonkorea.co.kr/goods">
                    MORE
                    <img src={more} alt="" />
                  </a>
                </div>
                <div className="swiper-container">
                  <div className="swiper">
                    <ul>
                      <li>
                        <a
                          className="gutters"
                          href="https://e.kakao.com/t/gorapaduck-is-back?lang=ko&t_ch=co_mkt"
                        >
                          <div className="image">
                            <img src={porodeuct4} alt="" />
                          </div>
                          <div className="text">
                            <h4>「내가왔덕 고라파덕」카카오 이모티콘 출시!!</h4>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="gutters"
                          href="https://m.fredit.co.kr/product/detail?prdId=5365"
                        >
                          <div className="image">
                            <img src={porodeuct5} alt="" />
                          </div>
                          <div className="text">
                            <h4>얼려먹고 거꾸로 먹는 포켓몬 야쿠르트!!</h4>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="gutters"
                          href="https://brand.naver.com/damtuh"
                        >
                          <div className="image">
                            <img src={porodeuct6} alt="" />
                          </div>
                          <div className="text">
                            <h4>포켓몬 콤부차 새로운 플레이버 출시!</h4>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="top">
          <div className="container">
            <a className="logo" href="./pocketmon.html">
              <img src={footerlogo} alt="" />
            </a>
            <ul>
              <li>
                <a href="https://pokemonkorea.co.kr/company">회사소개</a>
              </li>
              <li>
                <div className="brinck" />
                <a href="https://pokemonkorea.co.kr/business">사업내용</a>
              </li>
              <li>
                <div className="brinck" />
                <a href="https://pokemonkorea.co.kr/partner">제휴안내</a>
              </li>
              <li>
                <div className="brinck" />
                <a href="https://pokemonkorea.co.kr/terms">이용약관</a>
              </li>
              <li>
                <div className="brinck" />
                <a href="https://pokemonkorea.co.kr/privacy">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <div className="brinck" />
                <a href="https://pokemonkorea.co.kr/email">
                  이메일무단수집거부
                </a>
              </li>
              <li>
                <div className="brinck" />
                <a href="https://pokemonkorea.co.kr/faq">고객센터</a>
              </li>
            </ul>
          </div>
          <a className="btn-top" href="#slider">
            {" "}
          </a>
        </div>
        <div className="mdl">
          <div className="container">
            <div className="left">
              <p>(주)포켓몬코리아 경기도 용인시 수지구 신수로 801, 4층</p>
              <ul>
                <li>대표이사:임재범</li>
                <li>개인정보관리책임자:임재범</li>
                <li>사업자등록번호:113-86-07676</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="btm">
          <div className="container">
            <div className="left">
              <div className="d-flex">
                <p>고객센터</p>
                <ul>
                  <li>운영시간 : 평일 15시 ~ 18시</li>
                  <li>031-272-0108</li>
                  <li>카드 게임 및 카드 게임 이벤트 : 1588-4273</li>
                  <li>webmaster@pokemonkorea.co.kr</li>
                </ul>
              </div>
              <p>※당사에서는 Pokémon GO 관련 문의는 대응하지 않습니다.</p>
            </div>
            <div className="right">
              <ul>
                <li>
                  ©2025 Pokémon. ©1995-2025 Nintendo/Creatures Inc./GAME FREAK
                  inc.
                </li>
                <li>
                  ©Nintendo, Creatures, GAME FREAK, TV Tokyo, ShoPro, JR Kikaku.
                  ©Pokémon. ©1998-2020 PIKACHU PROJECT.
                </li>
                <li>
                  포켓몬스터, 포켓몬, Pokémon, 몬스터볼, Nintendo Switch,
                  Nintendo 3DS, Nintendo DS는 Nintendo의 상표입니다.
                </li>
              </ul>
              <p>
                본 사이트의 콘텐츠에 대한 무단 복제 및 도용을 금하며 이를 어길
                시 법적 조치를 받을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
}
export default App;

import more from "../image/main-product-icon-more.png";
import porodeuct1 from "../image/main-product1.png";
import porodeuct2 from "../image/main-product2.png";
import porodeuct3 from "../image/main-product3.png";
import porodeuct4 from "../image/main-product4.jpg";
import porodeuct5 from "../image/main-product5.jpg";
import porodeuct6 from "../image/main-product6.jpg";

export const Product = () => {
  return (
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
  );
};

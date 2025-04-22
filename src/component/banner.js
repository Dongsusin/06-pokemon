import banner1 from "../image/main-banner1.png";
import banner2 from "../image/main-banner2.png";
import banner3 from "../image/main-banner3.png";
import banner4 from "../image/main-banner4.png";

export const Banner = () => {
  return (
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
                      포켓몬스터 금은편: 은빛산 이야기 8월 10일 (토) 첫 방송!
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
  );
};

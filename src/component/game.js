import gameleft from "../image/main-game-image.png";
import game1 from "../image/main-game1.png";
import game2 from "../image/main-game2.png";
import game3 from "../image/main-game3.png";
import game4 from "../image/main-game4.png";
import game5 from "../image/main-game5.png";
import game6 from "../image/main-game6.png";

export const Game = () => {
  return (
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
  );
};

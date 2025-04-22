import logo from "../image/header-logo.png";

export const Header = () => {
  return (
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
  );
};

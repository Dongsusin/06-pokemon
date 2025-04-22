import footerlogo from "../image/footer-logo.png";

export const Footer = () => {
  return (
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
              <a href="https://pokemonkorea.co.kr/privacy">개인정보처리방침</a>
            </li>
            <li>
              <div className="brinck" />
              <a href="https://pokemonkorea.co.kr/email">이메일무단수집거부</a>
            </li>
            <li>
              <div className="brinck" />
              <a href="https://pokemonkorea.co.kr/faq">고객센터</a>
            </li>
          </ul>
        </div>
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
                포켓몬스터, 포켓몬, Pokémon, 몬스터볼, Nintendo Switch, Nintendo
                3DS, Nintendo DS는 Nintendo의 상표입니다.
              </li>
            </ul>
            <p>
              본 사이트의 콘텐츠에 대한 무단 복제 및 도용을 금하며 이를 어길 시
              법적 조치를 받을 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

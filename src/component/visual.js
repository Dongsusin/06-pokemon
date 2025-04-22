import visual1 from "../image/main-visual1.png";
import visual2 from "../image/main-visual2.png";
import visual3 from "../image/main-visual3.png";
import visual4 from "../image/main-visual4.png";
import visual5 from "../image/main-visual5.png";
import visualmo1 from "../image/main-visual-mobile1.png";
import visualmo2 from "../image/main-visual-mobile2.png";
import visualmo3 from "../image/main-visual-mobile3.png";
import visualmo4 from "../image/main-visual-mobile4.png";
import visualmo5 from "../image/main-visual-mobile5.png";

export const Visual = () => {
  return (
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
  );
};

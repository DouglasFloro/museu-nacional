import * as S from './styles';
import Museu from '../../assets/images/museu.png';
import Depoimento from '../../assets/images/depoimento.png';
import {
  exhibitionList,
  formVisit,
  galleryPhoto,
  historyMuseu,
} from './mapped';

export const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <img src={Museu} alt="" />

          <S.Posts>
            <S.Video>
              <h3>Vídeo: Conheça o Museu</h3>

              <iframe
                width="310"
                height="170"
                src="https://www.youtube.com/embed/RGUYb-hivrc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </S.Video>

            <S.Map>
              <h3>Mapa: Encontre o Museu</h3>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.206311665319!2d-43.228717585034445!3d-22.90575998501238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e58a085b7af%3A0x4d11e9a933d38ce3!2sMuseu%20Nacional%20-%20UFRJ!5e0!3m2!1spt-BR!2sbr!4v1672783717775!5m2!1spt-BR!2sbr"
                width="310"
                height="170"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </S.Map>
          </S.Posts>

          <S.Info>
            <S.Exhibition>
              <h3>Exposições</h3>

              <ul>
                {exhibitionList.map((value) => (
                  <li key={value.id}>
                    <a href="">{value.name}</a>
                  </li>
                ))}
                <li>
                  <a href="">
                    <strong>Veja todos</strong>
                  </a>
                </li>
              </ul>
            </S.Exhibition>
            <S.History>
              {historyMuseu.map((value) => (
                <div key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              ))}
              <a href="">
                <strong>Leia Mais</strong>
              </a>
            </S.History>
          </S.Info>
        </S.Content>
        <S.Sidebar>
          <img src={Depoimento} alt="" />
          <S.Visit>
            {formVisit.map((value) => (
              <div key={value.title}>
                <h4>{value.title}</h4>
                <form>
                  <fieldset>
                    <legend>{value.legend}</legend>

                    <label htmlFor="data">{value.date}</label>
                    <input type="text" id="data" />

                    <div>
                      <label htmlFor="qtd">{value.amount}</label>
                      <input type="text" id="qtd" />
                    </div>
                  </fieldset>
                  <button>{value.button}</button>
                </form>
              </div>
            ))}
          </S.Visit>

          <S.Gallery>
            <h4>Galeria de Fotos</h4>
            {galleryPhoto.map((value) => (
              <div key={value.id}>
                <a href="">
                  <img src={value.image} alt="" />
                </a>
              </div>
            ))}
          </S.Gallery>
        </S.Sidebar>
      </S.Container>
    </S.Wrapper>
  );
};

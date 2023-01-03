import * as S from './styles';
import Museu from '../../assets/images/museu.png';
import Depoimento from '../../assets/images/depoimento.png';
import Imagem1 from '../../assets/images/imagem1.jpg';
import Imagem2 from '../../assets/images/imagem2.jpg';
import Imagem3 from '../../assets/images/imagem3.jpg';
import Imagem4 from '../../assets/images/imagem4.jpg';

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
                <li>
                  <a href="">Os assustadoes insentos</a>
                </li>{' '}
                <li>
                  <a href="">O gigante rinoceronte</a>
                </li>
                <li>
                  <a href="">A maio pata de elefante</a>
                </li>
                <li>
                  <a href="">Plantas do Brasil Central</a>
                </li>
                <li>
                  <a href="">Arte com dinossauro</a>
                </li>
                <li>
                  <a href="">Pirâmides </a>
                </li>
                <li>
                  <a href="">
                    <strong>Veja todos</strong>
                  </a>
                </li>
              </ul>
            </S.Exhibition>
            <S.History>
              <h3>200 Anos de História</h3>

              <p>
                O Museu Nacional, vinculado à Universidade Federal do Rio de
                Janeiro, é a mais antiga instituição científica do Brasil que,
                até setembro de 2018, figurou como um dos maiores museus de
                história natural e de antropologia das Américas.Localiza-se no
                interior do parque da Quinta da Boa Vista, na cidade do Rio de
                Janeiro, estando instalado no Palácio de São Cristóvão.
              </p>
              <a href="">
                <strong>Leia Mais</strong>
              </a>
            </S.History>
          </S.Info>
        </S.Content>
        <S.Sidebar>
          <img src={Depoimento} alt="" />
          <S.Visit>
            <h4>Faça uma Visita</h4>
            <form>
              <fieldset>
                <legend>Selecione uma Data</legend>

                <label htmlFor="data">Data</label>
                <input type="text" id="data" />
                <div>
                  <label htmlFor="qtd">Qtds Pessoas</label>
                  <input type="text" id="qtd" />
                </div>
              </fieldset>
              <button>Verificar Disponibilidade </button>
            </form>
          </S.Visit>

          <S.Gallery>
            <h4>Galeria de Fotos</h4>
            <div>
              <a href="">
                <img src={Imagem1} alt="" />
              </a>
              <a href="">
                <img src={Imagem2} alt="" />
              </a>
              <a href="">
                <img src={Imagem3} alt="" />
              </a>
              <a href="">
                <img src={Imagem4} alt="" />
              </a>
            </div>
          </S.Gallery>
        </S.Sidebar>
      </S.Container>
    </S.Wrapper>
  );
};

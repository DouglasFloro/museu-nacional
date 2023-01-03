import * as S from './styles';

export const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo>
          <h1>
            <a href="">Museu Nacional</a>
          </h1>
        </S.Logo>

        <S.Navigation>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Exposições</a>
          </li>
          <li>
            <a href="">Pesquisas</a>
          </li>
          <li>
            <a href="">Vídeos</a>
          </li>
          <li>
            <a href="">Fotos</a>
          </li>
          <li>
            <a href="">Contatos</a>
          </li>
        </S.Navigation>
      </S.Container>
    </S.Wrapper>
  );
};

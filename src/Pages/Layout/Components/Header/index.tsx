import { navList } from './mapped';
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
          {navList.map((value) => (
            <li key={value.id}>
              <a href="">{value.name}</a>
            </li>
          ))}
        </S.Navigation>
      </S.Container>
    </S.Wrapper>
  );
};

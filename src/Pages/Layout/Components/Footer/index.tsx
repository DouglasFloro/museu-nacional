import { navFooter } from './mapped';
import * as S from './styles';

export const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Nav>
        {navFooter.map((value) => (
          <div key={value.name}>
            <p>
              <a href="">{value.name}</a>
            </p>
          </div>
        ))}
      </S.Nav>
      <span>
        2019 <a href="">Museu Nacional</a> - Todos os direitos Reservados
      </span>
    </S.Wrapper>
  );
};

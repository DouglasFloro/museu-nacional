import { Home } from '../Home';
import { Header } from './Header';
import * as S from './styles';

export const Layout: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <Home />
    </S.Wrapper>
  );
};

import { Home } from '../Home';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import * as S from './styles';

export const Layout: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <Home />
      <Footer />
    </S.Wrapper>
  );
};

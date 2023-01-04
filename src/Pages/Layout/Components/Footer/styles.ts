import styled from 'styled-components';
import Fundo from '../../../../assets/images/fundo-rodape.png';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  background: url(${Fundo}) no-repeat center top;
  padding: 20px 0 30px 0;
  text-align: center;

  a {
    padding: 2px 10px;
    color: #af670a;
    text-decoration: none;
  }
  p {
    margin-bottom: 10px;
  }

  a:hover {
    color: #227115;
  }

  span {
    padding: 2px 10px;
    color: #af670a;
    text-decoration: none;
  }
`;
export const Nav = styled.div`
  display: flex;
  justify-content: center;
`;

import styled from 'styled-components';
import Museu from '../../../assets/images/logo.png';

export const Wrapper = styled.div`
  width: 100%;

  padding: 15px 0;
`;

export const Container = styled.div`
  width: 1080px;

  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Logo = styled.div`
  width: 248px;
  height: 21px;

  margin-top: 10px;

  text-indent: -9999px;
  background: url(${Museu});
`;

export const Navigation = styled.ul`
  height: 100px;

  display: flex;
  align-items: flex-end;
  list-style: none;
  margin: 20px;

  li a {
    margin-right: 25px;
    padding-bottom: 3px;
    text-transform: uppercase;
  }

  a {
    color: #af670a;
    text-decoration: none;
  }
  a:hover {
    color: #227115;
    border-bottom: 1px solid #535858;
  }
`;

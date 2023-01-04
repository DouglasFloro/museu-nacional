import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1080px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const Content = styled.div`
  width: 710px;

  h3 {
    margin: 15px 20px;
    color: #227115;
    font-size: 1em;
    text-transform: uppercase;
  }
`;
export const Sidebar = styled.div`
  width: 350px;

  background: #ebe7dd;
`;

export const Visit = styled.div`
  background: #cdc8b1;
  padding: 10px 27px 27px 27px;
  margin-top: 10px;

  h4 {
    color: #86521a;
    text-transform: uppercase;
    padding-bottom: 3px;
  }

  fieldset {
    border: none;
    input {
      height: 20px;
      width: 100px;

      background: #fff;
      border: 1px solid #ada484;
      font-size: 1em;
      margin: 0 5px;
    }

    div input {
      width: 30px;
    }
  }

  button {
    height: 40px;
    width: 100%;

    margin-top: 25px;
    background: #9b9271;
    color: #fff;
    font-size: 1.2em;
    border: none;
  }
`;

export const Gallery = styled.div`
  margin-top: 10px;
  padding: 30px 0 0 30px;

  h4 {
    color: #86521a;
    text-transform: uppercase;
    padding-bottom: 3px;
    margin-bottom: 20px;
  }

  a img {
    width: 93px;
    height: 93px;

    margin: 10px 0 0 20px;
  }

  a {
    padding: 15px;
  }
`;

export const Posts = styled.div`
  display: flex;

  iframe {
    border: none;
  }
`;

export const Video = styled.div`
  width: 350px;
`;

export const Map = styled.div`
  width: 350px;
`;

export const Info = styled.div`
  display: flex;
`;

export const Exhibition = styled.div`
  width: 350px;

  ul li {
    padding: 5px 10px;
  }

  a {
    color: #af670a;
    text-decoration: none;
  }
  a:hover {
    color: #227115;
  }
`;

export const History = styled.div`
  width: 350px;
`;

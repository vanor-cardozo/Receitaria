import styled from 'styled-components';

const Container = styled.section`
font-family: arimo;
font-size: small;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;


  a { 
    color: #4A4A4A;
  }

  p {
    background-color: white;
    max-width: 120px;
    padding: 5px;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

img {
  width: 120px;
  border-radius:  5px 5px 0px 0px;
  text-align: center;
}
`;

export default Container;

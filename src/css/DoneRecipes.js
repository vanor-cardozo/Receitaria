import styled from 'styled-components';

const CardDone = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  
  p {
    background-color: white;
  }

  a {
    text-decoration: none;
    font-family: oceanwide;
    color: black;
  }

  button {
    margin-left: 20px;
    border-style: none;
    background-color: white;
  }

  img {
  border-radius: 5px;
  margin: 30px;
  }
`;

export default CardDone;

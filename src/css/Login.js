import styled from 'styled-components';

export const Container = styled.section`
background: linear-gradient(to left, rgb(87, 87, 87), rgb(54, 54, 54));
text-align: start;

`;

export const Form = styled.form`
font-family: oceanwide;
display: flex;
flex-direction: column;
margin: 30px;
color: white;

input {
  margin-bottom: 20px;
  border-radius: 7px;
  border-style: none;
  padding: 5px;
  color: #494949;
}

button {
  width: 150px;
  padding: 5px;
  border-radius: 7px;
  border-style: none;
  color: #494949;
  background-color: #7CA712;
}

button:disabled {
  background-color: gray;
}
`;

export const Image = styled.img`
align-items: center;
display: flex;
justify-content: center;
width: 300px;
`;

export const Banner = styled.div`
background-color: #FFCC4B;

img {
  width: 100%;
  margin-bottom: -100px;
}
`;

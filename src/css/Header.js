import styled from 'styled-components';

export const Container = styled.section`
justify-content: center;
font-family: arimo;
color: white;

button {
  border: none;
  background-color: #FFCC4B;
}

img{
  width: 45px;
  background-color: white;
  border-radius: 30%;
  padding: 3px;
  opacity: 90%;
}

h2 {
  font-family: mansalva;
  margin-top: 10px;
  font-size:50px;
  text-shadow: #4A4A4A 3px 5px 3px;
`;

export const HeaderSearch = styled.section`
background-color: #FFCC4B;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px 20px 5px 20px;

`;

export const Form = styled.section`

font-size: smaller;


div {
  display: inline-block;
}

input {
  margin-top: 5px;
  margin-left: 40px;
  border: none;
  padding: 4px;
  border-radius: 5px 0px 0px 5px;
}

button {
  background: #4A4A4A;
  border: none;
  border-radius: 0px 5px 5px 0px;
  color: #FFCC4B;
  padding: 4px 10px
}
  background-color: #FFCC4B;
`;

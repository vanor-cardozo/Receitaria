import styled from 'styled-components';

export const Container = styled.section`
justify-content: center;
font-family: oceanwide;
color: #4A4A4A;

button {
  border: none;
  background-color: #FFCC4B;
}

h2 {
  margin-top: 10px;
}
`;

export const HeaderSearch = styled.section`
background-color: #FFCC4B;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 20px 20px 30px;

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

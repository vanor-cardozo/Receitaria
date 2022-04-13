import styled from 'styled-components';

export const HeaderImg = styled.section`
img {
  width: 420px;
  height: 310px;
}
`;

export const NameBanner = styled.section`

font-family: oceanwide;
max-height: 100px;
color: #4A4A4A;
background-color: #FFCC4B;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 20px 15px 20px;


p {
  font-size: smaller;
  margin: 0px;
  padding: 0px;
}

h2 {
  padding: 0px;
  margin: 0px;
}

button {
  background-color: #FFCC4B;
  border-style: none;
}
`;

export const Card = styled.section`
font-family: arimo;
background-color: F5F3F3;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px;
padding: 15px;
border-radius: 15px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


button {
width: 150px;
padding: 5px;
border-radius: 7px;
border-style: none;
color: #494949;
background-color: #7CA712;
}
`;

export const RecomendationCard = styled.section`

background-color: #FFCC4B;
  font-family: oceanwide;

  img {
    max-width: 150px;
    max-height: 150px;
    margin: 20px 20px 0px 5px;
    border-radius: 10px 10px 0px 0px;
  }

  p {
    margin: 0px 5px 50px 5px;
    font-size: small;
    background-color: white;
    max-width: 150px;
    padding: 5px;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const RecomendationBanner = styled.section`
font-family: oceanwide;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #494949;
    background-color: #FFCC4B;
    padding: 20px 20px 15px 20px;

    h2 {
  margin-top: 10px;
}
`;

export const Container = styled.section`
ul {
   list-style: none;
   padding: 10px;
}
`;

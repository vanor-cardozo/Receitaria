import styled from 'styled-components';

const Container = styled.section`
  font-family: oceanwide;
  color: #FFCC4B;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  height: 640px;
  margin-top: 150px;

  button {
    border-style: none;
    background-color: #FFCC4B;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 30px;
  }

  img {
  width: 120px;
  border-radius:  5px 5px 0px 0px;
  text-align: center;
}

 p {
  font-family: oceanwide;
color: #FFCC4B;
display: flex;
flex-direction: column;
align-items: center;
 }
`;
export default Container;

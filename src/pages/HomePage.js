import styled from "styled-components"

const Main = styled.div`
 min-height: 100vh;
 width: 100hv;

    display: flex;
    flex-direction: column;

    background-image: url('https://images.pexels.com/photos/1115180/pexels-photo-1115180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

    `;


  const Title = styled.h1`
  margin: 0 auto;
  font-weight:400;
  font-size: 120px;
  color: #fff;
  text-shadow: 1px 1px 2px black;
  margin-bottom: 160px;
  `;
  
  const AppDescription = styled.p`
  font-weight:400;
  font-size: 36px;
  color: #fff;
  text-shadow: 6px 6px 12px black;
  text-align: center;


  `;

  const MainDescCont = styled.div`
  padding-top: 100px;
  width: 1000px;
  height: 100%;
  margin: 0 auto;

  `
    
  

export default function HomePage() {
    return <Main >
      <MainDescCont>

    
        <Title>
        Move Easily
        </Title>
        <AppDescription>
        Rented car is the key to quick and easy movement between urban areas, allowing you to efficiently use your time and forget about the limitations of public transportation.</AppDescription>
      <AppDescription> With a rented car, you are always on a self-directed path in the city.</AppDescription>
        </MainDescCont>

    </Main>
}
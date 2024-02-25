import styled from "styled-components"

const Main = styled.div`
 min-height: 100vh;

    display: flex;
    flex-direction: column;

    background-image: url('https://images.pexels.com/photos/2469212/pexels-photo-2469212.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

    `;


  const Title = styled.h1`
  font-weight:400;
  font-size: 120px;
  color: #fff;
  text-shadow: 1px 1px 2px black;
  `;
  
  const AppDescription = styled.p`
  font-weight:400;
  font-size: 36px;
  color: #d9ed92;
  text-shadow: 6px 6px 12px black;

  `;
    
  

export default function HomePage() {
    return <Main 
    // style={{
    //     backgroundImage: `url('https://images.pexels.com/photos/2469212/pexels-photo-2469212.jpeg')`,
        
    // }}
    >
        <Title>
        Move Easily
        </Title>
        <AppDescription>
        Орендоване авто – це ключ до швидкого та легкого пересування між міськими районами, дозволяючи тобі ефективно використовувати свій час. Забудь про обмеження громадського транспорту – з орендованим автомобілем ти завжди на керованому власному шляху у місті.
        </AppDescription>


    </Main>
}
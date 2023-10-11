import styled from "styled-components";
import CurrentCityWeather from "./components/currentCityWeather";

const HomePage = () => {
  return (
    <Wrapper>
      <BackgroundImage>
        <CurrentCityWeather />
      </BackgroundImage>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  text-align: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://assets.bonappetit.com/photos/5a3c31055468684549cf963e/16:9/w_2800,h_1575,c_limit/healthyish-fgfp-coldclimatetips-getty.jpg");
  // background: url("../../public/images/seasonalBG/winter.jpeg");
  overflow: hidden;
`;

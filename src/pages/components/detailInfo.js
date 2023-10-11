import styled from "styled-components";

// slide to top : on refresh

const DetailInfo = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <p>Humidity</p>
          <h2>12%</h2>
        </Box>
        <Box>
          <p>Wind</p>
          <h2>5 km/h</h2>
        </Box>
        <Box>
          <p>Feels Like</p>
          <h2>4 °C</h2>
        </Box>
      </Container>
    </Wrapper>
  );
};
export default DetailInfo;

const Wrapper = styled.div`
  color: #fff;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  width: 28%;
  margin: 5% 0;
  background-color: #ffffff8d;
  border-radius: 10px;
  transition: all ease-in-out 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #ececec80;
  }
`;

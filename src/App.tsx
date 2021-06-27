import React from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Img from "./app.png";
import CoinBg from "./coin.jpeg";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Layout = styled.div`
  width: auto;
  height: auto;
  background: white;
  display: flex;
  align-items: center;
  padding: 24px;
`;

const LeftBox = styled.div`
  width: 50vw;
  max-width: 600px;
  min-width: 400px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 26px;
  z-index: 2;
  background-image: url(${CoinBg});
`;

const RightBox = styled.div`
  width: 40vw;
  max-width: 400px;
  min-width: 260px;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #6b4f34;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 2.8rem;
  color: #1f160e;
  margin-top: 100px;
  opacity: 1;
`;

const Desc = styled.div`
  width: 80%;
  height: 60%;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  line-height: 22px;
`;

function App() {
  return (
    <Wrap>
      <svg
        width="300"
        height="1000"
        viewBox="0 0 574 1517"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", left: "10%", zIndex: 1 }}
      >
        <path
          d="M0 0H144C381.482 0 574 192.518 574 430V1517H430C192.518 1517 0 1324.48 0 1087V0Z"
          fill="#F1DACA"
          fill-opacity="0.91"
        />
      </svg>
      <Layout>
        <LeftBox>
          <Title>Investing App</Title>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Desc>
          <Form />
        </LeftBox>
        <RightBox>
          <img src={Img} style={{ width: "200px" }} />
        </RightBox>
      </Layout>
    </Wrap>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Accountants from "./pages/Accountants";

export const App = () => {
  return (
    <BodyContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Accountants />} />
        <Route path="/ksiegowi" element={<Accountants />} />
      </Routes>
    </BodyContainer>
  );
};

const BodyContainer = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 0;
  width: 90%;
`;

export default App;

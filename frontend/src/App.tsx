import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Layouts/Header";
import { Home } from "./pages/Home";
import { ArtistView } from "./pages/ArtistView";
import { styled } from "styled-components";

const Content = styled.main`
  padding: 2rem;
`;

function App() {
  return (
    <>
      <Header />
      <Content>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artist/:id" element={<ArtistView />} />
          </Routes>
        </Router>
      </Content>
    </>
  );
}

export default App;

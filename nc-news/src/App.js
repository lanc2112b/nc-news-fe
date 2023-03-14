import './App.css';
//import "./App.scss"; // Install and modify bootstrap sometime in the future

import Header from './components/Header';
import Container from "react-bootstrap/Container";
import { Row } from 'react-bootstrap';
import MainSection from './components/MainSection';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import MainArtCard from './components/MainArtCard';

function App() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Header />
      </Row>
      <Row>
        <Routes>
          <Route
            path="/articles"
            element={<MainSection element={<ArticleList />} />}
          />
          <Route
            path="/articles/:article_id"
            element={<MainSection element={<MainArtCard />} />}
          />
        </Routes>
      </Row>
    </Container>
  );
}

export default App;

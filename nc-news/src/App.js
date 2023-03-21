import './App.css';
//import "./App.scss"; // Install and modify bootstrap sometime in the future
import Header from './components/Header';
import Container from "react-bootstrap/Container";
import MainSection from './components/MainSection';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import MainArticle from './components/MainArticle';
import LandingPage from './components/LandingPage';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import NotFoundError from './components/NotFoundError';
import ApiEndpointList from './components/ApiEndpointList';


function App() {
  return (
    <Container fluid className="p-0">
      <Header />

      <Routes>
        <Route path="/" element={<MainSection element={<LandingPage />} />} />
        <Route path="/api" element={<MainSection element={<ApiEndpointList />} />} />
        <Route
          path="/articles"
          element={<MainSection element={<ArticleList />} />}
        />
        <Route path="/users" element={<MainSection element={<UserList />} />} />
        <Route
          path="/users/:user_id"
          element={<MainSection element={<UserProfile />} />}
        />

        <Route
          path="/articles/view/:topic_id"
          element={<MainSection element={<ArticleList />} />}
        />
        <Route
          path="/articles/:article_id"
          element={<MainSection element={<MainArticle />} />}
        />
        <Route path="*" element={<MainSection element={<NotFoundError />} />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;

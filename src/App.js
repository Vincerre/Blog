import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import PostPage from './components/pages/PostPage/PostPage';
import PostAddPage from './components/pages/PostAddPage/PostAddPage';
import PostEditPage from './components/pages/PostEditPage/PostEditPage';
import About from './components/pages/About/About';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Categories from './components/pages/Categories/Categories';
import CategoryPage from './components/pages/CategoryPage/CategoryPage';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:catTitle" element={<CategoryPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/post/add" element={<PostAddPage />} />
        <Route path="/post/edit/:id" element={<PostEditPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;

import Posts from '../../features/Posts/Posts';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="me-auto">
      <div className="d-flex justify-content-between align-items-center">
        <h1>All Posts</h1>
        <Link to="/post/add" style={{ height: '50%' }} className="btn btn-primary">
          Read More
        </Link>
      </div>
      <Posts />
    </Container>
  );
};

export default Home;

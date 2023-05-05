import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { ListGroup } from 'react-bootstrap';

const Categories = () => {
  const categories = useSelector((state) => getAllCategories(state));
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <h1>Categories</h1>
      </div>
      <ListGroup className="d-flex m-2">
        {categories.map((category) => (
          <Link
            className="d-flex p-3 border justify-content-center align-items-center text-decoration-none fs-5"
            key={category.id}
            to={'/category/' + category.title}>
            {category.title}
          </Link>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Categories;

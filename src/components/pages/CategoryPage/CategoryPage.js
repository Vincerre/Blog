import { useParams } from 'react-router';
import { getAllPosts } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Post from '../../features/Post';

const CategoryPage = () => {
  const { catTitle } = useParams();
  const posts = useSelector((state) => getAllPosts(state));
  const postsByCatId = posts.filter((post) => post.category.title === catTitle);

  if (postsByCatId.length === 0)
    return (
      <div className="d-flex p-4">
        <h3>No posts in this category</h3>
      </div>
    );
  return (
    <Row>
      {postsByCatId.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Row>
  );
};

export default CategoryPage;

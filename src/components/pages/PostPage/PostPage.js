import { useParams, Navigate } from 'react-router';
import { Link } from 'react-router-dom';

import { getPostsById } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const PostPage = () => {
  const { id } = useParams();
  const postData = useSelector((state) => getPostsById(state, id));
  if (!postData) return <Navigate to="/" />;
  return (
    <Card key={postData.id} style={{ width: '75%' }} className="m-auto justify-content-center border-0">
      <Card.Body className="d-flex flex-wrap justify-content-center">
        <Card.Title className="w-75 d-flex justify-content-between align-items-center">
          <h2>{postData.title}</h2>
          <div>
            <Link to={'/post/edit/:id'} className="mx-1">
              <button className="btn btn-outline-info">Edit</button>
            </Link>
            <Link to={'/post/edit/:id'} className="mx-1">
              <button className="btn btn-outline-danger">Delete</button>
            </Link>
          </div>
        </Card.Title>
        <Card.Text className="w-75">
          <p>
            <b>Author: </b>
            {postData.author}
          </p>
          <p>
            <b>Published: </b>
            {postData.publishedDate}
          </p>
          <p>{postData.shortDescription}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostPage;

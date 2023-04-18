import { getPosts } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Posts = () => {
  const posts = useSelector(getPosts);

  return (
    <div className="row">
      {posts.map((post) => (
        <Card key={post.id} className="col-12 col-lg-4 px-4">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              <p>
                <b>Author: </b>
                {post.author}
              </p>
              <p>
                <b>Published: </b>
                {post.publishedDate}
              </p>
              <p>{post.shortDescription}</p>
            </Card.Text>
            <Link key={post.id} to={'/post/' + post.id} style={{ width: '110px' }} className="btn btn-primary">
              Read More
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Posts;

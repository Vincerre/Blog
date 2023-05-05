import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Row, Container, Col } from 'react-bootstrap';
import { dateToString } from '../../utils/dateToString';
import { getAllPosts } from '../../redux/categoriesRedux';

const Posts = () => {
  const posts = useSelector((state) => getAllPosts(state));
  return (
    <Container>
      <Row className="gx-5">
        {posts.map((post) => (
          <Col key={post.id} className="col-12 col-md-6  col-lg-4 col-xxl-3 p-2">
            <Card key={post.id}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <div className="d-flex flex-column my-4">
                  <span>
                    <b>Author: </b>
                    {post.author}
                  </span>
                  <span>
                    <b>Published: </b>
                    {dateToString(post.publishedDate)}
                  </span>
                  <span>
                    <b>Category: </b>
                    {post.category.title}
                  </span>
                  <span className="mt-4">{post.shortDescription}</span>
                </div>
                <Link key={post.id} to={'/post/' + post.id} style={{ width: '110px' }} className="btn btn-primary">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Posts;

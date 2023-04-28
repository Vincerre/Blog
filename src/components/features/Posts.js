// import { getPosts } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Row, Container, Col } from 'react-bootstrap';
import { dateToString } from '../../utils/dateToString';
import { getAllPosts } from '../../redux/postsRedux';

const Posts = () => {
  const posts = useSelector((state) => getAllPosts(state));

  return (
    <Container>
      <Row className="gx-5">
        {posts.map((post) => (
          <Col className="col-12 col-md-6  col-lg-4 col-xxl-3 p-2">
            <Card key={post.id}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <p>
                    <b>Author: </b>
                    {post.author}
                  </p>
                  <p>
                    <b>Published: </b>
                    {dateToString(post.publishedDate)}
                  </p>
                  <p>
                    <b>Category: </b>
                    {post.category}
                  </p>
                  <p>{post.shortDescription}</p>
                </Card.Text>
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

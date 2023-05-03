import { Link } from 'react-router-dom';
import { dateToString } from '../../utils/dateToString';
import { Card, Col } from 'react-bootstrap';

const Post = (props) => {
  return (
    <Col key={props.id} className="col-12 col-md-6  col-lg-4 col-xxl-3 p-2">
      <Card key={props.id}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <div className="d-flex flex-column my-4">
            <span>
              <b>Author: </b>
              {props.author}
            </span>
            <span>
              <b>Published: </b>
              {dateToString(props.publishedDate)}
            </span>
            <span>
              <b>Category: </b>
              {props.category.title}
            </span>
            <span className="mt-4">{props.shortDescription}</span>
          </div>
          <Link key={props.id} to={'/post/' + props.id} style={{ width: '110px' }} className="btn btn-primary">
            Read More
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;

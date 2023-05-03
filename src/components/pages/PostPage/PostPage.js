import { useState } from 'react';
import { useParams } from 'react-router';
import { Link, Navigate } from 'react-router-dom';
import { getPostsById, removePost } from '../../../redux/postsRedux';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Row, Container, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { dateToString } from '../../../utils/dateToString';

const PostPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const postData = useSelector((state) => getPostsById(state, id));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const remove = (e) => {
    e.preventDefault();
    dispatch(removePost(id));
    setShow(false);
  };

  if (!postData) return <Navigate to="/" />;
  else
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This operation will completely remove this post from the app. Are you sure you want to do that?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" className="btn btn-danger" onClick={remove}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>
        <Container>
          <Row className="justify-content-center">
            <Col className="col-8">
              <Card key={postData.id}>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <h2>{postData.title}</h2>
                    <div>
                      <Link to={'/post/edit/' + id} className="mx-1">
                        <button className="btn btn-outline-info">Edit</button>
                      </Link>
                      <Link className="mx-1" variant="primary" to="" onClick={handleShow}>
                        <button className="btn btn-outline-danger">Delete</button>
                      </Link>
                    </div>
                  </Card.Title>
                  <div className="d-flex flex-column my-4">
                    <span>
                      <b>Author: </b>
                      {postData.author}
                    </span>
                    <span>
                      <b>Published: </b>
                      {dateToString(postData.publishedDate)}
                    </span>
                    <span>
                      <b>Category: </b>
                      {postData.category.title}
                    </span>
                    <span className="mt-4" dangerouslySetInnerHTML={{ __html: postData.content }}></span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
};

export default PostPage;

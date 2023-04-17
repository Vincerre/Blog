import { useState } from 'react';
import { useParams } from 'react-router';
import { Link, Navigate } from 'react-router-dom';
import { getPostsById, removePost } from '../../../redux/postsRedux';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const PostPage = (props) => {
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

        <Card key={postData.id} style={{ width: '75%' }} className="m-auto justify-content-center border-0">
          <Card.Body className="d-flex flex-wrap justify-content-center">
            <Card.Title className="w-75 d-flex justify-content-between align-items-center">
              <h2>{postData.title}</h2>
              <div>
                <Link to={'/post/edit/:id'} className="mx-1">
                  <button className="btn btn-outline-info">Edit</button>
                </Link>
                <Link className="mx-1" variant="primary" to="" onClick={handleShow}>
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
              <p>{postData.content}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
};

export default PostPage;

import TextInput from '../../common/TextInput/TextInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { InputGroup } from 'react-bootstrap';

const AddPostForm = ({ action, actionText, ...props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [date, setDate] = useState(props.date || '');
  const [description, setDescription] = useState(props.description || '');
  const [content, setContent] = useState(props.content || '');

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, author, publishedDate: date, shortDescription: description, content }));
    navigate('/');
  };

  return (
    <>
      <form>
        <InputGroup className="w-50">
          <TextInput title="Title" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextInput
            title="Author"
            placeholder="Enter author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <TextInput
            title="Published"
            placeholder="Enter date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-4">
          <TextInput
            title="Description"
            placeholder="Leave a comment here"
            as="textarea"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextInput
            title="Main content"
            placeholder="Leave a comment here"
            as="textarea"
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </InputGroup>
      </form>
      <button className="btn btn-primary" onClick={handleForm}>
        Add Post
      </button>
    </>
  );
};

export default AddPostForm;

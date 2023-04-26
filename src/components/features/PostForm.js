import { useState } from 'react';
import TextInput from '../common/TextInput/TextInput';
import { InputGroup } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState(props.description || '');
  const [content, setContent] = useState(props.content || '');
  const handleForm = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate: date, shortDescription: description, content });
  };
  function handleUserInputChange(newUserValue) {
    const diff = newUserValue;
    setContent(diff);
  }

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
        </InputGroup>
        <DatePicker selected={date} onChange={(date) => setDate(date)} dateFormat="dd/MM/yyyy" />
        <InputGroup className="mb-4 ">
          <TextInput
            title="Description"
            placeholder="Leave a comment here"
            as="textarea"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputGroup>
        <ReactQuill
          className="mb-4"
          placeholder="Leave a comment here"
          value={content}
          onChange={handleUserInputChange}
        />
      </form>
      <button className="btn btn-primary" onClick={handleForm}>
        {actionText}
      </button>
    </>
  );
};

export default PostForm;

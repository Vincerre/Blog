import { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
// import getAllCategories from '../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState(props.description || '');
  const [content, setContent] = useState(props.content || '');
  const [dateError, setDateError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [categoryId, setCategoryId] = useState(props.category || '');

  const categories = useSelector((state) => state.categories);
  console.log('cats', categories);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleForm = () => {
    setContentError(!content);
    setDateError(!date);
    if (content && date) {
      action({ title, author, publishedDate: date, shortDescription: description, content, categoryId });
    }
  };

  function handleUserInputChange(newUserValue) {
    const diff = newUserValue;
    setContent(diff);
  }

  return (
    <>
      <form>
        <InputGroup className="w-50 flex-column">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              {...register('title', { required: true, minLength: 3 })}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
            {errors.title && (
              <small className="d-block form-text text-danger mt-2">
                This field is required ( minimum 3 characters )
              </small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author</Form.Label>
            <Form.Control
              {...register('author', { required: true, minLength: 3 })}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Enter author"
            />
            {errors.author && (
              <small className="d-block form-text text-danger mt-2">
                This field is required ( minimum 3 characters )
              </small>
            )}
          </Form.Group>
        </InputGroup>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <DatePicker selected={date} onChange={(date) => setDate(date)} dateFormat="dd/MM/yyyy" />
          {dateError && <small className="d-block form-text text-danger">Choose date!</small>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            aria-label="Default select example">
            <option>Select category</option>
            <option value={categories[0].id}>Sport</option>
            <option value={categories[1].id}>News</option>
            <option value={categories[2].id}>Movies</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="w-100 mb-2"
            {...register('description', { required: true, minLength: 20 })}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="textarea"
            placeholder="Enter description"
            rows={10}
          />
          {errors.description && (
            <small className="d-block form-text text-danger mt-2">
              This field is required ( minimum 20 characters )
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Content</Form.Label>
          <ReactQuill placeholder="Leave a comment here" value={content} onChange={handleUserInputChange} />
          {contentError && <small className="d-block form-text text-danger">Content can't be empty</small>}
        </Form.Group>
      </form>
      <button className="btn btn-primary" onClick={validate(handleForm)}>
        {actionText}
      </button>
    </>
  );
};

export default PostForm;

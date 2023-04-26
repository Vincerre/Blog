import Form from 'react-bootstrap/Form';

const TextInput = (props) => {
  return (
    <>
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        className="w-100 mb-4"
        rows={props.rows}
        as={props.as}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        type="text"
      />
    </>
  );
};

export default TextInput;

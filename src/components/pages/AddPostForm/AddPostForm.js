import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import PostForm from '../../features/PostForm';
const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (post) => {
    dispatch(addPost(post));
    navigate('/');
  };

  return <PostForm action={handleForm} actionText="Add post" />;
};

export default AddPostForm;

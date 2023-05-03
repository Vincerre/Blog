import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsById, editPost } from '../../redux/postsRedux';
import { useParams } from 'react-router';

import PostForm from './PostForm';
const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const postData = useSelector((state) => getPostsById(state, id));

  const handleForm = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/post/' + id);
  };
  if (!postData) return <Navigate to="/" />;
  else
    return (
      <PostForm
        action={handleForm}
        actionText="Edit post"
        id={id}
        title={postData.title}
        author={postData.author}
        date={postData.publishedDate}
        description={postData.shortDescription}
        content={postData.content}
        category={postData.categoryId}
      />
    );
};

export default EditPostForm;

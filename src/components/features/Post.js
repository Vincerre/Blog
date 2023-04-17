import { getPosts } from '../../redux/postsRedux';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
const Post = () => {
  const posts = useSelector(getPosts);

  return (
    <section className="d-flex">
      {posts.map((post) => (
        <div key={post.id} className="p-3">
          <h3>{post.title}</h3>
          <p>
            <b>Author:</b>
            {post.author}
          </p>
          <p>
            <b>Published:</b>
            {post.publishedDate}
          </p>
          <p>{post.shortDescription}</p>
          <Button variant="primary">Read More</Button>
        </div>
      ))}
    </section>
  );
};

export default Post;

import React from 'react';
import PropTypes from 'prop-types';
import blogPosts from './blogPosts.json';

const Author = ({ username, name }) => (
  <div className="author">
    <div>username: {username}</div>
    <div>name: {name}</div>
  </div>
);

Author.propTypes = {
    username:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
}

const Comment = ({ author, comment }) => (
  <li className="comment">
    <div>
      <Author {...author} />
    </div>
    <p>{comment}</p>
  </li>
);

Comment.propTypes = {
    author:PropTypes.objectOf(PropTypes.string).isRequired,
    comment:PropTypes.string.isRequired
}

const Comments = ({ comments }) => (
  <ul>
    {comments.map((i) => (
      <Comment {...i} key={i.id} />
    ))}
  </ul>
);

Comments.propTypes = {
    comments:PropTypes.array
}

const BlogPosts = ({ posts }) => {
  return (
    <React.Fragment>
      {posts.map(({ id, author, body, comments }) => (
        <section key={id}>
          <Author {...author} />
          <p>{body}</p>
          <Comments comments={comments} />
        </section>
      ))}
    </React.Fragment>
  );
};

BlogPosts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            author: PropTypes.shape({
                username:PropTypes.string.isRequired,
                name:PropTypes.string.isRequired
            }).isRequired,
            body:PropTypes.string.isRequired,
            comments:PropTypes.arrayOf(
                PropTypes.shape({
                    id:PropTypes.string.isRequired,
                    author: PropTypes.shape({
                        username:PropTypes.string.isRequired,
                        name:PropTypes.string.isRequired
                    }).isRequired
                })
            )
        })
    )
}

const Task = () => {
  return (
    <div>
      <BlogPosts posts={blogPosts} />
    </div>
  );
};

export default Task;

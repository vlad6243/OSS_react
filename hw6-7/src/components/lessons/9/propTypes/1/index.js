import React from 'react';
import blogPosts from './blogPosts.json';

const Author = ({ username, name }) => (
  <div className="author">
    <div>username: {username}</div>
    <div>name: {name}</div>
  </div>
);

const Comment = ({ author, comment }) => (
  <li className="comment">
    <div>
      <Author {...author} />
    </div>
    <p>{comment}</p>
  </li>
);

const Comments = ({ comments }) => (
  <ul>
    {comments.map((i) => (
      <Comment {...i} key={i.id} />
    ))}
  </ul>
);

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

const Task = () => {
  return (
    <div>
      <BlogPosts posts={blogPosts} />
    </div>
  );
};

export default Task;

import React from "react";
const PostsTable = (props) => {
  const { posts } = props;
  return (
    <div className="container">
      <input
        type="button"
        value="Add"
        className="btn btn-primary float-end my-3"
      />
      <table className="table table-dark">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Post Id</th>
            <th>Title</th>
            <th>Body</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <input
                  type="button"
                  value="Update"
                  className="btn btn-outline-secondary"
                />
                <input
                  type="button"
                  value="Delete"
                  className="btn btn-outline-danger"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;

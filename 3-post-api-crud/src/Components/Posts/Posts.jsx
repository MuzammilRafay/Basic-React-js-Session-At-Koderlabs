import React, { memo, Children } from "react";

function Posts(props) {
  const { posts = [], deletePostHandler } = props;

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Post Id</th>
          <th>Title</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {posts?.length > 0 &&
          posts?.map((singlePost, index) => {
            return (
              <tr key={singlePost?.id}>
                <td>{singlePost?.id}</td>
                <td>{singlePost?.title}</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deletePostHandler(singlePost?.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}

        {/* {posts?.length > 0 &&
          Children.map(posts, (singlePost) => {
            return (
              <tr key={singlePost?.id}>
                <td>{singlePost?.id}</td>
                <td>{singlePost?.title}</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })} */}
      </tbody>
    </table>
  );
}

export default memo(Posts);

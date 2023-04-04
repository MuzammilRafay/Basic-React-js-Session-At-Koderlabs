import React, { useState } from "react";
import { baseUrl } from "../../utils/constant";
import CustomSpinner from "../CustomSpinner/CustomSpinner";

function CreatePost(props) {
  const { getPosts } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loader, setLoader] = useState(false);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeBody = (event) => {
    setBody(event.target.value);
  };

  const onCreatePostHandler = async (event) => {
    event.preventDefault();
    const payload = {
      // title:title,
      // body:body,
      title,
      body,
    };

    if (!title || !body) {
      alert("please fill the input fields");
      return;
    }

    setLoader(true);
    await fetch(`${baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(() => {
        setTitle("");
        setBody("");

        let $ = window.$;
        $("#create-post").modal("hide");

        getPosts();
      })
      .catch((error) => console.error(error));
    setLoader(false);
  };
  return (
    <>
      {loader && <CustomSpinner />}
      <a className="btn btn-primary" data-toggle="modal" href="#create-post">
        Create Post
      </a>

      <div className="modal fade" id="create-post">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title">Create Post</h4>
            </div>
            <div className="modal-body">
              <form action="" method="POST" onSubmit={onCreatePostHandler}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Title"
                    onChange={onChangeTitle}
                    value={title}
                  />
                </div>

                <div className="form-group">
                  <label>Body</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Body"
                    onChange={onChangeBody}
                    value={body}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Create Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;

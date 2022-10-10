import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNews } from "../../actions/news";
const initialState = {
  paragraph1: "",
  paragraph2: "",
  paragraph3: "",
};
function PublishNews() {
  const [sendMessage, SetsendMessage] = useState(initialState);
  const [openSendMessage, setOpenSendMessage] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNews(sendMessage));
    clear();
    setOpenSendMessage(true)

    setTimeout(() => {
      setOpenSendMessage(false)
    }, 5000);
  };
  const clear = () => {
    SetsendMessage({
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
    });
  };
  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Message To:</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="E.g Senior One Pretoria"
          name="paragraph1"
          required
          value={sendMessage.paragraph1}
          onChange={(e) =>
            SetsendMessage({
              ...sendMessage,
              paragraph1: e.target.value,
            })
          }
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Subject</label>
        <input
          name="paragraph2"
          value={sendMessage.paragraph2}
          onChange={(e) =>
            SetsendMessage({
              ...sendMessage,
              paragraph2: e.target.value,
            })
          }
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Subject"
          required
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Body</label>
        <textarea
          name="paragraph3"
          value={sendMessage.paragraph3}
          onChange={(e) =>
            SetsendMessage({
              ...sendMessage,
              paragraph3: e.target.value,
            })
          }
          className="form-control"
          cols="10"
          rows="5"
          placeholder="Type your message ..."
          required
        ></textarea>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1" required>
          Agree
        </label>
      </div>
      {openSendMessage && (
        <div class="alert alert-success" role="alert">
          <a href="/compose" class="alert-link">
            🙂Your message was delivered successfully.
          </a>
        </div>
      )}
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Send
      </button>
    </form>
  );
}

export default PublishNews;

import { useState } from "react";

import Modal from "./Modal";
import Overlay from "./Overlay";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="todo-card">
      <h1>{props.text}</h1>
      <div className="todo-actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}
      {modalIsOpen ? <Overlay onCancel={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo;

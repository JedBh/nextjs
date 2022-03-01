function Modal(props) {
  function closeModalHandler() {
    props.onCancel();
  }

  function confirmModalHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <div className="modal-text">
        <p>Are you sure?</p>
        <div className="btn-group">
          <button className="btn btn-alt" onClick={closeModalHandler}>
            Cancel
          </button>
          <button className="btn" onClick={confirmModalHandler}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

import { useContext } from "react";
import { MessageContext } from "../contexts/Message";
import { Toast, ToastContainer } from "react-bootstrap";

const Toaster = () => {

  const { message, setMessage } = useContext(MessageContext);

  const toastHandler = () => {
    setMessage({
      showMsg: null,
      title: null,
      msg: null,
    });
  }

  return (
    <ToastContainer position="top-right">
      <Toast onClose={toastHandler} show={message.showMsg} animation={true}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{message.title}</strong>
        </Toast.Header>
        <Toast.Body>{message.msg}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Toaster;

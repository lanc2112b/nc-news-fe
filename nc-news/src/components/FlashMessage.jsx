import { useContext } from "react";
import { MessageContext } from "../contexts/Message";
import { Alert } from "react-bootstrap";

const FlashMessage = () => {
  const { message, setMessage } = useContext(MessageContext);

  const alertHandler = () => {
    setMessage({
      msgType: null,
      showMsg: null,
      title: null,
      msg: null,
    });
  };
  
  return (
      <Alert
        className="mt-3"
        variant={message.variant}
        onClose={alertHandler}
        show={message.msgType === 'info' ? message.showMsg : false}
        dismissible
      >
        <Alert.Heading>{message.title}</Alert.Heading>
        <p>{message.msg}</p>
      </Alert>
  );
};

export default FlashMessage;

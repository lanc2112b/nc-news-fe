import { useContext } from "react";
import { MessageContext } from "../contexts/Message";
import { Alert } from "react-bootstrap";

const FlashSiteErrors = () => {
  const { message, setMessage } = useContext(MessageContext);

  const alertHandler = () => {
    setMessage({
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
      show={message.msgType === "error" ? message.showMsg : false}
    >
      <Alert.Heading>{message.title}</Alert.Heading>
      <p>{message.msg}</p>
    </Alert>
  );
};

export default FlashSiteErrors;

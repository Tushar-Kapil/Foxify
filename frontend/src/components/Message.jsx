import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Message.defaultProps = {
  varient: "info",
};

export default Message;

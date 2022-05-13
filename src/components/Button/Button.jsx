import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

const Button = ({ children, onClick }) => (
  <ButtonLoadMore type="button" onClick={onClick}>
    {children}
  </ButtonLoadMore>
);

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

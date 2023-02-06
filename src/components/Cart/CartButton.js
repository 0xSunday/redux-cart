import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { buttonAction } from "../../store/index";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const buttonHandler = () => {
    dispatch(buttonAction.buttonToggle());
  };
  const items = useSelector((store) => store.cart.item);
  return (
    <button className={classes.button} onClick={buttonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{items}</span>
    </button>
  );
};

export default CartButton;

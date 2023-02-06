import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/index";
import { useSelector } from "react-redux";

const CartItem = (props) => {
  const { title } = props.item;
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(cartAction.increment());
  };

  const decreaseHandler = () => {
    dispatch(cartAction.decrement());
  };

  const items = useSelector((store) => store.cart.item);
  const price = useSelector((store) => store.cart.price);
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price}{" "}
          <span className={classes.itemprice}>(${6}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{items}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

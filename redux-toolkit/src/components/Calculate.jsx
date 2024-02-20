import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, increment } from "../store/slices/calcSlice";

const Calculate = () => {
  const value = useSelector((state) => state.calculate.value);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{value}</h2>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(increase(15))}>Increase by 5</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
    </>
  );
};

export default Calculate;

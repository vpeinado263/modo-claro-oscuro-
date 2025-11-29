import { useReducer } from "react";
import { TYPES } from "../actions/actions";
import { initialState } from "../reducer/initial.State";
import { reducer } from "../reducer/reducer";

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sumar = () => dispatch({ type: TYPES.INCREMENTAR, payload: 1 });

  const resetear = () => dispatch({ type: TYPES.RESETEAR });

  const restar = () => dispatch({ type: TYPES.DECREMENTAR, payload: 1 });

  return (
    <div className="counter-container">
      <div className="counter-menu">
        <button onClick={sumar}>+</button>
        <button onClick={resetear}>0</button>
        <button onClick={restar}>-</button>
      </div>
      <h3>{state.contador}</h3>

      <style jsx>{`
        .counter-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .counter-menu {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Contador;

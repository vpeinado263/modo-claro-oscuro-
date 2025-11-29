import { useReducer } from "react";
import { TYPES } from "../actions/actions";
import { initialState } from "../reducer/initial.State";
import { reducer } from "../reducer/reducer";

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sumar = () => dispatch({ type: TYPES.INCREMENTAR, payload: 1 });
  const restar = () => dispatch({ type: TYPES.DECREMENTAR, payload: 1 });
  const resetear = () => dispatch({ type: TYPES.RESETEAR });

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
          gap: 1rem;
        }
        .counter-menu {
          display: flex;
          gap: 1rem;
        }
        button {
          background: #222;
          color: #fff;
          border: none;
          padding: 0.5rem 1rem;
          font-size: 1.5rem;
          cursor: pointer;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default Contador;

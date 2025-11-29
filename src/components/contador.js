import { useReducer, useContext } from "react";
import { TYPES } from "../actions/actions";
import { initialState } from "../reducer/initial.State";
import { reducer } from "../reducer/reducer";
import { ThemeContext } from "@/context/ThemeContextProvider";

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { theme } = useContext(ThemeContext); // <-- integración del tema

  const sumar = () => dispatch({ type: TYPES.INCREMENTAR, payload: 1 });
  const resetear = () => dispatch({ type: TYPES.RESETEAR });
  const restar = () => dispatch({ type: TYPES.DECREMENTAR, payload: 1 });

  return (
    <div className={`counter-container ${theme}`}>
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
          padding: 2rem;
          transition: all 0.3s ease-in-out;
          border-radius: 12px;
        }

        /* Estilos según tema */
        .light {
          background: #f5f5f5;
          color: #222;
        }

        .dark {
          background: #1e1e1e;
          color: #eee;
        }

        .counter-menu {
          display: flex;
          gap: 1rem;
        }

        button {
          width: 40px;
          height: 40px;
          font-size: 1.5rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .light button {
          background: #e0e0e0;
          color: #111;
        }

        .light button:hover {
          background: #d4d4d4;
        }

        .dark button {
          background: #333;
          color: #fff;
        }

        .dark button:hover {
          background: #444;
        }

        h3 {
          margin-top: 1rem;
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Contador;

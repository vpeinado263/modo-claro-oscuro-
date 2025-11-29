## 5ta-Tarea-REACT-NEXT.JS

Este proyecto es una práctica de React enfocada en aprender sobre el manejo de estado global, la creación de componentes reutilizables, y la implementación de un sistema de tema claro-oscuro utilizando **Context** y  **useReducer** . Durante el desarrollo, exploré conceptos fundamentales de React como el contexto, la recursividad, los eventos, y la reutilización de código.

## Contenido del Proyecto

1. **Componentes React** : Creación y organización de componentes como `Header`, `Footer`, `Home`, `Main`, entre otros.
2. **Sistema de Tema Claro-Oscuro** : Implementación de un sistema que permite alternar entre los temas claro y oscuro a través de un botón de selección de tema.
3. **Eventos en Formularios** : Uso de `e.target` para gestionar y obtener valores de los elementos interactivos.
4. **Manejo de Recursividad** : Identificación y solución de problemas de recursividad infinita en componentes React.
5. **Uso de `useReducer` y Acciones Globales** : Implementación de un contador utilizando `useReducer` con acciones como `INCREMENTAR`, `DECREMENTAR`, y la integración de payloads.

## Desafíos Encontrados

* **Recursividad Infinita en el Componente `Home`** :
  La función `Home` y el componente con el mismo nombre causaban una llamada infinita. Esto resultó en el error `Maximum call stack`.
* **Solución** : Renombrar o revisar la estructura de llamadas para evitar la recursividad accidental.
* **Gestión de Eventos en Formularios** :
  Al utilizar `e.target.value` para capturar valores de los inputs, comprendí la importancia de identificar correctamente el objetivo del evento.

## Conclusiones y Aprendizajes

1. **Context y Reducer para Estado Global** :
   Aprendí a gestionar el estado de toda la aplicación mediante `Context` y `useReducer`, y cómo globalizar el estado para manejar configuraciones complejas como el tema claro-oscuro.
2. **Uso de `e.target` en Formularios** :
   Aplicación práctica de `e.target` para capturar valores en formularios, mejorando la interacción con los elementos de la interfaz.
3. **Optimización y Reutilización de Código** :
   La globalización de las acciones y la separación del código en componentes reutilizables me ayudaron a optimizar el desarrollo de la aplicación.
4. **Estética con CSS** :
   Utilicé `fieldset` y otros elementos CSS para mejorar el diseño y la apariencia general de los componentes.

## Próximos Pasos

1. Profundizar en el uso de hooks avanzados y patrones de diseño en React.
2. Mejorar el sistema de temas claro-oscuro con transiciones más suaves.
3. Implementar un estado global más complejo y prácticas de gestión de estado eficientes.

in process : https://5ta-tarea-react-next-js.vercel.app/

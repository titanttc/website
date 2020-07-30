import React, { useReducer } from "react";

const myContext = React.createContext();

function reducer(state, action) {
  return {isEN: action.lan === 'en'}
}

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { isEN: 'en' });
  return (
      <myContext.Provider value={{ state, dispatch }}>
        {props.children}
      </myContext.Provider>
  );
};

export { reducer, myContext, ContextProvider };

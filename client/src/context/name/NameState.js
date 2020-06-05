import React, { useReducer } from "react";
import NameContext from "./nameContext";
import NameReducer from "./nameReducer";
import { GET_NAME } from "../types";

const NameState = (props) => {
  const initialState = {
    name: null,
  };
};

const [state, dispatch] = useReducer(NameReducer, initialState);

//Routes
// GET
// POST
// DELETE
// PUT

return <NameContext.Provider value={{}}>{props.children}</NameContext.Provider>;

export default NameState;
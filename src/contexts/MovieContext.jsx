import React, { createContext, useEffect, useReducer, useState } from "react";
import { getMovie } from "../api/RESTful";

export const Context = createContext();

const reducer = (state, action) => {
  let arr, delArr;
  switch (action.type) {
    case "Patch":
      arr = state.filter((i) => i.id !== action.payload.id);
      return [...arr, action.payload].sort(function (a, b) {
        return a.id - b.id;
      });

    case "UpdateArray":
      return action.payload;

    case "Delete":
      delArr = state.filter((i) => i.id !== action.payload);
      return [...delArr];

    default:
      return state;
  }
};

const MovieContext = ({ children }) => {
  const [head, setHead] = useState([]);

  const [state1, dispatch1] = useReducer(reducer, []);

  useEffect(() => {
    const res = async () => {
      const res = await getMovie();
      setHead(Object.keys(res.data[0]));
      dispatch1({ type: "UpdateArray", payload: res.data });
    };
    res();
  }, []);
  return (
    <Context.Provider value={{ state1, dispatch1, head }}>
      {children}
    </Context.Provider>
  );
};

export default MovieContext;

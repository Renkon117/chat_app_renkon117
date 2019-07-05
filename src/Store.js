import React from "react";

export const CTX = React.createContext();

/*

mag{
    from:"user"
    msg:"hi"
    topix:"general"
}

state{
    topic1:[
        {msg}, {msg}, {msg}
    ]
    topic2:[

    ]
}

*/

const initState = {
  general: [
    { from: "renkon", msg: "hello" },
    { from: "renk", msg: "hello" },
    { from: "rensuke", msg: "hello" }
  ],
  topic2: [
    { from: "renkon", msg: "hello" },
    { from: "renkon", msg: "hello" },
    { from: "renkon", msg: "hello" }
  ]
};
function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [topic]: [
          ...state[topic],
          {
            from,
            msg
          }
        ]
      };
    default: {
      return state;
    }
  }
}

export default function Store(props) {
  const reducerHook = React.useReducer(reducer, initState);
  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}

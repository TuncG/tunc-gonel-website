import * as React from "react";

var HeaderContext = React.createContext("Home");

function setHeaderContext(name) {
  return (HeaderContext = React.createContext(name));
}
var contextFunctions = { HeaderContext, setHeaderContext };
export var contextFunctions;

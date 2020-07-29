import React from "react";
import Output from "./helpScreen";

export default function HelpScreenLevel1({}) {
  const movement = ["h: left", "j: down", "k: up", "l: right", "q: quit game"];

  return Output(movement);
}

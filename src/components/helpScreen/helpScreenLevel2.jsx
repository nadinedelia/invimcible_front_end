import Output from "./helpScreen"

export default function HelpScreenLevel2({ }) {
  const movement = [
    "h: left",
    "j: down",
    "k: up",
    "l: right",
    "q: quit game",
    "w: beginning of next word",
    "b: beginning of previous word",
    "Clear Input to Continue"
  ]

  return (
    Output(movement)
  )
}
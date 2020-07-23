import Output from "./helpScreen"

export default function HelpScreenLevel2({ }) {
  const movement = [
    "h: left",
    "j: down",
    "k: up",
    "l: right",
    "w: beginning of next word",
    "b: beginning of previous word",
  ]

  return (
    Output(movement)
  )
}
import Output from "./helpScreen"

export default function HelpScreenLevel1() {
  const movement = [
    "h: left",
    "j: down",
    "k: up",
    "l: right",
  ]

  return (
    Output(movement)
  )
}

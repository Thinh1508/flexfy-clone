import "./buttonStyles.scss"

export const ButtonCustom = (props) => {
  return (
    <button className={`btn ${props.className || ""}`}>{props.children}</button>
  )
}

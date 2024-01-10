import React from "react"
import "./styles.scss"
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md"

export const CustomNavigation = ({ direction, onClick, disabled }) => {
  return (
    <div
      className={`custom-${direction} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    >
      {direction === "next" ? (
        <MdOutlineNavigateNext size={35} />
      ) : (
        <MdOutlineNavigateBefore size={35} />
      )}
    </div>
  )
}

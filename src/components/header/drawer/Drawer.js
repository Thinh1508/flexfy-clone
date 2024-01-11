import React from "react"
import "./styles.scss"
import { BiSearchAlt } from "react-icons/bi"

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div className={`drawer ${isOpen ? "drawer--open" : ""}`}>
      <div className="drawer__header">
        <span className="btn-close" onClick={onClose}>
          &times;
        </span>
      </div>
      <div className="drawer__content">
        <a href="/" className="menu__item menu__item--active">
          <p>NEW</p>
        </a>
        <a href="/" className="menu__item">
          <p>BEST SELLERS</p>
        </a>
        <a href="/" className="menu__item">
          <p>SHIRT</p>
        </a>
        <a href="/" className="menu__item">
          <p>JEANS</p>
        </a>
        <a href="/" className="menu__item">
          <p>JACKET</p>
        </a>
        <a href="/" className="menu__item">
          <p>CLOTHING & ACCESSORIES</p>
        </a>
        <a href="/" className="menu__item">
          <p>COLLECTION</p>
        </a>
        <div className="banner__search">
          <input
            type="text"
            placeholder="search"
            className="banner__search-input"
          />
          <BiSearchAlt className="icon-search" size={32} />
        </div>
      </div>
    </div>
  )
}

export default Drawer

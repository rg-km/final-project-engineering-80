import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import './Modal.css'
import { IoMdClose } from "react-icons/io";

function Modal({ children, title, closebutton }) {
  const [isOpen, setIsOpen] = useState(false);
  Modal.handleClickOutside = () => setIsOpen(false);

  return isOpen ? (
    <div className="modal-box">
      {title || closebutton ? (
        <div className="header">
          {title ? <h4>{title}</h4> : ''}
          {closebutton ? <span onClick={() => setIsOpen(false)} className="close-btn"><IoMdClose size="20px" /></span> : ''}
        </div>
      ) : ''}
      {children}
    </div>
  ) : ''
}

const clickOutsideConfig = {
  handleClickOutside: () => Modal.handleClickOutside
}

export default onClickOutside(Modal, clickOutsideConfig);

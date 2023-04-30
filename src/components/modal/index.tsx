import React from "react";
import './index.scss';

interface ModalProps {
  show?: boolean;
  title: string;
  showClose?: boolean;
  onClose?: () => void;
  closeLabel?: string;
  showSave?: boolean;
  onSave?: () => void;
  saveLabel?: string;
  children?: string | JSX.Element | JSX.Element[];
}

function Modal({
                 show = false,
                 title,
                 showClose = false,
                 onClose,
                 closeLabel = "Close",
                 showSave = false,
                 saveLabel = "Save",
                 onSave,
                 children
               }: ModalProps) {
  const handleClose = () => {
    onClose && onClose();
  }
  const handleSave = () => {
    onSave && onSave();
  }
  return <div className={"modal fade" + (show ? " show" : "")} style={{display: show ? "block" : "none"}}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}/>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          {showClose &&
            <button type="button" className="btn btn-primary" onClick={handleClose}>{closeLabel}</button>
          }
          {showSave &&
            <button type="button" className="btn btn-success" onClick={handleSave}>{saveLabel}</button>
          }
        </div>
      </div>
    </div>
  </div>
}

export default Modal;

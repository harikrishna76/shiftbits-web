import React from 'react';
import MaterialModal from '@material-ui/core/Modal';
import s from './Modal.module.scss';

export default function Modal(props) {
  const {
    open = false,
    onClose = () => {},
    children = null,
    showCloseButton = true,
    header = null,
    bodyClassName = null,
  } = props;

  return (
    <MaterialModal className={s.root} open={open} onClose={onClose}>
      <div className={`${s.body} ${bodyClassName}`}>
        {showCloseButton && (
          <div className={s.closeBtn} onClick={onClose} role="presentation">
            <img src="/images/mdi_close.png" alt="x" />
          </div>
        )}
        {header && <div className={s.header}>{header}</div>}
        {children}
      </div>
    </MaterialModal>
  );
}

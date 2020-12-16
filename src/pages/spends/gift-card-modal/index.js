import React, { useState, useEffect } from 'react';
import Modal from 'components/modal';
import s from './GiftCardModal.module.scss';

export default function GiftCardModal(props) {
  const { card = {}, open, onClose } = props;

  const [nCards, setNumberOfCards] = useState(1);

  const handleNumberOfCards = (mode) => {
    if (nCards > 1 && mode === 'decrement') {
      setNumberOfCards(nCards - 1);
    } else if (mode === 'increment') {
      setNumberOfCards(nCards + 1);
    }
  };

  useEffect(() => {
    setNumberOfCards(1);
  }, [card.key]);

  return (
    <div>
      <Modal
        open={open}
        header={card.title ? `${card.title} gift card` : 'Gift Card'}
        bodyClassName={s.modalBody}
        onClose={onClose}
      >
        <div className={s.modalContent}>
          <div className={`${s.firstSection} spaceBetween`}>
            <img src={card.logo} className={s.logo} alt="" />
            <div className="flex">
              <div
                className={`${s.actionBtn} center pointer`}
                onClick={() => handleNumberOfCards('decrement')}
                role="presentation"
              >
                <img src="/images/mdi_remove.png" alt="-" />
              </div>
              <div className={`${s.nCards} center`}>{nCards}</div>
              <div
                className={`${s.actionBtn} center pointer`}
                onClick={() => handleNumberOfCards('increment')}
                role="presentation"
              >
                <img src="/images/mdi_add.png" alt="+" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

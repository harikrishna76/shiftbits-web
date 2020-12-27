import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import { AllGiftCards } from 'constants/giftCards';
import GiftCardModal from './gift-card-modal';
import s from './Spends.module.scss';

export default function Spends() {
  const [searchValue, setSearchValue] = useState('');
  const [showGiftCardModal, setShowGiftCardModal] = useState(false);
  const [activeCard, setActiveCard] = useState({});

  const renderHeader = () => {
    return (
      <div className={`${s.headerSection} spaceBetween`}>
        <div className={s.title}>
          {searchValue
            ? `Search results for “${searchValue}”`
            : 'All gift cards'}
        </div>
        <div className={`${s.searchInputWrapper} center`}>
          <input
            className={s.searchInput}
            type="text"
            placeholder="Search for gift cards"
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <img src="/images/icons/mdi_search.svg" alt="" />
        </div>
      </div>
    );
  };

  const displayAllGiftCards = () => {
    let cards = Object.values(AllGiftCards);
    if (searchValue) {
      cards = cards.filter((card) => {
        return card.key.search(new RegExp(searchValue, 'i')) !== -1;
      });
    }
    return (
      <div>
        <div className="flexWrap spaceBetween">
          {cards.map((giftCard) => (
            <div
              className={`${s.cardWrapper}`}
              onClick={() => {
                setShowGiftCardModal(true);
                setActiveCard(giftCard);
              }}
              role="presentation"
            >
              <div className={`${s.card} center`}>
                <img src={giftCard.logo} alt="" />
              </div>
              <div className={s.cardTitle}>{giftCard.title}</div>
            </div>
          ))}
          {/* avoid problems with spacebetween 
              when number of cards are less than max can fit in row */}
          <div className={`${s.cardWrapper} visibilityHidden`} />
          <div className={`${s.cardWrapper} visibilityHidden`} />
          <div className={`${s.cardWrapper} visibilityHidden`} />
        </div>
      </div>
    );
  };

  return (
    <ProductLayout activeNavigation="spends">
      <Grid container className="pagePadding">
        <Grid item xs={12} md={11}>
          {renderHeader()}
          {displayAllGiftCards()}
        </Grid>
        <GiftCardModal
          open={showGiftCardModal}
          card={activeCard}
          onClose={() => {
            setShowGiftCardModal(false);
          }}
        />
      </Grid>
    </ProductLayout>
  );
}

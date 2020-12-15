import React, { useState } from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import ProductLayout from 'components/product-layout';
import { AllGiftCards, FeaturedCards } from './constants';
import s from './Spends.module.scss';

export default function Spends() {
  const [searchValue, setSearchValue] = useState('');

  const renderHeader = () => {
    return (
      <div className={`${s.headerSection} spaceBetween`}>
        <div className={s.title}>
          {searchValue
            ? `Search results for “${searchValue}”`
            : 'All gift cards'}
        </div>
        <div>
          <input
            className={s.searchInput}
            type="text"
            placeholder="Search for gift cards"
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
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
            <div className={`${s.card} center`}>
              <img src={giftCard.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <ProductLayout activeNavigation="spends">
      <Grid container style={{ padding: '2rem 2rem 1rem' }}>
        <Grid item xs={12} md={11}>
          {renderHeader()}
          {displayAllGiftCards()}
        </Grid>
      </Grid>
    </ProductLayout>
  );
}

import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import s from './Button.module.scss';

export default function Button(props) {
  const {
    onClick = () => {},
    variant,
    loading,
    title,
    icon,
    disabled,
    containerClassName,
    className,
    loaderClassName,
    titleClassName,
    iconClassName,
  } = props;

  const handleOnPress = () => {
    if (!loading && !disabled) {
      onClick();
    }
  };

  if (variant === 'text') {
    return (
      <div
        onClick={handleOnPress}
        className={disabled && s.disabled}
        role="presentation"
      >
        {props.children}
      </div>
    );
  }

  return (
    <div className={`${s.container} ${containerClassName}`}>
      <div
        onClick={handleOnPress}
        className={disabled && s.disabled}
        role="presentation"
      >
        <MaterialButton
          className={`${s.button} ${className} ${disabled && s.disabled}`}
          style={{
            background: variant === 'primary' ? '#21bf73' : '#e9f9f1',
          }}
        >
          {loading && (
            <div className={`${s.loading} ${loaderClassName}`} size="small" />
          )}
          {!loading && !!title && (
            <div
              className={`${s.title} ${titleClassName}`}
              style={{
                color: variant === 'primary' ? '#ffffff' : '#21bf73',
              }}
            >
              {title}
            </div>
          )}
          {!loading && icon && (
            <div className={`${s.iconContainer} ${iconClassName}`}>{icon}</div>
          )}
        </MaterialButton>
      </div>
    </div>
  );
}

import React from 'react'
import styled from 'styled-components'

import Link from './Link'
import * as variable from '../variables'
import cx from 'classnames'

const Button = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  height: 48px;
  padding: 0px 24px;
  background-color: #f8f8f9;
  border: 2px solid ${variable.BRAND_PRIMARY};
  border-radius: 5em;
  color: ${variable.BRAND_PRIMARY};
  text-align: center;
  transition: all 0.35s;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: ${variable.BRAND_PRIMARY};
    color: #ffffff;
  }
  &:disabled {
    background-color: #f8f8f9;
    border-color: #999999;
    color: #999999;
    cursor: not-allowed;
  }
  &.fullWidth {
    width: 100%;
  }
  &.small {
    padding: 0px 16px;
    height: 32px;
    font-size: 14px;
  }
  &.large {
    padding: 0px 32px;
    height: 56px;
    font-size: 18px;
  }
  &.primary {
    background-color: ${variable.BRAND_PRIMARY};
    border-color: ${variable.BRAND_PRIMARY};
    color: #ffffff;
  }
  &.primary {
    &:hover,
    &:focus,
    &:active {
    background-color: ${variable.BRAND_PRIMARY};
    border-color: ${variable.BRAND_PRIMARY};
    color: #ffffff;
    }
  }
  &.primary:disabled {
    background-color: ${variable.BRAND_PRIMARY};
    border-color: ${variable.BRAND_PRIMARY};
    color: ${variable.BRAND_PRIMARY};
    cursor: not-allowed;
  }
  &.alternative {
    background-color: ${variable.BRAND_HILIGHT};
    border-color: ${variable.BRAND_HILIGHT};
    color: #ffffff;
  }
  &.alternative:hover,
  &.alternative:active,
  &.alternative:focus
   {
    background-color: ${variable.BRAND_HILIGHT};
    border-color: ${variable.BRAND_HILIGHT};
    color: #ffffff;
  }
  &.alternative.disabled,
  &.alternative:disabled {
    background-color: ${variable.BRAND_HILIGHT};
    border-color: ${variable.BRAND_HILIGHT};
    color: ${variable.BRAND_HILIGHT};
    cursor: not-allowed;
  }

  &.marginBottom {
    margin-bottom: 16px;
  }
  &.marginBottom40 {
    margin-bottom: 40px;
  }
  &.white {
    border-color: #ffffff;
    color: #ffffff;
    background-color: transparent;
  }
  &.white:hover,
  &.white:active,
  &.white:focus {
    background-color: #ffffff;
    color: #16276c;
  }
  &.transparent {
    background-color: none;
  }
  &.transparentWhiteOutline {
    background-color: transparent;
    border-color: #ffffff;
    color: #ffffff;
  }
  &.transparentWhiteOutline:hover,
  &.transparentWhiteOutline:active,
  &.transparentWhiteOutline:focus {
    background-color: #ffffff;
    border-color: #ffffff;
    color: #141e64;
  }
`
export default ({
  fullWidth,
  small,
  large,
  primary,
  alternative,
  disabled,
  marginBottom,
  white,
  children,
  transparent,
  transparentWhiteOutline,
  ...props
}) => (
  <Button
    className={cx({
      fullWidth,
      small,
      large,
      primary,
      alternative,
      disabled,
      marginBottom,
      white,
      transparent,
      transparentWhiteOutline,
    })}
    {...props}
  >
    {children}
  </Button>
)

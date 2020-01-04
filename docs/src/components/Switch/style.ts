/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import styled, { css } from 'styled-components';

const TabsStyle = styled.div`
  ${({ theme }) => css`
    display: block;
    background-color: ${theme.tabsetBackgroundColor};
    border-radius: ${theme.tabsetBorderRadius};
    box-shadow: ${theme.tabsetShadow};
    .tabs {
      border-bottom: ${theme.tabsetDividerWidth} ${theme.tabsetDividerStyle} ${theme.tabsetDividerColor};
      display: flex;
      flex-direction: row;
      list-style-type: none;
      margin: 0;
      justify-content: space-around;

      .tab {
        cursor: pointer;
        margin-bottom: -1px;
        text-align: center;
        position: relative;
        &.active a::before {
          display: block;
        }
        a {
          padding: ${theme.tabsPadding};
          color: ${theme.tabsFg};
          display: flex;
          align-items: center;
          position: relative;
          text-decoration: none;
          &:hover {
            color: ${theme.tabsFgHeading};
          }

          &::before {
            display: none;
            position: absolute;
            content: '';
            width: 100%;
            height: 6px;
            border-radius: 3px;
            bottom: -2px;
            left: 0;
            background: ${theme.tabsSelected};
            background-image: linear-gradient(to right, ${theme.tabsSelectedSecondColor}, ${theme.tabsSelected});
          }
          i {
            font-size: 1.5rem;
          }

          i + span {
            ${({ theme }) => css`
              ${theme.dir === 'rtl' ? 'margin-right: 0.5rem;' : 'margin-left: 0.5rem;'}
            `}
          }
        }

        &.active {
          background: ${theme.tabsActiveBg};

          a {
            font-weight: ${theme.tabsActiveFontWeight};
            color: ${theme.tabsFgHeading};
          }
        }
      }
    }
  `}
`;
export default TabsStyle;
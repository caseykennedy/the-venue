// Sidebar Styles:

// Imports
// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { lighten, darken } from 'polished'

// Constants
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
// ___________________________________________________________________

// export const AccordionContainer = styled.div<{ chevronColor: string }>`

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;

  legend {
    color: white;
    padding-bottom: calc(${theme.root.space} * 1);
    width: 100%;
  }

  fieldset {
    border: none;
    margin: 0 auto;
    padding: 0;
    width: 100%;

    label {
      display: none;
    }

    input,
    textarea,
    select {
      background: ${theme.colors.background};
      /* border: 1px solid rgb(250, 250, 250, 0.2); */
      border: 1px solid transparent;
      color: white;
      margin: 0;
      padding: calc(${theme.root.space} / 6);
      width: 100%;

      &:focus {
        border: 1px solid ${theme.colors.accent};
        outline: none;
        /* box-shadow: 0 0 15px 3px white;
        box-shadow: 0 0 0 3px -moz-mac-focusring; */
      }

      &::placeholder {
        color: ${lighten(0.3, `${theme.colors.secondary}`)};
      }
    }

    select {
      appearance: none;
      box-sizing: border-box;
      border: none;
      border-radius: 999px;
      cursor: pointer;
      display: block;
      margin: 0;
      width: 100%;
      max-width: 100%;
      transition: ${theme.transition};

      option:first {
        color: white;
      }

      &::-ms-expand {
        display: none;
      }

      &:focus {
        box-shadow: 0 0 20px 3px white;
        box-shadow: 0 0 0 3px -moz-mac-focusring;
        outline: none;
      }

      option {
        font-weight: normal;
      }
    }

    .form-group {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      padding-bottom: calc(${theme.root.space} / 6);

      &__box {
        padding-bottom: calc(${theme.root.space} / 6);

        &:last-child {
          padding-bottom: 0;
          padding-left: 0;
        }

        @media (min-width: calc(${theme.breakpoints[1]} + 1px)) {
          padding-bottom: 0;
        }

        &--select {
          position: relative;
          display: flex;
          align-items: center;

          .carat {
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 1px solid white;
            line-height: 1.6;
            padding-left: calc(${theme.root.space} / 6);
            position: absolute;
            right: calc(${theme.root.space} / 4);

            .ico-carat {
              position: relative;
              transform: rotate(90deg) scale(0.6);
              transform-origin: center center;

              polygon,
              svg,
              g {
                fill: white;
              }
            }
          }
        }
      }

      .form-heading {
        display: block;
        font-weight: 500;
        padding-bottom: calc(${theme.root.space} / 3.5);
        text-align: left;
        width: 100%;
      }
    }

    .footnote {
      padding-top: calc(${theme.root.space} / 2);
      padding-bottom: 0;

      p {
        color: white;
        padding: 0 5%;
      }
    }
  }

  .btn {
    transition: ${theme.transition};
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .errors {
    font-size: 0.9rem;
    font-weight: 500;
    color: red;
    padding-top: calc(${theme.root.space} / 6);
    padding-bottom: 0;
    margin: 0;
    transition: ${theme.transition};
  }

  .react-datepicker-wrapper {
    width: 100%;
  }
`

// ___________________________________________________________________
// End Styles

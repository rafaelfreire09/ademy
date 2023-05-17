import styled, { css } from 'styled-components';
import mainColors from 'styles/mainColors';

type Props = {
  width: string;
  height: string;
  colorType: ButtonSize;
};

const colorsType = {
  default: css<Props>`
    background-color: ${mainColors.white.normal};
    border: 1px solid ${mainColors.others.borderDark};

    a {
      color: ${mainColors.black.normal};
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  `,
  red: css<Props>`
    background-color: ${mainColors.error.normal};
    border: 1px solid ${mainColors.error.normal};

    a {
      color: ${mainColors.white.normal};
    }

    &:hover {
      background-color: rgba(206, 44, 44, 0.83);
    }
  `,
};

export type ButtonSize = keyof typeof colorsType;

export const Wrapper = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  font-size: 15px;
  font-weight: 600;
  text-transform: capitalize;

  a {
    text-decoration: none;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  ${({ colorType }) => colorsType[colorType]};
`;

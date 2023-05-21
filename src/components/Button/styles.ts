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

    span {
      color: ${mainColors.black.normal};
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  `,
  red: css<Props>`
    background-color: ${mainColors.error.normal};
    border: 1px solid ${mainColors.error.normal};

    span {
      color: ${mainColors.white.normal};
    }

    &:hover {
      background-color: rgba(206, 44, 44, 0.83);
    }
  `,
  green: css<Props>`
    background-color: ${mainColors.success.normal};
    border: 1px solid ${mainColors.success.normal};

    span {
      color: ${mainColors.white.normal};
    }

    &:hover {
      background-color: rgba(34, 197, 94, 0.83);
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

  span {
    text-decoration: none;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  ${({ colorType }) => colorsType[colorType]};

  img {
    padding: 5px;
  }

  img:hover {
    opacity: 50%;
  }
`;

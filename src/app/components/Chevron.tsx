import palette from 'app/theme/palette';
import styled, { css } from 'styled-components';

type Props = {
  direction?: 'up' | 'down' | 'right' | 'left';
  size?: number;
};

const Up = (CSSProps: Props) => css`
  margin-top: ${(props) => (CSSProps.size ? CSSProps.size : '12px')};
`;

const Down = (CSSProps: Props) => css`
  margin-bottom: ${(props) => (CSSProps.size ? CSSProps.size / 2 : '6px')};
  rotate: -225deg;
`;

const Right = (CSSProps: Props) => css`
  rotate: 45deg;
  margin-right: ${(props) => (CSSProps.size ? CSSProps.size / 2 : '6px')};
`;

const Left = (CSSProps: Props) => css`
  rotate: -135deg;
  margin-left: ${(props) => (CSSProps.size ? CSSProps.size / 2 : '6px')};
`;

export const Chevron = styled.div<Props>`
  height: ${(props) => (props.size ? props.size : '12px')};
  width: ${(props) => (props.size ? props.size : '12px')};
  rotate: -45deg;
  border-top: 2px solid ${palette.primary.main};
  border-right: 2px solid ${palette.primary.main};
  transition: rotate 0.2s;

  ${(props) => props.direction === 'up' && Up(props)}
  ${(props) => props.direction === 'down' && Down(props)}
  ${(props) => props.direction === 'left' && Left(props)}
  ${(props) => props.direction === 'right' && Right(props)}
`;

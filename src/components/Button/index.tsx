import Link from 'next/link';
import * as S from './styles';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  label?: string;
  href?: string;
  width?: string;
  height?: string;
  submit?: boolean;
  colorType?: S.ButtonSize;
  onClick?: VoidFunction;
};

export default function Button({
  width = '70',
  height = '40',
  submit = false,
  colorType = 'default',
  label,
  href,
  onClick,
  ...props
}: ButtonProps) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <S.Wrapper width={width} height={height} onClick={handleClick} colorType={colorType}>
      {!submit ? <Link href={href || '/'}>{label}</Link> : label}
    </S.Wrapper>
  );
}

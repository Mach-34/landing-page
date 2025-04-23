import { CSSProperties, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { Mach34Theme, TypographyVariant } from 'theme';

const useStyles = createUseStyles((theme: Mach34Theme) => ({
  text: (props: TypographyProps) => ({
    ...theme.typography[props.paragraph ? 'paragraph' : 'ui'][props.variant],
    cursor: props.onClick ? 'pointer' : 'inherit',
  }),
}));

type TypographyProps = {
  children: ReactNode;
  onClick?: () => void;
  paragraph?: boolean;
  style?: CSSProperties;
  variant: TypographyVariant;
  component?: keyof JSX.IntrinsicElements; // Allow specifying HTML elements
};

export default function Typography({
  children,
  onClick,
  paragraph = false,
  style,
  variant,
  component: Component = 'div', // Default to 'div'
}: TypographyProps): JSX.Element {
  const styles = useStyles({ children, onClick, paragraph, variant });
  return (
    <Component className={styles.text} onClick={onClick} style={{ ...style }}>
      {children}
    </Component>
  );
}

export function Span({
  children,
  onClick,
  paragraph = false,
  style,
  variant,
}: TypographyProps): JSX.Element {
  const styles = useStyles({ children, onClick, paragraph, variant });
  return (
    <span className={styles.text} onClick={onClick} style={{ ...style }}>
      {children}
    </span>
  );
}

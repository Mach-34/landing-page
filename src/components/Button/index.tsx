import { CSSProperties } from 'react';
import { createUseStyles } from 'react-jss';
import { Mach34Theme } from 'theme';

const useStyles = createUseStyles((theme: Mach34Theme) => ({
  container: (props: ButtonStyleProps) => ({
    ...theme.typography.ui.text5,
    backgroundColor: props.disabled ? '#BCBCBC' : 'white',
    border: 'none',
    borderRadius: '4px',
    color: props.disabled ? 'black' : '#10995A',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    padding: '12px 15px',
  }),
}));

type ButtonProps = {
  disabled?: boolean;
  onChange: () => void;
  style?: CSSProperties;
  text: string;
};

type ButtonStyleProps = Pick<ButtonProps, 'disabled'>;

export default function Button({
  disabled,
  onChange,
  style,
  text,
}: ButtonProps): JSX.Element {
  const styles = useStyles({ disabled });
  return (
    <button
      className={styles.container}
      onClick={onChange}
      style={{ ...style }}
    >
      {text}
    </button>
  );
}

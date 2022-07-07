import { CSSProperties } from 'react';
import { createUseStyles } from 'react-jss';
import { Mach34Theme } from 'theme';

const useStyles = createUseStyles((theme: Mach34Theme) => ({
  container: {
    ...theme.typography.ui.text4,
    backgroundColor: 'white',
    border: '2px solid black',
    borderRadius: '4px',
    color: 'black',
    cursor: 'pointer',
    padding: '8px 12px',
  },
}));

type ButtonProps = {
  onChange: () => void;
  style?: CSSProperties;
  text: string;
};

export default function Button({
  onChange,
  style,
  text,
}: ButtonProps): JSX.Element {
  const styles = useStyles();
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

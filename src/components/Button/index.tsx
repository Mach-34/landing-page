import { CSSProperties } from 'react';
import { createUseStyles } from 'react-jss';
import { Mach34Theme } from 'theme';

const useStyles = createUseStyles((theme: Mach34Theme) => ({
  container: {
    ...theme.typography.ui.text5,
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '4px',
    color: '#10995A',
    cursor: 'pointer',
    padding: '12px 15px',
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

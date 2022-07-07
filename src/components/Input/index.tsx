import { CSSProperties } from 'react';
import { createUseStyles } from 'react-jss';
import { Mach34Theme } from 'theme';

const useStyles = createUseStyles((theme: Mach34Theme) => ({
  container: {
    textAlign: 'left',
  },
  input: {
    ...theme.typography.ui.body2,
    border: '1px solid transparent',
    borderRadius: '4px',
    padding: '8px 4px',
    outline: 'transparent',
    transition: '.3s border',
    width: '100%',
    '&:focus': {
      border: '1px solid #016DB3',
    },
    '&::placeholder': {},
  },
  label: {
    ...theme.typography.ui.text6,
    color: 'white',
    marginBottom: '8px',
  },
}));

type InputProps = {
  id: string;
  label: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  rows?: number;
  style?: CSSProperties;
  textarea?: boolean;
  value: string;
};

export default function Input({
  id,
  label,
  onChange,
  placeholder,
  rows,
  style,
  textarea,
  value,
}: InputProps): JSX.Element {
  const styles = useStyles();
  return (
    <div className={styles.container} style={{ ...style }}>
      <div>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      </div>
      {textarea ? (
        <textarea
          className={styles.input}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <input
          className={styles.input}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      )}
    </div>
  );
}

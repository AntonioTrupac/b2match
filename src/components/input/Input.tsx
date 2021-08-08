import { ChangeEvent, CSSProperties, FC } from 'react';
import { StyledInput } from './input-styled';

type InputProps = {
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  className?: string;
  style?: CSSProperties;
  value?: string;
};

export const Input: FC<InputProps> = (props) => {
  return (
    <StyledInput
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      className={props.className}
      style={props.style}
    />
  );
};

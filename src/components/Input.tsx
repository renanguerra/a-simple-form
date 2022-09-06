import styled from "styled-components";
import Cleave from "cleave.js/react";
import { CleaveOptions } from "cleave.js/options";

const Input = ({
  placeholder,
  name,
  error,
  value,
  onChange,
  maxLength,
  type,
  mask,
  sucess,
  label,
  text,
  disabled,
  onBlur,
  ...props
}: {
  placeholder?: string;
  name: string;
  error: string | undefined;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  type?: string;
  mask?: CleaveOptions;
  sucess?: boolean;
  label?: string;
  text?: string;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <Label>{label}</Label>
      <InputContainer disabled={disabled}>
        <InputLabeled
          placeholder={placeholder ?? ""}
          name={name}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          type={type}
          options={
            mask ? (mask as CleaveOptions) : { blocks: [9999], delimiter: "" }
          }
          disabled={disabled}
          onBlur={onBlur}
          {...props}
        />
      </InputContainer>
      {error ? <FormFeedback>{error}</FormFeedback> : <></>}
    </div>
  );
};

export default Input;

const InputLabeled = styled(Cleave)`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  margin-top: 5px;
  font-size: 14px;


`;

const InputContainer = styled.div<{
  disabled?: boolean;
}>`
  width: 250px;
  height: 40px;
  margin-bottom: 16px;
  background: #f3f3f3;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: #4d4d4d;
  position: relative;
  border-bottom: 2px solid #f3f3f3;
`;

const FormFeedback = styled.div`
  width: 100%;
  color: red;
  text-overflow: ellipsis;
  font-style: normal;
  font-size: 12px;
  letter-spacing: 0.02em;
  margin-top: -8px;
  margin-bottom: 12px;
  margin-left: 5px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 5px;
`;

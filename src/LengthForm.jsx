/** @jsxImportSource @emotion/react */
import { ErrorMessage } from "@hookform/error-message";
import { css } from "@emotion/react";

function LengthForm({ id, name, register, errors, placeholder }) {
  return (
    <div css={formGroup}>
      <label css={[colMd4, controlLabel]}>
        <span css={notice}>*</span>
        {placeholder}
      </label>
      <div css={colMd4}>
        <input
          css={inputText}
          id={id}
          name={name}
          ref={register({
            required: "入力してください。",
            pattern: {
              value: /^[1-9]$|^[1-9][0-9]$/,
              message: "1から99の整数を半角数字で入力してください。",
            },
          })}
          placeholder="整数2桁までの数字"
          size="60"
          type="text"
        />
        <span css={error}>
          <ErrorMessage errors={errors} name={name} />
        </span>
      </div>
    </div>
  );
}

const formGroup = css`
  display: flex;
  align-items: baseline;
  padding: 20px 20px;
  margin-bottom: 0;
  border-bottom: 1px solid #f7f7f7;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 10px 20px;
    border-bottom: none;
  }
`;

const colMd4 = css`
  @media (min-width: 1200px) {
    width: calc(100% / 3);
  }
`;

const controlLabel = css`
  color: #7f878c;
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: right;

  @media (max-width: 991px) {
    text-align: left;
  }
  @media (min-width: 992px) {
    margin-right: 12px;
  }
`;

const notice = css`
  color: #f64e4e;
`;

const inputText = css`
  display: block;
  width: 100%;
  height: 54px;
  padding: 8px 12px;
  font-size: 16px;
  line-height: 1.42857;
  border: 1px solid #ddd;
  border-radius: 3px;
  transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  box-sizing: border-box;

  &:focus,
  &:hover,
  &:active {
    outline: none;
    background: #fafafa;
  }
`;

const error = css`
  font-size: 93%;
  color: #b70000;
  display: block;
`;

export default LengthForm;

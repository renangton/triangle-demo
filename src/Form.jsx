/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";
import { css } from "@emotion/react";
import LengthForm from "./LengthForm";

function Form() {
  const { register, handleSubmit, errors } = useForm();
  const queryParams = new URLSearchParams(window.location.search);
  const showKindOfTriangle = (length_a, length_b, length_c) => {
    if (queryParams.get("flawless") === "true") {
      if (length_a + length_b <= length_c || length_a + length_c <= length_b || length_b + length_c <= length_a) {
        return "三角形は成立しません";
      }
    }
    if (length_a === length_b && length_b === length_c) {
      return "正三角形";
    } else if (length_a === length_b || length_b === length_c || length_c === length_a) {
      return "二等辺三角形";
    } else {
      return "不等辺三角形";
    }
  };
  const onSubmit = (data) => alert(showKindOfTriangle(Number(data.length_a), Number(data.length_b), Number(data.length_c)));

  return (
    <div>
      <section id="form">
        <div css={container}>
          <div css={panelPrimary}>
            <div css={panelPrimaryHeading}>
              <h4>三角形問題フォーム</h4>
            </div>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
              <LengthForm id="length_a" name="length_a" register={register} errors={errors} placeholder="A辺の長さ" />
              <LengthForm id="length_b" name="length_b" register={register} errors={errors} placeholder="B辺の長さ" />
              <LengthForm id="length_c" name="length_c" register={register} errors={errors} placeholder="C辺の長さ" />
              <div css={panelFooter}>
                <input css={inputSubmit} type="submit" name="submitConfirm" value="計算する" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

const container = css`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 400px) {
    width: 100%;
  }
  @media (min-width: 401px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 750px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

const panelPrimary = css`
  border: 1px solid #eee;
  border-top: 3px solid #0f1b21;
  color: #260e0a;
`;

const panelPrimaryHeading = css`
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
`;

const panelFooter = css`
  padding: 20px;
  border-top: 1px solid #eee;
  text-align: center;
`;

const inputSubmit = css`
  display: inline-block;
  margin-bottom: 0;
  padding: 15px 35px;
  color: #fff;
  background-color: #1f3744;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  line-height: 1.42857;
  border: none;
  border-radius: 3px;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default Form;

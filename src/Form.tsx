import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type FormData = {
  length_a: Number;
  length_b: Number;
  length_c: Number;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const showKindOfTriangle = (length_a: number, length_b: number, length_c: number) => {
    if (length_a === length_b && length_b === length_c) {
      return "正三角形";
    } else if (length_a === length_b || length_b === length_c || length_c === length_a) {
      return "二等辺三角形";
    } else {
      return "不等辺三角形";
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data.length_a);
    alert(showKindOfTriangle(Number(data.length_a), Number(data.length_b), Number(data.length_c)));
  };

  const lengthInput = (name: any) => ({
    id: name,
    ...register(name, {
      required: "入力してください。",
      pattern: {
        value: /^[1-9]$|^[1-9][0-9]$/,
        message: "1から99の整数を半角数字で入力してください。",
      },
    }),
    placeholder: "整数2桁までの数字",
    type: "text",
  });

  return (
    <div>
      <h4>三角形問題フォーム</h4>
      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="col-md-4 control-label">
            <span className="notice">*</span>A辺の長さ
          </label>
          <div className="col-md-4">
            <input {...lengthInput("length_a")} />
            <span className="error">
              <ErrorMessage errors={errors} name="length_a" />
            </span>
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label">
            <span className="notice">*</span>B辺の長さ
          </label>
          <div className="col-md-4">
            <input {...lengthInput("length_b")} />
            <span className="error">
              <ErrorMessage errors={errors} name="length_b" />
            </span>
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label">
            <span className="notice">*</span>C辺の長さ
          </label>
          <div className="col-md-4">
            <input {...lengthInput("length_c")} />
            <span className="error">
              <ErrorMessage errors={errors} name="length_c" />
            </span>
          </div>
        </div>
        <div className="panel-footer">
          <input type="submit" name="submitConfirm" value="計算する" />
        </div>
      </form>
    </div>
  );
};

export default Form;

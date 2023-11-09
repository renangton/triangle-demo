function testTriangleForm(length_a, length_b, length_c, expectedMessage) {
  cy.get("#length_a").type(length_a);
  cy.get("#length_b").type(length_b);
  cy.get("#length_c").type(length_c);
  cy.get("form").submit();
  cy.get("#modal-message").should("contain", expectedMessage);
}

function testTriangleFormErrorMessage(length) {
  cy.get("#length_a").type(length);
  cy.get("#length_b").type(length);
  cy.get("#length_c").type(length);
  cy.get("form").submit();
  cy.get("#length_a").next("span").should("contain", "1から99の整数を半角数字で入力してください。");
  cy.get("#length_b").next("span").should("contain", "1から99の整数を半角数字で入力してください。");
  cy.get("#length_c").next("span").should("contain", "1から99の整数を半角数字で入力してください。");
}

describe("判定条件不備あり", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("3つの辺の長さが等しい場合、正三角形と表示されること", () => {
    testTriangleForm("99", "99", "99", "正三角形");
  });

  it("2つの辺の長さが等しい場合、二等辺三角形と表示されること", () => {
    testTriangleForm("1", "2", "2", "二等辺三角形");
  });

  it("3つの辺の長さがどれも異なる場合、不等辺三角形と表示されること", () => {
    testTriangleForm("97", "98", "99", "不等辺三角形");
  });

  it("2 つの辺の長さの合計がその他の 1 つの辺の長さ以下の場合、不等辺三角形と表示されること", () => {
    testTriangleForm("1", "2", "3", "不等辺三角形");
  });

  it("0以下の数字が入力された場合、エラーメッセージが表示されること", () => {
    testTriangleFormErrorMessage("0");
  });

  it("99以上の数字が入力された場合、エラーメッセージが表示されること", () => {
    testTriangleFormErrorMessage("100");
  });

  it("全角数字が入力された場合、エラーメッセージが表示されること", () => {
    testTriangleFormErrorMessage("１０");
  });

  it("数字以外が入力された場合、エラーメッセージが表示されること", () => {
    testTriangleFormErrorMessage("xyz");
  });
});

describe("判定条件不備なし", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000?flawless=true");
  });

  it("3つの辺の長さが等しい場合、正三角形と表示されること", () => {
    testTriangleForm("99", "99", "99", "正三角形");
  });

  it("2つの辺の長さが等しい場合、二等辺三角形と表示されること", () => {
    testTriangleForm("1", "2", "2", "二等辺三角形");
  });

  it("3つの辺の長さがどれも異なる場合、不等辺三角形と表示されること", () => {
    testTriangleForm("97", "98", "99", "不等辺三角形");
  });

  it("2 つの辺の長さの合計がその他の 1 つの辺の長さ以下の場合、三角形は成立しませんと表示されること", () => {
    testTriangleForm("1", "2", "3", "三角形は成立しません");
  });

  it("0以下の数字が入力された場合、エラーメッセージが表示されること", () => {
    testTriangleFormErrorMessage("0");
  });

  it("99以上の数字が入力された場合、エラーメッセージが表示されること", () => {
    testTriangleFormErrorMessage("100");
  });

  it("全角数字が入力された場合、エラーメッセージが表示されること", () => {
    testTriangleFormErrorMessage("１０");
  });

  it("数字以外が入力された場合、エラーメッセージが表示されること", () => {
    testTriangleFormErrorMessage("xyz");
  });
});

/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

function ResultModal({ isOpen, message, onRequestClose }) {
  const modalBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onRequestClose();
    }
  };

  return (
    isOpen && (
      <div css={modalBackdrop} onClick={modalBackgroundClick}>
        <div css={modalContainer}>
          <div css={modalContent}>
            <p id="modal-message" css={modalMessage}>
              {message}
            </p>
            <button css={modalCloseButton} onClick={onRequestClose}>
              閉じる
            </button>
          </div>
        </div>
      </div>
    )
  );
}

const modalBackdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const modalContainer = css`
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  width: 200px;
  height: 120px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const modalContent = css`
  text-align: center;
`;

const modalMessage = css`
  color: #333;
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 10px;
`;

const modalCloseButton = css`
  background: #1f3744;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

export default ResultModal;

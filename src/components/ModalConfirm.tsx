import React from "react";
import styled from "styled-components";

interface ModalProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ModalConfirm: React.FC<ModalProps> = ({
  open,
  onConfirm,
  onCancel,
}: ModalProps) => {
  return (
    <ModalOverlay open={open}>
      <ModalContainer>
        <p>Você confirma o cadastro?</p>
        <ButtonContainer>
          <CancelButton onClick={onCancel}>Cancelar</CancelButton>
          <Button onClick={onConfirm}>Confirmar</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalConfirm;

const ModalOverlay = styled.div<{ open: Boolean }>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.open ? "auto" : "none")};
`;

const ModalContainer = styled.div`
  max-width: 400px;
  width: 100%;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  font-size: 20px;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Button = styled.button`
  margin-top: 30px;
  height: 38px;
  width: 150px;
  border-radius: 100px;
  outline: none;
  border: none;
  background: #00d37f;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
  transition: ease-in 0.2s;

  :hover {
    background: #00bb70;
  }
  :disabled {
    background: gray;
  }
`;

const CancelButton = styled(Button)`
  background: #d30035;

  :hover {
    background: #ac022c;
  }
`;

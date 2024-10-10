import React from 'react'
import styled from 'styled-components'
import {Button} from '../Button/Button'

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({isOpen, onClose}) => {
  if (!isOpen) return null

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Access Denied</h2>
        <p>Please log in to your account to access this page.</p>
        <StyledCloseButton onClick={onClose}>Close</StyledCloseButton>
      </ModalContent>
    </Overlay>
  )
}

export default Modal

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: inset 0 0 4px 3px #fa52d3;
    position: relative;
    width: 450px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`

const CloseButton = styled(Button)`
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 10px;
    width: 30px;
    height: 30px;
`

const StyledCloseButton = styled(Button)`
    width: 150px;
    height: 40px;
`
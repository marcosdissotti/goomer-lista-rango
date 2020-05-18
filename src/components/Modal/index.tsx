import React, { useState, useEffect } from 'react';
import defaultImg from '../../assets/images/default.jpg';

import { Container, Icon } from './styles';

const Modal: React.FC<any> = ({ dismissModal, modalData }) => {
  const [count, setCount] = useState<number>(1);
  const [amount, setAmount] = useState<number>(0);

  const openSale = modalData.sales
    ? modalData.sales.find((sale: any) => sale.isOpen)
    : false;

  useEffect(() => {
    if (!openSale?.price && !modalData?.price) {
      return;
    }
    openSale
      ? setAmount(count * openSale.price.toFixed(2))
      : setAmount(count * modalData.price.toFixed(2));
  }, [count]);

  return (
    <Container>
      <div className="modal">
        <div className="exit-wrapper">
          <div className="exit" onClick={dismissModal}>
            <Icon />
          </div>
        </div>

        <img src={modalData.image || defaultImg}></img>

        <div className="item">
          <div className="item-container">
            <div className="left-wrapper">
              <p className="name">{modalData.name}</p>
              <p className="description">{modalData.description}</p>
            </div>

            <div className="right-wrapper">
              <small>
                {openSale?.price || modalData?.price ? 'R$' : ''}
                {openSale
                  ? openSale?.price?.toFixed(2)
                  : modalData?.price?.toFixed(2)}
              </small>
            </div>
          </div>

          <div className="cart">
            <div className="left-cart">
              <div className="increment-items">
                <div className="minus-wrapper">
                  <button
                    className="minus"
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    –
                  </button>
                </div>
                <div className="amount-wrapper">
                  <p className="amount">{count}</p>
                </div>
                <div className="plus-wrapper">
                  <button
                    className="plus"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="right-cart">
              <button className="add-cart">
                <p>Adicionar</p>
                <small className="cash-button">
                  R$ {amount && amount.toFixed(2)}
                </small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Modal;

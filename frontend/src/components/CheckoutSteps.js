import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Giriş Yap</div>
      <div className={props.step2 ? 'active' : ''}>Teslimat Bilgileri</div>
      <div className={props.step3 ? 'active' : ''}>Ödeme</div>
      <div className={props.step4 ? 'active' : ''}>Siparişi Onayla</div>
    </div>
  );
}

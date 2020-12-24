
import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import '../../../../../../Style.css'
function CardSection() {
  return (
      <div>
        <label>
        Card details
        </label>
        <CardElement className="checkout"/>
      </div>
    
  );
};
export default CardSection;
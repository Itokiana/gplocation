

import React ,{ useMemo } from 'react';

import {
  CardElement, 
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from '@stripe/react-stripe-js';
import useResponsiveFontSize from "./card";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          // fontFamily: "Source Code Pro, monospace",
          // "::placeholder": {
          //   color: "#aab7c4"
          // }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

// import '../../../../../../Style.css'
function CardSection() {
  
  const options = useOptions();
  return (
    <>
    <label className='section-Card'>
    Numero de carte
    <CardNumberElement
      options={options}
    />
  </label>
  <div className='flex'>
  <label className='section-Card'>
    Expiration date
    <CardExpiryElement
      options={options}
    />
  </label>
  
  <label className='section-Card'>
    CVC
    <CardCvcElement
      options={options}
    />
  </label>
  </div>
  
  </>
    
  );
};
export default CardSection;

// import React from 'react';
// import {CardElement} from '@stripe/react-stripe-js';
// import '../../../../../../Style.css'
// function CardSection() {
//   return (
//       <div>
//         <label>
//         Card details
//         </label>
//         <CardElement className="checkout"/>
//       </div>
    
//   );
// };
// export default CardSection;
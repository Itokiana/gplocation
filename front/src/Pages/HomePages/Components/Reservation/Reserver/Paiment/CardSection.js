

import React, { useMemo } from 'react';

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
        width: '50',
        base: {
          
          fontSize,
          fontWeight: '50',
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
      <label className='section-Card text-left'>
        <span className='h5 card--perso'>Numero de carte</span>
    <CardNumberElement
          options={options}
        />
      </label>
      <hr/>
      <div className=' row'>
        <div className='col-md-12'>
          <label className='section-Card text-left'>
          <span className='h5 card--perso'> Expiration date</span>
         
           <CardExpiryElement
             options={options}
          />
          </label>
        </div>
        <div className='col-md-12'>
          

            <label className='section-Card text-left'>
            <CardCvcElement
                options={options}
              />
          </label>
        </div>
       
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
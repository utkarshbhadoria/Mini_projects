import React from 'react';
import { useState } from 'react';
import InputBOx from './Component';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function CurrencyConvertor() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] =useState(0);
  const currencyInfo = useCurrencyInfo(from)

  const options =Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setAmount(setConvertedAmount)
    setConvertedAmount(amount)

  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div style={{backgroundImage:`url('https://images.pexels.com/photos/11719062/pexels-photo-11719062.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load')`}}>
        <h1 className='text-3xl bg-orange-500'>Currency Convertor</h1>
        <form onSubmit={(e) => {e.preventDefault(); 
           convert()}}>
            <div>
              <InputBOx
                  amount={amount}
                  currencyOptions={options}
                  onAmountChange={(amount)=>setAmount(amount)}
                  onCurrencyChange={(currency)=>setAmount(amount)}
                  selectCurrency={from}
              />
            </div>
            <div className="button">
              <button onclick={swap}></button>
            </div>
            <div>
              <InputBOx
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>setTo(currency)}
                  selectCurrency={from}
                  amountDisable
              />
            </div>
            <div>
              <button>convert {from.toUpperCase} to {to.toUpperCase}</button>
            </div>

           </form>

    </div>
  )
}

export default CurrencyConvertor
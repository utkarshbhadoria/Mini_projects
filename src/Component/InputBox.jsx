import React from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'

function InputBox({
  amount, 
    onAmountChange,
    currency,
    onCurrencyChange,
    currencyOptions =[],
    selectCurrency = "usd",
    amountDisable=false,
    currencyDisable=false
}) {
   


  return (
    <div>
      <div>
        <input type="number" value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
        <h4>Currency Type</h4>
        <select value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
          {currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>
              {currency}

            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox;
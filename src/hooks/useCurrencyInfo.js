import { useState, useEffect } from "react"

export default function useCurrencyInfo(currency){
    const [data , setData] = useState({})

    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json()) //to convert String response to json
      .then((res) => setData(res))
    }, [])

    return data;

}
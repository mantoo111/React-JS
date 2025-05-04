import { useState,useEffect } from 'react'

function useCurrencyInfo(currency){
    useEffect(()=>{
        fetch("https://cors-anywhere.herokuapp.com/https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api/latest/currencies/usd.json")

    },[])
}
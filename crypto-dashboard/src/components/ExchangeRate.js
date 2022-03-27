import React from 'react'

const ExchangeRate = ({exchangedData}) => {
  return (
    <div className='exchange-rate'>
      <h3>ExachangeRate: </h3>
      <h1>{exchangedData.exchangeRate}</h1>
      <p>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
    </div>
  )
}

export default ExchangeRate
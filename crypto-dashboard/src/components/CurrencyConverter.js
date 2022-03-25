import React from 'react'
import ExchangeRate from './ExchangeRate'

const CurrencyConverter = () => {
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']

    return (
        <div className='currency-converter'>
            <h2> CurrencyConverter</h2>
            <div className='input-box'>
                <table>
                    <body>
                        <tr>
                            <td>Primary Currency</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount-1"
                                    value={""}
                                />
                            </td>
                            <td>
                                <select
                                    value={""}
                                    name="currency-option-1"
                                    className='currency-options'
                                >
                                    {currencies.map( currency => (<option>{currency}</option>))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Secondary Currency</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount-2"
                                    value={""}
                                />
                            </td>
                            <td>
                                <select
                                    value={""}
                                    name="currency-option-2"
                                    className='currency-options'
                                >
                                    <option></option>
                                </select>
                            </td>
                        </tr>
                    </body>
                </table>
            </div>
            <ExchangeRate />
        </div>

    )
}

export default CurrencyConverter
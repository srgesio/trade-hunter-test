import './styles/main.css'
import api from './api'
import { useState, useEffect } from 'react'

function Table() {
  const [tickers, setTickers] = useState([])

  async function getInfo() {
    await api.get().then(res => {
      setTickers(res.data.results)
    })
  }
  useEffect(() => {
    getInfo()

  }, [])

  function validate(text) {
    if (text < 0) {
      return 'danger'
    } else if (text === 0) {
      return ''
    } else {
      return 'success'
    }
  }

  return (
    <div className="container">

      <table className="table">
        <thead>
          <tr>
            <th className='ticker-header'><h2>Ticker</h2></th>
            <th><h2>Period</h2></th>
            <th><h2>Date</h2></th>
            <th><h2>Expenditures</h2></th>
            <th><h2>Assets</h2></th>
            <th><h2>Deposits</h2></th>
            <th><h2>Free Cash Flow</h2></th>
            <th><h2>Debt</h2></th>
            <th><h2>Investments</h2></th>
            <th><h2>Revenues</h2></th>
          </tr>
        </thead>
        <tbody>
          {tickers.map((ticker, key) => (<tr key={key}>
            <td className='ticker-label'> <h2>{ticker.ticker}</h2></td>
            <td>{ticker.period}</td>
            <td>{ticker.calendarDate}</td>
            <td className={`${validate(ticker.capitalExpenditure)}`}>{ticker.capitalExpenditure}</td>
            <td className={`${validate(ticker.assets)}`}>{ticker.assets}</td>
            <td className={`${validate(ticker.deposits)}`}>{ticker.deposits}</td>
            <td className={`${validate(ticker.freeCashFlow)}`}>{ticker.freeCashFlow}</td>
            <td className={`${validate(ticker.debt)}`}>{ticker.debt}</td>
            <td className={`${validate(ticker.investments)}`}>{ticker.investments}</td>
            <td className={`${validate(ticker.revenues)}`}>{ticker.revenues}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

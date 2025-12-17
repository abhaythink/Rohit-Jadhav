import React from 'react'
import './Table.css'

const Table = (props) => {
    return (
        <table className="result">

            {/* Todo: Show below table conditionally (only once result data is available) */}
            {/* Show fallback text if no data is available */}

            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(yearData => (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{yearData.savingsEndOfYear}</td>
                        <td>{yearData.yearlyContribution}</td>
                        <td>{yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year}</td>
                        <td>{props.initialInvestment + yearData.yearlyContribution * yearData.year}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default Table
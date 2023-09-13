import "./resulttable.css"

const formatter = Intl.NumberFormat('en-US',
    {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

const ResultTable = (props) => {
   
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total savings</th>
                        <th>Interest</th>
                        <th>Total Interest</th>
                        <th>Invest Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((yearData) => (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.savingEndOfYear)}</td>
                            <td>{formatter.format(yearData.yearlyInterest)}</td>
                            <td>{formatter.format(yearData.savingEndOfYear -
                                props.initial -
                                yearData.yearlyContribution * yearData.year)}</td>
                            <td>{formatter.format(props.initial + yearData.yearlyContribution * yearData.year)}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default ResultTable
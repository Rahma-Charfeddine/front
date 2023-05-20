function Table(params) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Indicator</th>
                    <th scope="col">Goal value</th>
                    <th scope="col">Achieved value</th>
                    <th scope="col"></th>
                    <th scope="col">Trend</th>
                    <th scope="col">Efficiency</th>
                    <th scope="col">Effectivness</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>% On time monitoring of Site goals/ half yearly</td>
                    <td>100 %</td>
                    <td>100 %</td>
                    <td>
                        <div className="rounded-circle bg-success" style={{ height: '30px', width: '30px' }}> </div>

                    </td>
                    <td>up</td>
                    <td>check</td>
                    <td>check</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Idea quota /half yearly</td>
                    <td>10 %</td>
                    <td>9.71 %</td>
                    <td>
                        <div className="rounded-circle bg-danger" style={{ height: '30px', width: '30px' }}> </div>
                    </td>
                    <td>up</td>
                    <td>check</td>
                    <td>check</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;
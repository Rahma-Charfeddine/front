import React, { useEffect, useState } from "react";
import Select from 'react-select'

import instance from "../../axiosInstance";
import { useParams } from "react-router-dom";

function FinalStep() {

    const { idsub, idprocess, idelement } = useParams();

    const [processes, setProcesses] = useState([]);
    const [subprocesses, setSubprocesses] = useState([]);
    const [elements, setElement] = useState([]);
    const [indicators, setIndicators] = useState([]);

    useEffect(() => {
        instance.get('process').then(response => {
            setProcesses(response.data.data.map(el => ({ value: el._id, label: el.process_name })))
        })
        instance.get('subprocess/getallbyidprocess/' + idprocess).then(response => {
            setSubprocesses(response.data.data.map(el => ({ value: el._id, label: el.subprocess_name })))
            console.log(response.data.data)
        })
        instance.get('element/getallbyidsub/' + idsub).then(response => {
            setElement(response.data.data.map(el => ({ value: el._id, label: el.element_name })))
            console.log(response.data.data)
        })
        instance.get('indicator/getallbyidelement/' + idelement).then(response => {
            setIndicators(response.data.data)
            console.log(response.data.data)
        })

    }, [idprocess, idsub, idelement])

    const checked = () => {
        return (
            <React.Fragment>
                <td className="text-center"><div className="p-2 bg-success" style={{ width: '5px', height: '10px' }}></div></td>
                <td className="text-center"><i class="bi bi-check-circle"></i></td>
                <td className="text-center"><i class="bi bi-check-circle"></i></td>
            </React.Fragment>
        )
    }

    const notchecked = () => {
        return (<React.Fragment>
            <td className="text-center">Red</td>
            <td className="text-center"><i class="bi bi-circle"></i></td>
            <td className="text-center"><i class="bi bi-circle"></i></td>
        </React.Fragment>)
    }



    return (
        <React.Fragment>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <i class="bi bi-terminal me-2"></i>
                        <span>Processes :</span>
                        <Select className="w-50 px-2" options={processes} value={
                            processes.filter(option =>
                                option.value === idprocess)
                        } />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <span>Sub-Processes :</span>
                        <Select className="w-50 px-2" options={subprocesses} value={
                            subprocesses.filter(option =>
                                option.value === idsub)
                        } />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <span>Elements :</span>
                        <Select className="w-50 px-2" options={elements} value={
                            elements.filter(option =>
                                option.value === idelement)
                        } />
                    </div>
                </div>
            </div>
            <hr />

            <div className="container-fluid  border p-5 border">
                <table className="table" align="center">
                    <thead>
                        <tr className="table-primary">
                            <th>#</th>
                            <th>Indiactor Name</th>
                            <th>Goal Value</th>
                            <th>Achieved</th>
                            <th>status</th>
                            <th>Effectivness</th>
                            <th>Efficency</th>
                            <th>Trend</th>
                        </tr>
                    </thead>
                    <tbody>
                        {indicators.map((indicator, index) => (
                            <tr key={indicator._id}>
                                <td><span className="p-2">{index + 1}</span></td>
                                <td style={{ maxWidth: '250px' }}>{indicator.indicator_name}</td>
                                <td>{indicator.goal}</td>
                                <td>{indicator.achieved}</td>
                                {!indicator.is_max ? ((indicator.achieved - indicator.goal) * (-1) >= 0 ? checked() : notchecked()) : ((indicator.achieved - indicator.goal) >= 0 ? checked() : notchecked())}
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </React.Fragment>
    )
}

export default FinalStep;
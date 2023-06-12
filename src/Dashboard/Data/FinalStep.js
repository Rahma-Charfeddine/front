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

    const [addingSection, setAddingSection] = useState(false);
    const [message, setMessage] = useState({ code: 0, message: "" });
    const [newIndicator, setNewIndicator] = useState({
        element_id: idelement,
        indicator_name: "",
        unit: "",
        goal: 0,
        achieved: 0,
        is_max: "true"
    });


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

    const onSubmitNewIndicator = async (e) => {
        e.preventDefault();
        await instance.post('indicator', newIndicator)
            .then(response => {
                setMessage({ code: 200, message: "Indicator : " + response.data.indicator_name + " Added successfully." });
                setIndicators(prev => ([...prev, response.data]));
            })
            .catch(err => {
                console.log(err)
                setMessage({ code: 500, message: "Something went Wrong while creating new Indicator." })
            })
    }



    const checked = () => {
        return (
            <React.Fragment>
                <td className="text-center"><div className="p-2 bg-success" style={{ width: '5px', height: '10px' }}></div></td>
                <td className="text-center"><i className="bi bi-check-circle"></i></td>
                <td className="text-center"><i className="bi bi-check-circle"></i></td>
            </React.Fragment>
        )
    }

    const notchecked = () => {
        return (<React.Fragment>
            <td className="text-center">Red</td>
            <td className="text-center"><i className="bi bi-circle"></i></td>
            <td className="text-center"><i className="bi bi-circle"></i></td>
        </React.Fragment>)
    }

    return (
        <React.Fragment>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <i className="bi bi-terminal me-2"></i>
                        <span><strong>Processes :</strong></span>
                        <Select className="w-50 px-2" options={processes} value={
                            processes.filter(option =>
                                option.value === idprocess)
                        } />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <span><strong>Sub-Processes :</strong></span>
                        <Select className="w-50 px-2" options={subprocesses} value={
                            subprocesses.filter(option =>
                                option.value === idsub)
                        } />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <span><strong>Elements :</strong></span>
                        <Select className="w-50 px-2" options={elements} value={
                            elements.filter(option =>
                                option.value === idelement)
                        } />
                    </div>
                </div>
            </div>
            <hr />
            {!addingSection && <div className="container d-flex justify-content-end align-items-center py-2 my-2">
                <button className="btn btn-outline-primary" onClick={() => { setAddingSection(true) }}>New Indicator</button>
            </div>}
            {addingSection && <div className="container py-2 my-2">
                {message.code === 200 && (
                    <div className="container">
                        <div className="alert alert-success" role="alert">
                            {message.message}
                        </div>
                    </div>
                )}
                {message.code === 500 && (
                    <div className="container">
                        <div className="alert alert-danger" role="alert">
                            {message.message}
                        </div>
                    </div>
                )}
                <form onSubmit={onSubmitNewIndicator} className="p-3 m-2 border rounded shadow w-100">
                    <span className="text-primary m-3"><strong>New Element :</strong></span>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="element_name" className="form-label">Indicator Name</label>
                        <input type="text" className="form-control" id="element_name" value={newIndicator?.indicator_name} onChange={e => { setNewIndicator(prev => ({ ...prev, indicator_name: e.target.value })) }} />
                        <div id="emailHelp" className="form-text">the Name of the Indicator that will be added</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="element_name" className="form-label">Unit</label>
                        <input type="text" className="form-control" id="element_name" value={newIndicator?.unit} onChange={e => { setNewIndicator(prev => ({ ...prev, unit: e.target.value })) }} />
                        <div id="emailHelp" className="form-text">the unit of the Element that will be mesured with!</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Goal</label>
                        <input type="number" className="form-control" id="description" value={newIndicator?.goal} onChange={e => { setNewIndicator(prev => ({ ...prev, goal: e.target.value })) }} />
                        <div id="emailHelp" className="form-text">the main Goal/Limit</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">is_max</label>
                        <select className="form-select" aria-label="Default select example" value={newIndicator?.is_max === "true"} onChange={e => { setNewIndicator(prev => ({ ...prev, is_max: e.target.value })) }} >
                            <option value="true">Maximazation</option>
                            <option value="false">Limitaion</option>
                        </select>
                        <div id="emailHelp" className="form-text">is it a maximazation or a limitaion !</div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-outline-danger mx-2" type="reset" onClick={() => { setAddingSection(false) }}>Cancel</button>
                        <button className="btn btn-outline-secondary mx-2" type="reset">Reset</button>
                        <button className="btn btn-outline-primary mx-2" type="submit">Submit</button>
                    </div>
                    <hr />
                </form>
            </div>}
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
                                <td> -- </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </React.Fragment>
    )
}

export default FinalStep;
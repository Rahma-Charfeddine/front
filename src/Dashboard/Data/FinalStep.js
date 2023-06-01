import React, { useEffect, useState } from "react";
import Select from 'react-select'

import Table from "./table";
import instance from "../../axiosInstance";
import { useParams } from "react-router-dom";

function FinalStep(params) {

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

            <div className="container m-4">
                <Table />
            </div>
        </React.Fragment>
    )
}

export default FinalStep;
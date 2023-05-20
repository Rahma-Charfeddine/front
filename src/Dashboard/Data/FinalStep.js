import React from "react";
import Select from 'react-select'

import Table from "./table";

function FinalStep(params) {

    const processes = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const sub_processes = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const elements = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <React.Fragment>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <i class="bi bi-terminal me-2"></i>
                        <span>Processes :</span>
                        <Select className="w-50 px-2" options={processes} />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <span>Sub-Processes :</span>
                        <Select className="w-50 px-2" options={sub_processes} />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <span>Elements :</span>
                        <Select className="w-50 px-2" options={elements} />
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
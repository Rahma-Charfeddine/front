import React, { useEffect, useState } from "react";
import instance from "../../axiosInstance";
import { useNavigate } from "react-router-dom";

function ProcessSelection() {

    const navigate = useNavigate();

    const [processes, setProcesses] = useState([]);

    const [addingSection, setAddingSection] = useState(false);

    const [name, setname] = useState("");
    const [message, setMessage] = useState({ code: 0, message: "" });


    useEffect(() => {

        //calling process api to get all processes from backend 
        instance.get('process')
            .then(response => {
                setProcesses(response.data.data);
                console.log(response.data.data)
            })
            .catch(error => { console.log(error.message) })
    }, [])


    const onSubmitNewProcess = async (e) => {
        e.preventDefault();
        instance.post("process", {
            process_name: name
        })
            .then(response => {
                setMessage({ code: 200, message: "Process : " + response.data.process_name + " Added successfully." });
                setProcesses(prev => ([...prev, response.data]));
            })
            .catch(err => {
                console.log(err)
                setMessage({ code: 500, message: "Something went Wrong while creating new Process." })
            })
    }

    return (
        <React.Fragment>
            {(addingSection && (
                <div className="container mt-5">
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
                    <form onSubmit={onSubmitNewProcess}>
                        <span className="text-primary"><strong>New Process :</strong></span>
                        <div className="input-group">
                            <input required type="text" className="form-control" placeholder="Process Name..." aria-label="Process Name..." value={name} onChange={(e) => { setname(e.target.value) }} />
                            <button className="btn btn-outline-danger" type="reset" onClick={() => { setAddingSection(false) }}>Cancel</button>
                            <button className="btn btn-outline-secondary" type="reset">Reset</button>
                            <button className="btn btn-outline-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )) ||
                <div className="container mt-5 d-flex justify-content-end">
                    <button className="btn btn-outline-primary" onClick={() => { setAddingSection(true) }}>Add new Process</button>
                </div>

            }
            <div className="container d-flex justify-content-start m-5">
                <h5 className="text-primary"><strong>Process List :</strong></h5>
            </div>
            <div className="conatiner px-5 m-5 text-center">
                {
                    processes.map((process) => (
                        <button
                            key={process._id}
                            className="btn btn-lg btn-outline-primary w-100 m-3 text-capitalize fw-bolder px-5"
                            type="button" onClick={() => {
                                navigate('/dashboard/data/' + process._id)
                            }}>
                            {process.process_name}
                        </button>
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default ProcessSelection;
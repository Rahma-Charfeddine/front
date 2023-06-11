import React, { useEffect, useState } from "react";
import instance from "../../axiosInstance";
import { useNavigate } from "react-router-dom";

function ProcessSelection() {

    const navigate = useNavigate();

    const [processes, setProcesses] = useState([]);

    const [addingSection, setAddingSection] = useState(false);

    const [name, setname] = useState("");


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
    }

    return (
        <React.Fragment>
            {(addingSection && (
                <div className="container mt-5">
                    <form onSubmit={onSubmitNewProcess}>
                        <span className="text-primary"><strong>New Process :</strong></span>
                        <div class="input-group">
                            <input required type="text" class="form-control" placeholder="Process Name..." aria-label="Process Name..." onChange={(e) => { setname(e.target.value) }} />
                            <button class="btn btn-outline-secondary" type="reset">Reset</button>
                            <button class="btn btn-outline-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )) ||
                <div className="container mt-5 d-flex justify-content-end">
                    <button className="btn btn-outline-primary" onClick={() => { setAddingSection(true) }}>Add new Process</button>
                </div>

            }
            <div className="conatiner p-5 m-5 d-flex justify-content-center align-items-center">
                <div class="d-grid gap-2">
                    {
                        processes.map((process, index) => (
                            <button
                                class="btn btn-primary"
                                type="button" onClick={() => {
                                    navigate('/dashboard/data/' + process._id)
                                }}>
                                {process.process_name}
                            </button>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProcessSelection;
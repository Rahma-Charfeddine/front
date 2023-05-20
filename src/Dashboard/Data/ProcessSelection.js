import React, { useEffect, useState } from "react";
import instance from "../../axiosInstance";
import { useNavigate } from "react-router-dom";

function ProcessSelection(params) {

    const navigate = useNavigate();

    const [processes, setProcesses] = useState([]);


    useEffect(() => {

        //calling process api to get all processes from backend 
        instance.get('process')
            .then(response => {
                setProcesses(response.data.data);
                console.log(response.data.data)
            })
            .catch(error => { console.log(error.message) })
    }, [])
    return (
        <React.Fragment>
            <div className="conatiner p-5 m-5 d-flex justify-content-center align-items-center">
                <div class="d-grid gap-2">
                    {
                        processes.map((process, index) => {
                            return (


                                <button
                                    class="btn btn-primary"
                                    type="button" onClick={() => {
                                        navigate('/dashboard/data/' + process._id)
                                    }}
                                >{process.process_name}</button>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProcessSelection;

import React, { useEffect, useState } from "react";
import instance from "../../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

function SubProcessSelection(params) {


    const navigate = useNavigate();

    const [subprocesses, setSubprocesses] = useState([]);

    const { idprocess } = useParams();


    useEffect(() => {

        //calling process api to get all processes from backend 
        instance.get('subprocess/getallbyidprocess/' + idprocess)
            .then(response => {
                setSubprocesses(response.data.data);
                console.log(response.data.data)
            })
            .catch(error => { console.log(error.message) })
    }, [])
    return (
        <React.Fragment>
            <div className="conatiner p-5 m-5 d-flex justify-content-center align-items-center">
                <div class="d-grid gap-2">
                    {
                        subprocesses.map((subprocess, index) => {
                            return (


                                <button
                                    class="btn btn-primary"
                                    type="button" onClick={() => {
                                        navigate('/dashboard/data/' + idprocess+'/'+subprocess._id)
                                    }}
                                >{subprocess.subprocess_name}</button>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )




}

export default SubProcessSelection;
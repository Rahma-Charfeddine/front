import React, { useEffect, useState } from "react";
import instance from "../../axiosInstance";
import { useNavigate, useParams } from "react-router-dom"


function ElementSelection(params) {

    const { idsub, idprocess } = useParams();

    const navigate = useNavigate();

    const [elements, setElement] = useState([]);


    useEffect(() => {

        //calling process api to get all processes from backend 
        instance.get('element/getallbyidsub/' + idsub)
            .then(response => {
                setElement(response.data.data);
                console.log(response.data.data)
            })
            .catch(error => { console.log(error.message) })
    }, [])
    
    return (
        <React.Fragment>
            <div className="conatiner p-5 m-5 d-flex justify-content-center align-items-center">
                <div class="d-grid gap-2">
                    {
                        elements.map((element, index) => {
                            return (


                                <button
                                    class="btn btn-primary"
                                    type="button" onClick={() => {
                                        navigate('/dashboard/data/' + idprocess + '/' + idsub + '/' + element._id)
                                    }}
                                >{element.element_name}</button>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )




}

export default ElementSelection;
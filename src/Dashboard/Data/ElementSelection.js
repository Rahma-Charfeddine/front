import React, { useEffect, useState } from "react";
import instance from "../../axiosInstance";
import { useNavigate, useParams } from "react-router-dom"


function ElementSelection(params) {

    const { idsub, idprocess } = useParams();

    const navigate = useNavigate();

    const [elements, setElements] = useState([]);

    const [addingSection, setAddingSection] = useState(false);

    const [newElement, setNewElement] = useState({
        subprocess_id: idsub,
        element_name: "",
        description: ""
    });
    const [message, setMessage] = useState({ code: 0, message: "" });

    useEffect(() => {
        //calling process api to get all processes from backend 
        instance.get('element/getallbyidsub/' + idsub)
            .then(response => {
                setElements(response.data.data);
                console.log(response.data.data)
            })
            .catch(error => { console.log(error.message) })
    }, [idsub])

    const onSubmitNewElement = async (e) => {
        e.preventDefault();
        instance.post("element", newElement)
            .then(response => {
                setMessage({ code: 200, message: "Element : " + response.data.subprocess_name + " Added successfully." });
                setElements(prev => ([...prev, response.data]));
            })
            .catch(err => {
                console.log(err)
                setMessage({ code: 500, message: "Something went Wrong while creating new Element." })
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
                    <form onSubmit={onSubmitNewElement} className="p-3 m-2 border rounded shadow">
                        <span className="text-primary m-3"><strong>New Element :</strong></span>
                        <hr />
                        <div class="mb-3">
                            <label for="element_name" class="form-label">Element Name</label>
                            <input type="text" class="form-control" id="element_name" value={newElement?.element_name} onChange={e => { setNewElement(prev => ({ ...prev, element_name: e.target.value })) }} />
                            <div id="emailHelp" class="form-text">the Name of the Element that will be added</div>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <input type="text" class="form-control" id="description" value={newElement?.description} onChange={e => { setNewElement(prev => ({ ...prev, description: e.target.value })) }} />
                            <div id="emailHelp" class="form-text">Description of the Element</div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-outline-danger mx-2" type="reset" onClick={() => { setAddingSection(false) }}>Cancel</button>
                            <button className="btn btn-outline-secondary mx-2" type="reset">Reset</button>
                            <button className="btn btn-outline-primary mx-2" type="submit">Submit</button>
                        </div>
                        <hr />
                    </form>
                </div>
            )) ||
                <div className="container mt-5 d-flex justify-content-end">
                    <button className="btn btn-outline-primary" onClick={() => { setAddingSection(true) }}>Add new Sub-Process</button>
                </div>
            }
            <div className="container d-flex justify-content-start m-5">
                <h5 className="text-primary"><strong>Elements List :</strong></h5>
            </div>
            <div className="conatiner px-5 m-5 text-center">
                {
                    elements.map((el) => (
                        <button
                            key={el._id}
                            className="btn btn-lg btn-outline-primary w-100 m-3 text-capitalize fw-bolder px-5"
                            type="button" onClick={() => {
                                navigate('/dashboard/data/' + idprocess + '/' + idsub + '/' + el._id)
                            }}>
                            {el.element_name}
                        </button>
                    ))
                }
            </div>
        </React.Fragment>
    )




}

export default ElementSelection;
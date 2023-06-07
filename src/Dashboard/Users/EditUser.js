import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../axiosInstance";

function EditUser() {

    const { id } = useParams();

    const [user, setUser] = useState();

    useEffect(() => {
        instance.get('user/' + id).then(resp => {
            setUser(resp.data)
        })
    }, [id])

    // function ( call put request )
    function savechanges(e) {
        e.preventDefault();
        // 
    }

    return (
        <React.Fragment>
            <div className="p-5 m-5">
                <form class="needs-validation" novalidate="" onSubmit={savechanges}>
                    <div class="row g-3">
                        <div class="col-sm-6">
                            <label for="firstName" class="form-label">Name</label>
                            <input type="text" class="form-control" id="firstName" defaultValue={user?.name} required="true" onChange={(e) => {
                                setUser(prev => {
                                    return ({
                                        ...prev,
                                        name: e.target.value
                                    })
                                })
                            }} />
                            <div class="invalid-feedback">
                                Valid name is required.
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label for="lastName" class="form-label">Family name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" defaultValue={user?.family_name} required="" />
                            <div class="invalid-feedback">
                                Valid family name is required.
                            </div>
                        </div>


                        <div class="col-sm-6">
                            <label for="lastName" class="form-label">Tel Number</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" defaultValue={user?.nTel} required="" />
                            <div class="invalid-feedback">
                                Valid Tel number is required.
                            </div>
                        </div>
 

                        <div class="col-sm-6">
                            <label for="lastName" class="form-label">Family name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" defaultValue={user?.family_name} required="" />
                            <div class="invalid-feedback">
                                Valid family name is required.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="you@example.com" defaultValue={user?.email} required=""  />
                            <div class="invalid-feedback">
                                Please enter a valid email address.
                            </div>
                        </div>
                       

                       
                        <div class="my-3">
                        <h9 class="mb-3">Gender</h9>
                        <div class="form-check">
                             <input type="checkbox" class="form-check-input" id="same-address"/>
                            <label class="form-check-label" for="same-address">male</label>
                             </div>
                             <div class="form-check">
                             <input type="checkbox" class="form-check-input" id="same-address"/>
                            <label class="form-check-label" for="same-address">female</label>
                             </div>
                             </div>


                             
                        <div class="my-3">
                        <h6 class="mb-3">Role</h6>
                       
                        <div class="form-check">
                        <input id="credit" name="role" type="radio" class="form-check-input" required=""/>
                        <label class="form-check-label" for="credit">Board Member</label>
                        </div>

                        <div class="form-check">
                        <input id="debit" name="role" type="radio" class="form-check-input" required=""/>
                        <label class="form-check-label" for="debit">Dep manager</label>
                        </div>

                        <div class="form-check">
                        <input id="paypal" name="role" type="radio" class="form-check-input" required=""/>
                        <label class="form-check-label" for="paypal">Admin</label>
                        
                        </div>
                        </div>
                            
                        {/* // checkboxes ..  for roles  // react select forthe gender selction // input datte of birth  */}

                        <button class="w-100 btn btn-outline-primary btn-lg" type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}
export default EditUser;
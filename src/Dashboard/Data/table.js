import React, { useEffect, useState } from "react";
import instance from "../../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

function Table(params) {



  const { idelement, idprocess, idsub } = useParams();


  const navigate = useNavigate();

  const [indicator, setIndicator] = useState([]);




  useEffect(() => {
    instance.get('indicator/getallbyidelement' + idelement)
      .then(response => {
        setIndicator(response.data.data);
        console.log(response.data.data)
      })
      .catch(error => { console.log(error.message) })
  }, [])



  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Indiactor Name</th>
            <th>Goal Value</th>
            <th>Achieved</th>
            <th> </th>
            <th>Trend</th>
            <th>Effectivness</th>
            <th>Efficency</th>
          </tr>
        </thead>
        <tbody>
          {indicator.map(indicator => (
            <tr key={indicator.idindicator} onClick={() => {
              navigate('/dashboard/data/' + idprocess + '/' + idsub + '/' + idelement + '/' + indicator._id)
            }}>
              <td>            </td>
              <td>{indicator.indicator_name}</td>
              <td>{indicator.goal}</td>
              <td>{indicator.achieved}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  )
}

/*

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Indicator</th>
                    <th scope="col">Goal value</th>
                    <th scope="col">Achieved value</th>
                    <th scope="col"></th>
                    <th scope="col">Trend</th>
                    <th scope="col">Efficiency</th>
                    <th scope="col">Effectivness</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>% On time monitoring of Site goals/ half yearly</td>
                    <td>100 %</td>
                    <td>100 %</td>
                    <td>
                        <div className="rounded-circle bg-success" style={{ height: '30px', width: '30px' }}> </div>

                    </td>
                    <td>up</td>
                    <td>check</td>
                    <td>check</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Idea quota /half yearly</td>
                    <td>10 %</td>
                    <td>9.71 %</td>
                    <td>
                        <div className="rounded-circle bg-danger" style={{ height: '30px', width: '30px' }}> </div>
                    </td>
                    <td>up</td>
                    <td>check</td>
                    <td>check</td>
                </tr>
            </tbody>
        </table>
    )
    

    }*/
export default Table;

/*import React, { useEffect, useState } from "react";
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
                                Valid first name is required.
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <label for="lastName" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" defaultValue={user?.family_name} required="" />
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                            <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                            <div class="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        {/* // checkboxes ..  for roles  // react select forthe gender selction // input datte of birth  *//*}

                        <button class="w-100 btn btn-outline-primary btn-lg" type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}
export default EditUser;*/
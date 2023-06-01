import React, { useEffect, useState } from "react";
import instance from "../../axiosInstance";
import {useNavigate, useParams } from "react-router-dom";

function Table(params) {



const {idelement, idprocess, idsub } = useParams();


const navigate = useNavigate();

const [indicator, setIndicator] = useState([]);




  useEffect(() => {
    instance.get('indicator/getallbyidelement'+ idelement)
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
          <tr key={indicator.idindicator}  onClick={() => {
            navigate('/dashboard/data/' + idprocess + '/' + idsub + '/' +idelement + '/' + indicator._id)
        }}>
            <td>            </td>
            <td>{indicator.indicator_name}</td>
            <td>{indicator.goal}</td>
            <td>{indicator.achieved}</td>


            <td>                                                    </td>
            <td>                                                    </td>
            <td>                                                    </td>
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
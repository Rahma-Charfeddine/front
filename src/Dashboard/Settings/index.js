import React, { useEffect, useState } from "react"
import instance from "../../axiosInstance";
function Settings(params) {

    const [periods, setPeriods] = useState([]);
    const [selectedPeriod, setSelectedPeriod] = useState("null");

    useEffect(() => {
        instance.get("period")
            .then(response => {
                setPeriods(response.data?.data)
                setSelectedPeriod(response.data?.data.find(obj => obj.active === true)._id)

            })
            .catch(err => {
                console.log(err);
                alert("something went wrong in loading ...")
            })

    }, [])

    const setactivePeriod = async (e) => {
        e.preventDefault();
        console.log(selectedPeriod)
        await instance.post("period/setactiveperiod", { id: selectedPeriod })
            .then(response => {
                alert("period set successfully")
            })
            .catch(err=>{
                alert("SomethingwentWrong")
            })

    }

    const onchangePeriod = async (e) => {
        setSelectedPeriod(e.target.value);
    }

    return (
        <React.Fragment>
            <div className="container-fluid mt-5">
                <div className="container">
                    <form className="needs-validation" noValidate="" onSubmit={setactivePeriod}>
                        <div className="row">
                            <div className="col-md-5">
                                <span className="m-2"><strong>Current Period selected :</strong></span>
                                <div className="input-group">
                                    <span></span>
                                    <select className="form-select" id="inputGroupSelect04" value={selectedPeriod} aria-label="Example select with button addon" onChange={onchangePeriod}>
                                        <option value="null">Choose...</option>
                                        {periods.map(el => (
                                            <option key={el._id} value={el._id}>{el.reference}</option>
                                        ))}
                                    </select>
                                    <button className="btn btn-outline-secondary" type="submit">Set Period</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Settings;
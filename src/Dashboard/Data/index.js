import React from "react";
import { Route, Routes } from "react-router-dom";
import FinalStep from "./FinalStep";
import ProcessSelection from "./ProcessSelection";
import SubProcessSelection from "./SubProcessSelection";
import ElementSelection from "./ElementSelection";

function Data() {



    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<ProcessSelection/>}/>
                <Route path="/:idprocess" element={<SubProcessSelection/>}/>
                <Route path="/:idprocess/:idsub" element={<ElementSelection/>}/>
                <Route path="/:idprocess/:idsub/:idelement" element={<FinalStep/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default Data;
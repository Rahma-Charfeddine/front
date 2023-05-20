import React from "react";
import Table from "./table";

function ManagReview() {
    return (
        <React.Fragment>
            <div className="container">
                <div class="row m-3">
                    <div class="col-md-6 col-xl-4">
                        <div class="card mb-3 widget-content bg-midnight-bloom">
                            <div class="widget-content-wrapper ">
                                <div class="widget-content-left">
                                    <div class="widget-heading">Total Orders</div>
                                    <div class="widget-subheading">Last year expenses</div>
                                </div>
                                <div class="widget-content-right">
                                    <div class="widget-numbers "><span>1896</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

            </div>
            <div className="container m-4">
                <Table />
            </div>
        </React.Fragment>
    )
}

export default ManagReview;
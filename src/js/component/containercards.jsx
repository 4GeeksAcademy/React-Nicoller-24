import React from "react";
import Cards from "./card";

const ContainerCards = () => {
    return <>
       <div className="d-flex" style={{marginLeft: "4%", marginBottom: "5%"}}>
            <div style={{marginRight: "2%"}}>
                <Cards/>
            </div>
            <div style={{marginRight: "2%"}}>
                <Cards/>
            </div>
            <div style={{marginRight: "2%"}}>
                <Cards/>
            </div>
            <div style={{marginRight: "2%"}}>
                <Cards/>
            </div>
         </div>
    </>
}

export default ContainerCards
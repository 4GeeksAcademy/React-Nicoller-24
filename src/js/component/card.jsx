import React from "react";

const Cards = () => {
    return <>
         <div className="card text-center mb-3" style={{width: "18rem"}}>
                    <img src="https://picsum.photos/500/325" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text ">With supporting text below as a natural lead-in to additional content.</p>
                        <div className="border-bottom"></div>
                        <a href="#" className="btn btn-primary mt-2 ">Find out more!</a>
                    </div>
            </div>

    </>
}

export default Cards
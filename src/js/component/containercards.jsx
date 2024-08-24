import React from "react";
import Cards from "./card";

const ContainerCards = () => {
    return (
        <>
            <div
                className="d-flex flex-wrap justify-content-center"
                style={{ marginLeft: "4%", marginBottom: "5%" }}
            >
                <div style={{ margin: "1%" }}>
                    <Cards />
                </div>
                <div style={{ margin: "1%" }}>
                    <Cards />
                </div>
                <div style={{ margin: "1%" }}>
                    <Cards />
                </div>
                <div style={{ margin: "1%" }}>
                    <Cards />
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .d-flex > div {
                        flex: 0 0 45%;
                    }
                }

                @media (max-width: 480px) {
                    .d-flex > div {
                        flex: 0 0 90%;
                    }
                }
            `}</style>
        </>
    );
};

export default ContainerCards;

import React from "react";
import { useEffect } from "react";

const Hero = () => {
    return (
        <div className="hero-container">
            <div>
                <div className="recon-character">
                    <img src="53.png" alt="image" />
                </div>
                <div className="info-container">
                    <div className="recon-info">
                        <div className="recon-title">NEMESIS MODEL</div>
                        <div className="recon-header">
                            <div className="recon-name">$150</div>
                            <div className="recon-description">
                                Special edition from RE3
                            </div>
                        </div>
                    </div>
                    <div className="bottom-info">
                        <div className="recon-description">
                            Detailed, vivid model made by a true fan
                        </div>
                    </div>
                    <div className="bottom-info">
                        <div className="bottom-description">
                            Dimension 20x50
                        </div>
                    </div>
                </div>
                {/* End of left container */}

                <div className="right-side-info">
                    <div className="top-info">
                        <div className="top-description">
                            The best seller character
                        </div>
                    </div>
                    <div className="second-info">
                        <div className="second-description">
                            Over <strong>500</strong> pre-orders!!!
                        </div>
                    </div>
                    <div className="recon-info right">
                        <div className="recon-title">New arrival</div>
                        <div className="recon-description">
                            Limited edition, best model of all time!
                        </div>
                    </div>
                    <div className="recon-info right">
                        <button className="recon-button">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

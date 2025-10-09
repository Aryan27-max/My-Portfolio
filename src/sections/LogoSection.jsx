import React from "react";
import { logoIconsList } from "../constants/index.js";

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} loading="lazy" />
        </div>
    );
};

const LogoSection = () => {
    return (
        <div className="relative my-10 md:my-20">
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <div className="marquee h-52">
                <div className="marquee-box gap-5 md:gap-12">
                    {[...logoIconsList, ...logoIconsList].map((icon, idx) => (
                        <LogoIcon key={`${icon.name}-${idx}`} icon={icon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoSection;

import React from "react";
import { abilities } from "../constants/index.js";

const FeatureCards = () => {
    return (
        <div className="w-full padding-x-lg">
            {/* Use your own `grid-3-cols` if you defined it; otherwise use the line below */}
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {abilities.map(({ imgPath, title, desc }, idx) => (
                    <div
                        key={`${title}-${idx}`}
                        className="card-border rounded-xl p-8 flex flex-col gap-4"
                    >
                        <div className="size-14 flex items-center justify-center rounded-full">
                            {/* If `size-14` isn't available in your Tailwind version, use w-14 h-14 */}
                            <img src={imgPath} alt={title} loading="lazy" />
                        </div>

                        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                        <p className="text-white/50 text-lg">{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureCards;

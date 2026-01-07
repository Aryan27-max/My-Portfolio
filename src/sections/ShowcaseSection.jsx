import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={rydeRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <a href="https://github.com/Aryan27-max/FLARE-ALERT" target="_blank" rel="noopener noreferrer">
                                <img src="/images/Flare.webp" alt="Ryde App Interface" />
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>
                                Flare Alert: Where Tech meets Safety
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An visoin AI, IOT plus software protype with Kaggle based ML models for
                                fire safety and theft protection
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <a href="https://github.com/Aryan27-max/Resumind" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/images/Resumind.png"
                                        alt="AI Resume Analyser"
                                    />
                                </a>
                            </div>
                            <h2>RESUMIND - Your resume deserves an AI Review</h2>
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <a href="https://github.com/Aryan27-max/SKYBOX" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="/images/SKYBOX.webp"
                                        alt="YC Directory App"
                                    />
                                </a>
                            </div>
                            <h2>SKYBOX - future of EV charging</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;
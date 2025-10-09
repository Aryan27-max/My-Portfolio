import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="flex flex-col justify-center">
                    <p>Terms & Conditions</p>
                </div>

                {/* Social Icons */}
                <div className="socials flex gap-4">
                    {socialImgs.map((socialImg, index) => (
                        <a
                            key={index}
                            href={socialImg.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon"
                        >
                            <img
                                src={socialImg.imgPath}
                                alt={`${socialImg.name} icon`}
                                className="w-6 h-6 hover:opacity-80 transition"
                            />
                        </a>
                    ))}
                </div>

                {/* Right Section */}
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Charvee Masand. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

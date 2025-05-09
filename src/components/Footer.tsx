import { FaLocationArrow } from "react-icons/fa6";


import MagicButton from "./ui/MagicButton";
import { socialMedia } from "../data";


const Footer = () => {
    return (
        <footer className="w-full mb-[100px] pb-10" id="contact">
            {/* background grid */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>


            <div className="flex flex-col items-center">
                <p className="text-white md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how we can work together.
                </p>
                <a className="text-white" href="mailto:@alanbatres328@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <a
                            key={profile.id}
                            href={profile.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <img src={profile.img} alt="icon" width={20} height={20} />
                        </a>
                    ))}

                </div>
            </div>
            <p className="text-white text-center mt-4">
                Call me at <span className="font-semibold text-[#4bbafa]">(209) 851-5101</span>
            </p>

        </footer>
    );
};

export default Footer;
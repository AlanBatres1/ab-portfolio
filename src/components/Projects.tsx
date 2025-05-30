"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../data";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="text-[48px] font-bold text-center text-white">
                A small selection of{" "}
                <span className="text-[#4bbafa]">recent projects</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center p-4 gap-x-25 gap-y-8 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div
                        key={id}
                        className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
                    >
                        <PinContainer title={link} href={link}>
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                                
                                {img && (
                                    <Image src={img} alt="cover" className=" " width={600} height={300} />
                                )}
                            </div>

                            <h1 className="font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                style={{ color: "#BEC1DD", margin: "1vh 0" }}
                            >
                                {des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists?.map((icon, index) => {
                                        const offset = `translateX(-${5 * index + 2}px)`;
                                        return (
                                            <div
                                                key={index}
                                                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                style={{ transform: offset }}
                                            >
                                                <Image
                                                    src={icon}
                                                    alt={`icon-${index}`}
                                                    className="p-2"
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-[#4bbafa]">
                                        Check Live Site
                                    </p>
                                    <FaLocationArrow className="ms-3" color="#4bbafa" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;

import { socialMedia } from "../../../data";
import { cn } from "../../../lib/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl transform-gpu",
        "bg-transparent border border-[rgba(255,255,255,0.1)]",
        "[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "hover:[box-shadow:0_-40px_120px_-20px_#ffffff2f_inset]",
        "transition duration-300",
        "bg-[#f2f2f20c]",
        // Ensure content stays on top with relative z-10
        "relative z-10",
        id !== 6 && "p-4",
        className,
      )}
      style={{
        background: "",
      }}
    >
      {/* Background Animation for ID 6 */}
      {id === 6 && (
        <div className="absolute inset-0 z-0">
          <div className="flex items-center justify-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={profile.img} alt="icons" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Card content */}
      <div
        className={`${id === 6 ? "flex justify-center z-10" : ""} h-full w-full relative`}
      >
        {/* Background Image */}
        {img && (
          <div className="w-full h-full absolute z-0">
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          </div>
        )}

        {/* Spare Image */}
        {spareImg && (
          <div className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full opacity-80" : ""}`}>
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}

        {/* Title & Description */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col",
            id !== 6 && "px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-white z-10">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white">
            {title}
          </div>
        </div>
      </div>

      {/* Icon (if any) */}
      {icon}
    </div>
  );
};

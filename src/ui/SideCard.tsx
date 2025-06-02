import { creators } from "@/data";
import { getSlugToName } from "@/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

interface SideCardProps {
  creator: (typeof creators)[number];
}

const SideCard = ({ creator }: SideCardProps) => {
  return (
    <div
      className="flex flex-col bg-white p-6 rounded-lg shadow-md w-full md:w-1/4 items-center hover:shadow-2xl 
          transition-all duration-300 ease-in-out"
    >
      <Image
        alt={creator.name}
        src={creator.img as StaticImageData}
        className="w-60 h-60 object-cover rounded-lg shadow-lg mb-4 border-4 border-blue-quaternary"
      />
      <h1 className="text-3xl text-center text-blue-primary font-black font-lato">
        {creator.name}
      </h1>
      <h2 className="text-xl font-lato font-medium text-blue-primary/80">
        {creator.function}
      </h2>

      <div className="flex flex-col w-full mt-4 space-y-2 text-lg items-start text-blue-primary">
        <Link
          target="_blank"
          href={creator.insta}
          title={creator.insta}
          rel="noopener noreferrer"
          className="hover:underline text-nowrap"
        >
          <FaInstagram className="inline mr-1 mb-1" />
          <span>{getSlugToName(creator.slug)}</span>
        </Link>
        <Link
          target="_blank"
          href={creator.face}
          title={creator.face}
          rel="noopener noreferrer"
          className="hover:underline text-nowrap"
        >
          <FaFacebook className="inline mr-1 mb-1" />
          {getSlugToName(creator.slug)}
        </Link>
        <p className="text-nowrap">
          <FaPhoneAlt className="inline mr-1 mb-1" />
          <span className="text-wrap">{creator.phone}</span>
        </p>
        <p className="text-nowrap">
          <MdOutlineEmail className="inline mr-1" />
          <span className="text-wrap break-all">{creator.email}</span>
        </p>
      </div>
    </div>
  );
};

export default SideCard;

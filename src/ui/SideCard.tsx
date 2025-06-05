import { creators } from "@/data";
import { userInfosEntry } from "@/types";
import { getSlugToName } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

interface SideCardProps {
  photoUrl: string;
  creator: (typeof creators)[number];
  userInfos: userInfosEntry | undefined;
}

const SideCard = ({ creator, userInfos, photoUrl }: SideCardProps) => {
  return (
    <div
      className="flex flex-col bg-white p-6 rounded-lg shadow-md w-full md:w-1/4 items-center hover:shadow-2xl 
          transition-all duration-300 ease-in-out"
    >
      <div className="w-60 h-60 relative">
        <Image
          fill
          src={`https:${photoUrl}`}
          blurDataURL={`https:${photoUrl}`}
          alt={userInfos?.fields.nameUser as string}
          className="object-cover rounded-lg shadow-lg mb-4 border-4 border-blue-quaternary"
        />
      </div>
      <h1 className="text-3xl text-center text-blue-primary font-black font-lato">
        {userInfos?.fields.nameUser as string}
      </h1>
      <h2 className="text-xl font-lato font-medium text-blue-primary/80">
        {userInfos?.fields.functionPosition as string}
      </h2>

      <div className="flex flex-col w-full mt-4 space-y-2 text-lg items-start text-blue-primary">
        <Link
          target="_blank"
          href={userInfos?.fields.instaUser as string}
          title={userInfos?.fields.instaUser as string}
          rel="noopener noreferrer"
          className="hover:underline text-nowrap"
        >
          <FaInstagram className="inline mr-1 mb-1" />
          <span>{getSlugToName(creator.slug)}</span>
        </Link>
        <Link
          target="_blank"
          href={userInfos?.fields.faceUser as string}
          title={userInfos?.fields.faceUser as string}
          rel="noopener noreferrer"
          className="hover:underline text-nowrap"
        >
          <FaFacebook className="inline mr-1 mb-1" />
          {getSlugToName(creator.slug)}
        </Link>
        <p className="text-nowrap">
          <FaPhoneAlt className="inline mr-1 mb-1" />
          <span className="text-wrap">
            {userInfos?.fields.phoneUser as string}
          </span>
        </p>
        <p className="text-nowrap">
          <MdOutlineEmail className="inline mr-1" />
          <span className="text-wrap break-all">
            {userInfos?.fields.emailUser as string}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SideCard;

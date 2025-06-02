import Link from "next/link";
interface LogoProps {
  href?: string;
  fontType?: string;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({
  href = "/",
  textColor = "white",
  fontType,
}) => {
  return (
    <Link href={href} className="group">
      <h2
        className={`text-${textColor} text-2xl ${fontType} font-prata cursor-pointer mt-1
      group-hover:text-yellow-primary transition-all duration-400 ease-in-out`}
      >
        Solidariza
      </h2>
    </Link>
  );
};

export default Logo;

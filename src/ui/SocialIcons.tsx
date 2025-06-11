import { socialLinks } from "@/data";
import { HTMLAttributes } from "react";

interface SocialIconsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  customStyle?: boolean;
}
const SocialIcons = ({
  className,
  customStyle,
  ...props
}: SocialIconsProps) => (
  <div className={`flex h-fit gap-2 text-white ${className}`} {...props}>
    {socialLinks.map(({ href, label, icon: Icon }) => (
      <a
        key={label}
        href={href}
        title={label}
        target="_blank"
        aria-label={label}
        rel="noopener noreferrer"
        className={`group transition-all duration-400 ease-in-out p-2 rounded-full ${
          customStyle ? `hover:bg-blue-quaternary` : `hover:bg-yellow-primary`
        }`}
      >
        <Icon
          className={`w-6 h-6  transition-all duration-400 ease-in-out ${
            customStyle
              ? `group-hover:text-white`
              : `group-hover:text-blue-quaternary`
          }`}
        />
      </a>
    ))}
  </div>
);

export default SocialIcons;

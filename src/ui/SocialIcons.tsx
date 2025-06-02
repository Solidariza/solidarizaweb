import { socialLinks } from "@/data";

const SocialIcons = () => (
  <div className={`flex gap-2 text-white`}>
    {socialLinks.map(({ href, label, icon: Icon }) => (
      <a
        key={label}
        href={href}
        title={label}
        target="_blank"
        aria-label={label}
        rel="noopener noreferrer"
        className="group transition-all duration-400 ease-in-out hover:bg-yellow-primary p-2 rounded-full"
      >
        <Icon className="w-6 h-6 group-hover:text-blue-quaternary transition-all duration-400 ease-in-out" />
      </a>
    ))}
  </div>
);

export default SocialIcons;

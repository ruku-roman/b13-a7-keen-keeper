import Link from "next/link";
import { FaInstagramSquare,FaFacebook,FaTwitter   } from "react-icons/fa";
import SocialButton from "../ui/SocialButton";

const SOCIAL_LINKS = [
  { id: 1, Icon: FaInstagramSquare, url: "#", className: `w-10 h-10 
    flex items-center justify-center 
    rounded-full 
    bg-white 
    text-[#1C4D42] 
    shadow-md 
    hover:bg-emerald-500 
    hover:text-white 
    transition-all duration-300 
    hover:scale-110`},
  { id: 2, Icon: FaFacebook, url: "#", className:`w-10 h-10 
    flex items-center justify-center 
    rounded-full 
    bg-white 
    text-[#1C4D42] 
    shadow-md 
    hover:bg-emerald-500 
    hover:text-white 
    transition-all duration-300 
    hover:scale-110` },
  { id: 3, Icon: FaTwitter, url: "#", className:`w-10 h-10 
    flex items-center justify-center 
    rounded-full 
    bg-white 
    text-[#1C4D42] 
    shadow-md 
    hover:bg-emerald-500 
    hover:text-white 
    transition-all duration-300 
    hover:scale-110` },
];

const FOOTER_LINKS = [
  { id: 1, label: "Privacy Policy", href: "#" },
  { id: 2, label: "Terms of Service", href: "#" },
  { id: 3, label: "Cookies", href: "#" },
];
const Footer = () => {
  return (
    <footer className="bg-[#1C4D42] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">KeenKeeper</h2>
        <p className="text-emerald-100/60 max-w-xl mx-auto text-sm mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
           <h1 className="text-xl font-bold mb-4">Social Links</h1>
        <div className="flex justify-center gap-6 mb-12">
         
            {SOCIAL_LINKS.map(({ id, Icon, url,className  }) => (
            <SocialButton
              key={id}
              Icon={Icon}
              href={url}
              label="social link"
              variant="ghost"
              className={className}
            />
          ))}
        </div>

        <div className="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between text-[10px] text-emerald-100/40">
          <p className="hover:text-white cursor-pointer">© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {FOOTER_LINKS.map(({ id, label }) => (
              <span key={id} className="hover:text-white cursor-pointer">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
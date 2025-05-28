import { RiCopyleftLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="px-3 pt-2 pb-3 text-center text-xs text-gray-600 md:px-4 md:pt-3 md:pb-6">
      <span className="inline-flex items-center gap-1">
        <RiCopyleftLine className="w-4 h-4 text-gray-500" />v
        {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;

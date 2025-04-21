import Image from "next/image";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ImportantLinkProps {
  name: string;
  url: string;
  icon?: LucideIcon;
  iconUrl?: string;
}

const ImportantLink: React.FC<ImportantLinkProps> = ({ name, url, icon: Icon, iconUrl }) => {
  return (
    <Link href={url} target="_blank">
      <div className="flex flex-col w-48 h-48 bg-primary hover:bg-[#83022b] cursor-pointer text-white text-xl font-TangoSansBold justify-center items-center gap-2 rounded-2xl">
        {Icon && <Icon className="w-16 h-16" />}
        {iconUrl && !Icon && (
          <Image
            src={iconUrl}
            alt={`A ${name} icon`}
            unoptimized
            width={100}
            height={100}
            className="w-16 h-16 select-none"
            draggable={false}
          />
        )}
        {name}
      </div>
    </Link>
  );
};

export default ImportantLink;

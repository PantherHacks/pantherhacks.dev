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
      <div className="flex flex-col w-36 h-36 sm:w-48 sm:h-48 bg-black font-UbuntuMonoBold text-primary hover:fill-primary border border-primary cursor-pointer transition-all duration-300 text-xl justify-center items-center gap-2 hover:rounded-2xl">
        {Icon && <Icon className="w-12 h-12 sm:w-16 sm:h-16" />}
        {iconUrl && !Icon && (
          <Image
            src={iconUrl}
            alt={`A ${name} icon`}
            unoptimized
            width={100}
            height={100}
            className="w-12 h-12 sm:w-16 sm:h-16 select-none"
            draggable={false}
          />
        )}
        {name}
      </div>
    </Link>
  );
};

export default ImportantLink;

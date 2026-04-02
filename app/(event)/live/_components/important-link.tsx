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
      <div className="flex h-36 w-36 cursor-pointer flex-col items-center justify-center gap-2 border border-primary bg-black font-UbuntuMonoBold text-xl text-primary transition-all duration-200 hover:rounded-2xl hover:bg-primary/10 sm:h-48 sm:w-48">
        {Icon && <Icon className="h-12 w-12 sm:h-16 sm:w-16" />}
        {iconUrl && !Icon && (
          <Image
            src={iconUrl}
            alt={`A ${name} icon`}
            unoptimized
            width={100}
            height={100}
            className="h-12 w-12 select-none sm:h-16 sm:w-16"
            draggable={false}
          />
        )}
        {name}
      </div>
    </Link>
  );
};

export default ImportantLink;

import Image from "next/image";

import "./track.css";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ITrackProps {
  name: string;
  popupNameOverride?: string;
  popupDescription: string;
}

const Track: React.FC<ITrackProps> = ({ name, popupNameOverride, popupDescription }) => {
  return (
    <div className="flex flex-col items-center space-y-4 md:hover:scale-105 transition-transform duration-300">
      <Dialog>
        <DialogTrigger>
          <Image
            src={`/images/tracks/${name.toLowerCase()}.svg`}
            width={0}
            height={0}
            alt={`${name} Track`}
            className="track-image w-48 h-48 sm:w-64 sm:h-64 select-none hidden md:block"
            draggable={false}
          />
          <Image
            src={`/images/tracks/${name.toLowerCase()}-mobile.svg`}
            width={0}
            height={0}
            alt={`${name} Track`}
            className="track-image w-48 h-48 sm:w-64 sm:h-64 select-none block md:hidden"
            draggable={false}
          />
          <p className="font-TangoSansBold text-[#FC8332] text-3xl text-center">{name}</p>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-[#FC8332] font-TangoSansBold font-bold text-2xl">
              {popupNameOverride ?? name} Track
            </DialogTitle>
            <div className="text-base flex flex-row gap-x-2">
              <p>{popupDescription}</p>
              <Image
                src={`/images/tracks/${name.toLowerCase()}.svg`}
                width={100}
                height={100}
                alt={`${name} Track`}
                className="hidden sm:block select-none self-end ml-auto"
                draggable={false}
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Track;

import Image from "next/image";
import Link from "next/link";

import "./team-member.css";

interface ITeamMemberProps {
  name: string;
  teamRole: string;
  linkedinLink: string;
}

const TeamMember: React.FC<ITeamMemberProps> = ({ name, teamRole, linkedinLink }) => {
  return (
    <div className="flex flex-col items-center space-y-4 md:hover:scale-105 transition-transform duration-300 w-36 sm:w-44">
      <Link href={linkedinLink} target="_blank" className="flex flex-col items-center space-y-3">
        <Image
          src={`/images/team-members/${name.toLowerCase().replace(" ", "-")}.png`}
          width={0}
          height={0}
          alt={`${name}`}
          className="team-member w-24 h-24 sm:w-32 sm:h-32 select-none transform-gpu rounded-3xl"
          draggable={false}
          unoptimized
        />
        <div>
          <p className="team-member-name md:pt-0 font-Xirod text-primary text-base sm:text-xl text-center">
            {name}
          </p>
          <p className="team-member-role pb-4 font-NeuePlak text-base sm:text-lg text-center">{teamRole}</p>
        </div>
      </Link>
    </div>
  );
};

export default TeamMember;

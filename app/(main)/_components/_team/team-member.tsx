import Image from "next/image";
import Link from "next/link";

interface ITeamMemberProps {
  name: string;
  teamRole: string;
  linkedinLink: string;
}

const TeamMember: React.FC<ITeamMemberProps> = ({ name, teamRole, linkedinLink }) => {
  return (
    <div className="flex flex-col items-center space-y-4 md:hover:scale-105 transition-transform duration-300">
      <Link href={linkedinLink} target="_blank" className="flex flex-col items-center space-y-1">
        <Image
          src="/images/team-members/temp-pic.jpg"
          // src={`/images/team-members/${name.toLowerCase().replace(" ", "-")}.png`} // Add this back when we get the pics
          width={0}
          height={0}
          alt={`${name}`}
          className="team-member w-32 h-32 select-none transform-gpu rounded-3xl"
          draggable={false}
        />
        <p className="team-member-name md:pt-0 font-TangoSansBold text-xl text-center">{name}</p>
        <p className="team-member-role pb-4 font-NeuePlak text-lg text-center">{teamRole}</p>
      </Link>
    </div>
  );
};

export default TeamMember;

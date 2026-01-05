'use client';

import ScrollAnimation from './ScrollAnimation';
import Image from 'next/image';

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
  };
  location: {
    city: string;
    country: string;
  };
}

interface TeamCardProps {
  member: TeamMember;
  delay?: number;
}

export default function TeamCard({ member, delay = 0 }: TeamCardProps) {
  const fullName = `${member.name.first} ${member.name.last}`;
  const location = `${member.location.city}, ${member.location.country}`;

  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-white border border-gray-300 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-400">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
            <Image
              src={member.picture.large}
              alt={fullName}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{fullName}</h3>
          <p className="text-gray-600 text-sm mb-2">{member.email}</p>
          <p className="text-gray-500 text-xs">{location}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
}


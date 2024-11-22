import React from "react";
import CEO from "../Assets/ka BOSS.jpg";
import CFO from "../Assets/EIPL4939.jpg";
import TeamCard from "./TeamCard";

const Team = () => {
  const teamMembers = [
    {
      name: "MUNYANEZA Eric",
      title: "CEO",
      description:
        "MUNYANEZA Eric, the CEO of Black Charcoal Diamond, is a visionary leader dedicated to providing sustainable energy solutions in Rwanda. With extensive experience in charcoal production and a strong commitment to eco-friendly practices, MUNYANEZA Ericleads the company’s mission to deliver high-quality charcoal that helps reduce the environmental footprint while supporting Rwanda's energy needs.",
      image: CEO,
      contact: "+250 785 623 396",
    },
    {
      name: "ASANASE Innocente",
      title: "CFO",
      description:
        "ASANASE Innocente, the CFO of Black Charcoal Diamond, oversees the financial operations of the company with a focus on sustainability and growth in Rwanda. With expertise in financial management, ASANASE Innocente ensures that the company remains financially responsible while making strategic investments in sustainable practices, further contributing to the country's eco-friendly energy solutions.",
      image: CFO,
      contact: "+250 785 623 396",
    },
  ];

  return (
    <div>
      <section id="team" className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Discover the passionate individuals behind our mission to produce
              premium, eco-friendly charcoal for Rwanda. Our team is dedicated
              to sustainability, innovation, and delivering high-quality energy
              solutions to power homes, businesses, and industries across the
              country. Together, we’re building a brighter and greener future.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 mx-[auto] ">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                title={member.title}
                description={member.description}
                image={member.image}
                contact={member.contact}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

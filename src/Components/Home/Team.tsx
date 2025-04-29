import CEO from "../Assets/ka BOSS.jpg"
import CFO from "../Assets/EIPL4939.jpg"
import TeamCard from "./TeamCard"

const Team = () => {
  const teamMembers = [
    {
      name: "MUNYANEZA Eric",
      title: "CEO",
      description:
        "MUNYANEZA Eric, the CEO of Black Charcoal Diamond, is a visionary leader dedicated to providing sustainable energy solutions in Rwanda. With extensive experience in charcoal production and a strong commitment to eco-friendly practices, MUNYANEZA Eric leads the company's mission to deliver high-quality charcoal that helps reduce the environmental footprint while supporting Rwanda's energy needs.",
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
    {
      name: "MUCYO Prince",
      title: "CTO",
      description:
        "MUCYO Prince, the CTO of Black Charcoal Diamond, is a technology enthusiast dedicated to advancing sustainable energy solutions in Rwanda. With a strong background in technology and innovation, MUNYANEZA Eric drives the company's efforts to integrate cutting-edge technologies into charcoal production, ensuring efficiency and sustainability.",
      image: CEO,
      contact: "+250 783 154 587",
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <section id="team" className="py-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-12 lg:mb-16">
            <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white relative inline-block">
              Our Team
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-600 rounded-full"></span>
            </h2>
            <p className="font-light text-gray-600 lg:mb-16 sm:text-xl dark:text-gray-300">
              Discover the passionate individuals behind our mission to produce premium, eco-friendly charcoal for
              Rwanda. Our team is dedicated to sustainability, innovation, and delivering high-quality energy solutions
              to power homes, businesses, and industries across the country. Together, we're building a brighter and
              greener future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex justify-center transform transition-transform duration-300 hover:-translate-y-2"
              >
                <TeamCard
                  name={member.name}
                  title={member.title}
                  description={member.description}
                  image={member.image}
                  contact={member.contact}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team

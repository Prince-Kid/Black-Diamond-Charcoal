import React from "react";
import char1 from "../Assets/black diaminds charcoal innovations.jpg";
import char2 from "../Assets/prod-20210611-2141056507810589040688126-jpg-500x500.webp";
const About = () => {
  return (
    <div>
      <section id="about" className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              About Us
            </h2>
            <p className="mb-4">
              At Black Charcoal Diamond, we are committed to producing premium,
              eco-friendly charcoal that fuels homes, businesses, and industries
              with efficiency and sustainability. Founded with a vision to
              provide high-quality charcoal while reducing the environmental
              impact, our mission is simple: to offer an energy solution that is
              both reliable and responsible. <br />
              With years of expertise in charcoal production, we focus on using
              sustainable practices that minimize waste and carbon emissions.
              Our charcoal is carefully crafted to ensure it burns longer,
              generates more heat, and produces less smoke—making it the ideal
              choice for both domestic use and large-scale industrial
              applications
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src={char1} alt="charcoal" />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={char2}
              alt="charcoal"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

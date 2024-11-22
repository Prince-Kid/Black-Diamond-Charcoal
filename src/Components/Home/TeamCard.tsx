import React from "react";

// Define the types for the props
interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
  contact: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  title,
  description,
  image,
  contact,
}) => {
  return (
    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 flex flex-col w-[600px]">
      {" "}
      <a href="#">
        <img
          className="w-48 rounded-lg sm:rounded-none sm:rounded-l-lg"
          src={image}
          alt={name}
        />
      </a>
      <div className="p-6">
        {" "}
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">{name}</a>
        </h3>
        <span className="text-gray-500 dark:text-gray-400">{title}</span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <ul className="flex space-x-4 sm:mt-0">
          <li>{contact}</li>
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;

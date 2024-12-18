import React from "react";
import { motion } from "framer-motion";
import akImage from "../../assets/marketing/market/1.png";
// import ramaImage from "../../../assets/marketing/team/Rama.png";
// import shakthiImage from "../../../assets/marketing/team/Shakthi.png";
// import saranImage from "../../../assets/marketing/team/Saran.png";
// import shanaImage from "../../../assets/marketing/team/Shahana.png";
// import kajaImage from "../../../assets/marketing/team/Kerusan.png";

const teamMembers = [
  {
    img: akImage,
    name: "Sashiraj Akaash",
    role: "Frontend Lead",
  },
  {
    img: ramaImage,
    name: "Rama Raguram",
    role: "Backend Developer",
  },
  {
    img: shakthiImage,
    name: "Rajendran Shakthivasan",
    role: "Full Stack Developer",
  },
  {
    img: saranImage,
    name: "Gunanesan Saranujan",
    role: "Backend Developer",
  },
  {
    img: shanaImage,
    name: "Shahana Kuganesan",
    role: "UI/UX Designer",
  },
  {
    img: kajaImage,
    name: "Kerushan Sribaskaran",
    role: "Full Stack Developer",
  },
];

const Team = () => {
  return (
    <div className="container py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 text-center"
      >
        <h1 className="text-4xl xl:text-5xl font-bold">
          Meet Our <span className="text-gray-400 underline">Team Nexus</span>
        </h1>
        <p className="text-gray-500 mt-4">The minds behind MindMend.</p>
      </motion.div>

      {/* Team Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name} // Use a unique key, typically the name
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center space-y-4"
          >
            <img
              src={member.img}
              alt={`Photo of ${member.name}`}
              className="w-36 h-36 mx-auto rounded-full object-cover"
              loading="lazy" // Adds lazy loading for better performance
            />
            <p className="text-xl font-semibold">{member.name}</p>
            <p className="text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;

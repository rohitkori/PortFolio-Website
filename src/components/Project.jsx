import { React, useEffect, useState } from "react";
import axios from "axios";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={project.date}
      iconStyle={{ background: project.iconBg }}
      icon={
        <a
          href={project.github_link}
          target="_blank"
          className="flex justify-center items-center w-full h-full"
        >
          <img
            src={project.icon}
            alt={project.role}
            className="w-[60%] h-[60%] object-contain"
          />
        </a>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{project.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {project.role}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {project.points.map((point, index) => (
          <li
            key={`project-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Project = () => {
  // const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/search/repositories?q=user:rohitkori+fork:true&sort=updated&per_page=40&type=Repositories"
        );
        if (response.status == 200) {
          setProjects(response.data);
          console.table(response.data);
          console.log(response.data);
        } else {
          console.log("Error");
        }
      } catch {
        console.log("Error");
      }
    };
    fetchProjects();
  }, []);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Project, "work");

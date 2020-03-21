import React from 'react';
import s from './Projects.module.css';
import Project from "./Project/Project";


function Projects() {
  return (
    <div className={s.projects}>
      <din className={s.container}>
        <div className={s.myProjects}>
          <h3>Мои работы</h3>
        </div>
        <div className={s.projectsBlock}>
          <Project/>
          <Project/>
        </div>
      </din>
    </div>
  );
}

export default Projects;

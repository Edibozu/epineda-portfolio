import React, { Component } from 'react';
import projects from "../projects.json"
import Project from "../components/Project/Project"

class Projects extends Component {
    state = {
        projects,
    }

    render() {
        return (
            <div>
                <h3 className="project-header text-center">Here are a few of the projects I am most proud of:</h3><br/><br/>

                {this.state.projects.map((project, idx) => (
                    <Project key={idx}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        repolink={project.repolink}
                        deployedlink={project.deployedlink}
                    />
                ))}

            </div>
        );
    }
}

export default Projects;
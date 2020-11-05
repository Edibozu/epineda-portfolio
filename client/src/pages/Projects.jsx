import React, { Component } from 'react';
import projects from "../projects.json"
import Project from "../components/Project/Project"
import "../assets/css/style.css";

class Projects extends Component {
    state = {
        projects,
    }

    render() {
        return (
            <div className="container">
                <h3 className="project-header text-center">Here are a few of the projects I am most proud of:</h3><br /><br />
                <div className="row">
                    {this.state.projects.map((project, idx) => (
                        <div className="card col-sm-4">
                            <Project key={idx}
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                repolink={project.repolink}
                                deployedlink={project.deployedlink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;
import React from 'react';
import "./Project.css";

const Project = (props) => {
    return (
        <div className="container">
            <div className="row">
                    <a href={props.image}>
                        <img className="center" alt="project-pic" src={props.image}></img>
                    </a>
                    <hr />
                    <div className="card-body">
                        <h5 className="text-center">{props.title}</h5><br/>
                        <p>{props.description}</p><br/>
                        <a className="btn btn-primary" href={props.repolink}>
                            <p>Repo Link</p>
                        </a>
                        <a className="btn btn-primary" href={props.deployedlink}>
                            <p>Deployed Link</p>
                        </a>
                    </div>
            </div>
        </div>
        
    );
};

export default Project;
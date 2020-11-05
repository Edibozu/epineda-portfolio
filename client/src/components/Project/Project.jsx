import React from 'react';
import "./Project.css";

const Project = (props) => {
    return (
        <div className="section">
            <div className="row">
                <div className="card col-sm-4" id="project-card">
                    <a href={props.image}>
                        <img className="center" alt="project-pic" src={props.image}></img>
                    </a>
                    <hr />
                    <div className="card-body">
                        <h5 className="text-center">{props.title}</h5><br/>
                        <p>{props.description}</p>
                        <a className="btn btn-primary" href={props.repolink}>
                            <p>Repo Link</p>
                        </a>
                        <a className="btn btn-primary" href={props.deployedlink}>
                            <p>Deployed Link</p>
                        </a>
                    </div>
                </div>
            </div><br/>
        </div>
        
    );
};

export default Project;
import React from 'react';
import './ProjectMobile.css'

const ProjectMobile = ({ project, enlarge, changeView, timeLineOrder }) => {

    const lastAction = Object.keys(project.timeline);
    const lastActionName = timeLineOrder[lastAction.length-1];
    const lastActionKey = lastAction[lastAction.length-1];
    return (
        <div className="project-wrap mobile">
        <div className="project-head project-mobile-head">
            <p className="search project-search project-mobile-search">
                <span>{"#"}{project.id}</span>
                <span className="font-color">{project.title}</span>
                {!enlarge ? <span onClick={changeView} className="project-down"><i className="fa fa-caret-down"></i></span> : <span onClick={changeView} className="project-down"><i className="fa fa-caret-up"></i></span>}
            </p>

            {enlarge && <p className="category font-color project-category project-mobile-category">{project.category}</p>}
        </div>
        {!enlarge && <p className="last-action">{"Last Action: "}{lastActionName}</p>}
        {!enlarge && <p className="last-action">{project.timeline[lastActionKey].date}</p>}
        {enlarge && <div className="project-middle-mobile">
            <div className="project-left-mobile">
                <h4>Timeline</h4>
                <ul className="events">
                    <li>
                        <p className={project.timeline.submitted ? "fill" : "empty"}></p>
                        <span><strong>Submitted</strong><br />{project.timeline.submitted && project.timeline.submitted.date}</span></li>
                    <li>
                        <p className={project.timeline.claimed ? "fill" : "empty"}></p>
                        <span><strong>Claimed</strong><br />{project.timeline.claimed && project.timeline.claimed.date}</span></li>
                    <li>
                        <p className={project.timeline.pending ? "fill" : "empty"}></p>
                        <span><strong>Pending Payment</strong><br />{project.timeline.pending && project.timeline.pending.date}</span></li>
                    <li>
                        <p className={project.timeline.progress ? "fill" : "empty"}></p>
                        <span><strong>In Progress</strong><br />{project.timeline.progress && project.timeline.progress.date}</span></li>
                    <li>
                        <p className={project.timeline.approval ? "fill" : "empty"}></p>
                        <span><strong>Awaiting Approval</strong><br />{project.timeline.approval && project.timeline.approval.date}</span></li>
                    <li>
                        <p className={project.timeline.completed ? "fill" : "empty"}></p>
                        <span><strong>Completed</strong><br />{project.timeline.completed && project.timeline.completed.date}</span></li>
                </ul>
            </div>
            <p className="project-button-mobile">View Project</p>
            <div className="project-right-mobile">
                <div className="project-expert-details">
                    <h4>Expert Details</h4>
                    <div className="project-expert-wrap">
                        <p><img src={project.expertDetails.imgUrl} /></p>
                        <div>
                            <p>
                                <span className={project.expertDetails.status === "active" ? "active" : "inactive"}></span>
                                <span className="project-expert-name"><strong>{project.expertDetails.name}</strong></span>
                            </p>
                            <p>{"Local Time:"}{project.expertDetails.date}</p>
                        </div>
                    </div>
                </div>
                <div className="project-description">
                    <h4>Project Description</h4>
                    <div>
                        <p>{project.description}</p>
                    </div>
                </div>
                <div className="project-notice">
                    <h4>Project Notice</h4>
                    <div><p>Go to the work room to discuss the price!</p></div>
                </div>
            </div>
        </div>}
        <div className="project-foot project-foot-mobile">
            {enlarge && <h4 className="project-lastupdate">{"Last Update: "}{project.lastUpdate}</h4>}
            <p className="project-button-mobile">View Project</p>
        </div>
    </div>
    )
}

export default ProjectMobile;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { reducerActions } from '../store';
import services from '../services';
import './Project.css'
import ProjectMobile from './ProjectMobile';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            enlarge: false,
        }
        this.changeView = this.changeView.bind(this);
    }
    changeView = () => (
        this.setState(prevState => ({ enlarge: !prevState.enlarge }))
    )
    render() {
        const { project } = this.props;
        const { enlarge } = this.state;
        console.log(project)
        return (
            <div>
                <div className="project-wrap desktop">
                    <div className="project-head">
                        <p className="search project-search">
                            <span>{"#"}{project.id}</span>
                            <span className="font-color">{project.title}</span>
                        </p>
                        <p className="category font-color project-category">{project.category}</p>
                    </div>

                    <div className="project-middle">
                        <div className="project-left">
                            <h4>Timeline</h4>
                            <ul className="events">
                                <li>
                                    <p className={project.timeline.submitted?"fill":"empty"}></p>
                                    <span><strong>Submitted</strong><br/>{project.timeline.submitted && project.timeline.submitted.date}</span></li>
                                <li>
                                    <p className={project.timeline.claimed?"fill":"empty"}></p>
                                    <span><strong>Claimed</strong><br/>{project.timeline.claimed && project.timeline.claimed.date}</span></li>
                                <li>
                                    <p className={project.timeline.pending?"fill":"empty"}></p>
                                    <span><strong>Pending Payment</strong><br/>{project.timeline.pending && project.timeline.pending.date}</span></li>
                                <li>
                                    <p className={project.timeline.progress?"fill":"empty"}></p>
                                    <span><strong>In Progress</strong><br/>{project.timeline.progress && project.timeline.progress.date}</span></li>
                                <li>
                                    <p className={project.timeline.approval?"fill":"empty"}></p>
                                    <span><strong>Awaiting Approval</strong><br/>{project.timeline.approval && project.timeline.approval.date}</span></li>
                                <li>
                                    <p className={project.timeline.completed?"fill":"empty"}></p>
                                    <span><strong>Completed</strong><br/>{project.timeline.completed && project.timeline.completed.date}</span></li>
                            </ul>
                        </div>
                        <div className="project-right">
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
                    </div>
                    <div className="project-foot">
                        <h4 className="project-lastupdate">{"Last Update: "}{project.lastUpdate}</h4>
                        <p className="project-button">View Project</p>
                    </div>
                </div>
                <ProjectMobile project={project} enlarge={enlarge} changeView={this.changeView} timeLineOrder={services.timeLineOrder}/>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {

    return {
        project: services.filterProject(props.match.params.id, state.projects),
    }
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(reducerActions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Project);
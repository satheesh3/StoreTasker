import React, { Component } from 'react';
import { reducerActions } from '../store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import services from '../services';
import Contents from './Contents';
import './Home.css'
import Dropdown from './Dropdown';
class Home extends Component {
    constructor() {
        super()
        this.state = {
            searchKey: "",
            searchResults: [],
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.getSearchResults = this.getSearchResults.bind()
    }
    componentDidMount = () => fetch('/api/mock').then((a) => (a.json())).then((a) => { this.props.actions.dataRecieve(a) });
    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.props.actions.inputChanged(e.target.value);
        services.debounce(function () { console.log("s") }, 0.2);
    }
    getSearchResults = () => {
        const { projects, filters } = this.props;
        if (!filters.key && services.isEmpty(filters.day)) {
            return projects;
        }
        let filteredProjects = projects.filter(project => project.title.toLowerCase().includes(filters.key.toLowerCase()));
        filteredProjects = services.filterProjectByDay(filters.day,filteredProjects);
        return filteredProjects;
    }
    render() {
        const { searchKey } = this.state;
        const searchResults = this.getSearchResults();
        console.log(this.props)
        
        return (
            <div className="main-block">
                <div className="home-wrapper home-border">
                    <Dropdown actions={this.props.actions}/>
                    <div className="searchbar">
                        <span className="fa fa-search"></span>
                        <input className="search-input" type="text" placeholder="Search here.." name="searchKey" value={searchKey} onChange={this.onInputChange} />
                    </div>
                </div>
                <Contents searchResults={searchResults} />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        projects: state.projects,
        filters: state.filters
    }
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(reducerActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
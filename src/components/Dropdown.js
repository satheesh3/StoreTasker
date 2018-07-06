import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reducerActions } from '../store';
import services from '../services';
import './Dropdown.css';
class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle:false,
            selectedDay:"",
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange = () => {
        this.setState(prevState => ({toggle:!prevState.toggle}))
    }
    changeDay = (filterval) => {
        this.setState(prevState => ({toggle:!prevState.toggle,selectedDay:filterval.name}));
        this.props.actions.setFilter(filterval);
    }
    render() {
        const {toggle,selectedDay} = this.state;
        const {filterProperties} = services;
        return (
            <div className="filter">
            <div className="filter-wrap" onClick={this.onChange}>
                <p>{selectedDay === ""?filterProperties[0].name:selectedDay}</p>
            </div>
            {
                toggle && <div className="options">
                    {filterProperties.map(filterval => <p onClick={() => this.changeDay(filterval)} key={filterval.value}>{filterval.name}</p>)}
                </div>
            }
            </div>
        )
    }
}


export default Dropdown;
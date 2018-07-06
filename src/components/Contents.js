import { connect } from 'react-redux';
import React from 'react'
import { Link } from 'react-router-dom';
import services from '../services'

const Contents = ({ searchResults }) => {
    const searchItems = searchResults.map(search => <tr className="table-row" key={search.id}>
        <td className="table-data">
            <p className="category font-color">{search.category}</p>
            <p className="price">{search.price}</p>
        </td>
        <td className="table-data">
            <p className="search">
                <span>{"#"}{search.id}</span>
                <Link to={`/project/${search.id}`}>
                    <span className="font-color">{search.title}</span>
                </Link>
            </p>
            <p className="text-hide">{search.description}</p>
        </td>
        <td className="table-data">
            <p className="expert-name font-color">
                {search.expertDetails.name}
            </p>
            <p className="expert-level">{"Level "}{search.expertDetails.level}{" Expert"}</p>
        </td>
        <td className="table-data">
            <p>{search.submittedDate}</p>
        </td>
        <td className="table-data">
            <p>{search.lastUpdate}</p>
        </td>
        <td className="table-data">
            <p>{search.deadline ? search.deadline : "Not Set"}</p>
        </td>
        <td className="table-data">
            <p>{search.status}</p>
        </td>
    </tr >
    )

    return (
        <div className="table-wrap">
            <table>
                <thead>
                    <tr className="header-row">
                        <th className="table-header">Category</th>
                        <th className="table-header">Project</th>
                        <th className="table-header">Expert</th>
                        <th className="table-header">Submitted</th>
                        <th className="table-header">Last Update</th>
                        <th className="table-header">Deadline</th>
                        <th className="table-header">Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {searchItems}
                </tbody>
            </table>
        </div>
    )

}


const mapStateToProps = (state, props) => {
    console.log(props)
    return {
        searchResults: props.searchResults,
    }
}

export default connect(mapStateToProps, )(Contents)
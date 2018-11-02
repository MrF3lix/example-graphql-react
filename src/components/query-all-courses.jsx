import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { connect } from 'react-redux'
import Course from './course'

const Courses = ({ componentQuery }) => (
    <div className="course__container">
        <Query query={gql(componentQuery)}>
            {(payload) => {
                if (payload.loading !== false) return <div className="loading__container"><h2>Loading...</h2></div>
                if (payload.error !== undefined) return <p>Error!</p>

                return payload.data.allCourses.map((course) => (
                    <Course course={course} key={course.id} />
                ))
            }}
        </Query>
    </div>
)

const mapStateToProps = state => ({
    componentQuery: state.global.queries.getAllCourses
})

export default connect(mapStateToProps, null)(Courses)
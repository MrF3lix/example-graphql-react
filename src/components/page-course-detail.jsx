import React from 'react'
import { connect } from 'react-redux'
import { tryGetCourseDetails } from '../actions/global-actions.jsx'

class CourseDetail extends React.Component {
    componentDidMount() {
        this.props.tryGetCourseDetails(this.props.match.params.id)
    }

    render() {
        const { course } = this.props

        return (
            <div className="inner">
                <div className="course__detail__container">
                    {!course &&
                        <div className="loading__container"><h2>Loading...</h2></div>
                    }

                    {course != null &&
                        <div className="course">
                            <div className="course__title">
                                <h1>{course.title}</h1>
                            </div>
                            <small>{course.author} - {course.topic}</small>
                            <p>{course.description}</p>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    course: state.global.selectedCourse
})

const mapDispatchToProps = dispatch => ({
    tryGetCourseDetails: id => dispatch(tryGetCourseDetails(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail)
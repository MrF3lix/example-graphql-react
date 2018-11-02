import React from 'react'
import { NavLink } from 'react-router-dom'

const Course = ({ course }) => (
    <div className="course">
        <div className="course__title">
            <h3>{course.title}</h3>
        </div>
        <small>{course.author} - {course.topic}</small>
        <p>{course.description}</p>

        <NavLink to={`/Detail/${course.id}`}>Get more information</NavLink>
    </div>
)

export default Course
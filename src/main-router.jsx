import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/page-home'
import CourseDetail from './components/page-course-detail'
import GraphQlWrapper from './components/wrapper-graphql'

const MainRouter = ({ location }) => (
    <div>
        <GraphQlWrapper>
            <Switch location={location}>
                <Route path={'/'} component={Home} exact={true} />
                <Route path={'/Detail/:id'} component={CourseDetail} exact={true} />
            </Switch>
        </GraphQlWrapper>
    </div>
)

export default withRouter(MainRouter)

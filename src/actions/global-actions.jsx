import { createGraphQLFetchRequest } from './fetch-actions'

const addVariableToString = (string, variable) => {
    return string.replace('%v', variable)
}

const updateCourseDetail = payload => ({
    type: 'UPDATE_SELECTED_COURSE',
    value: payload
})

export const tryGetCourseDetails = id => (dispatch, getState) => {
    dispatch(updateCourseDetail(null))

    const state = getState()

    const query = addVariableToString(state.global.queries.getCourse, id)
    const request = dispatch(createGraphQLFetchRequest(state.global.graphQLEndpoint, query))

    request.then((response) => {
        response.json().then((content) => {
            dispatch(updateCourseDetail(content.data.course))
        })
    })
}
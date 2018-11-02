const initalState = {
    isDevMode: true,
    selectedCourse: null,
    graphQLEndpoint: 'https://rrmm1rq3kn.lp.gql.zone/graphql',
    queries: {
        getAllCourses: `
            {
                allCourses {
                    id
                    title
                    author
                    description
                    topic
                }
            }
        `,
        getCourse: `
            {
                course(id: %v) {
                    id,
                    title,
                    author,
                    description,
                    topic
                }
            }
        `
    }
}

const global = (state = initalState, action) => {
    switch (action.type) {
        case 'UPDATE_IS_DEV':
            return {
                ...state,
                isDevMode: action.value
            }
        case 'UPDATE_SELECTED_COURSE':
            return {
                ...state,
                selectedCourse: action.value
            }
        default:
            return state
    }
}

export default global
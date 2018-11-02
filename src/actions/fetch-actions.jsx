import fetch from 'cross-fetch'

export const createGraphQLFetchRequest = (url, query) => () => {
    return fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query: query })
    })
}
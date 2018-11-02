import React from 'react'
import { connect } from 'react-redux'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const GraphQlWrapper = ({ children, graphQLEndpoint }) => (
    <ApolloProvider client={new ApolloClient({
        uri: graphQLEndpoint
    })}>
        {children}
    </ApolloProvider>
)

const mapStateToProps = state => ({
    graphQLEndpoint: state.global.graphQLEndpoint
})

export default connect(mapStateToProps, null)(GraphQlWrapper)
import React from 'react'

const Page1 = props => {
    const { id } = props.match.params
    return (
        <div>
            <h1>page1</h1>
            <p>{id}</p>
        </div>
    )
}

export default Page1

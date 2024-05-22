import React from 'react'

const Meeting = ({ params }: { params: { id: string } }) => {
    return (
        <div >
            My Meeting: {params.id}
        </div>
    )
}

export default Meeting

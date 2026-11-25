import React from 'react'

function LibraryCard({ bookInfo }) {
    return (
        <div style={{ border: "1px solid gray", marginTop: "5px", borderRadius:"10px" }}>
            <div>{bookInfo.code}</div>
            <div>{bookInfo.name}</div>
            <div>{bookInfo.price}</div>
        </div>
    )
}

export default LibraryCard
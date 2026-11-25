import React from 'react'

function LibraryHeader() {
    const libHeader = "Library Management System"
    return (
        <div>
            <header>
                <h1>{libHeader}</h1>
                <p>This is a libary system that will help you to manage books.</p>
            </header>
        </div>
    )
}

export default LibraryHeader
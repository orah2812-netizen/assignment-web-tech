
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function List() {

    const [offices, setOffices] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getOffices()
    }, [])

    function getOffices() {
        axios.get("http://localhost:8081/api/offices/all")
            .then(response => {
                setOffices(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    function deleteOffice(id) {
        if (window.confirm("Are you sure you want to delete this office?")) {
            axios.delete("http://localhost:8081/api/offices/" + id)
                .then(() => {
                    alert("Office deleted successfully")
                    getOffices()
                })
                .catch(error => {
                    console.log(error)
                    alert("Failed to delete office")
                })
        }
    }

    const filteredOffices = offices.filter(office =>
        (office.officeName || "").toLowerCase().includes(search.toLowerCase()) ||
        String(office.officeNumber || "").toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div style={{ margin: "30px" }}>
            <h2>Available Offices</h2>

            <input
                type="text"
                placeholder="Search by office name or number"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ marginBottom: "20px", padding: "10px", width: "300px" }}
            />

            <table border="1" cellPadding="10" cellSpacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Office Name</th>
                        <th>Office Number</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredOffices.map(office => (
                        <tr key={office.id}>
                            <td>{office.officeName}</td>
                            <td>{office.officeNumber}</td>
                            <td>
                                <button onClick={() => alert("Update will be implemented in the next class")}>
                                    Update
                                </button>

                                <button
                                    onClick={() => deleteOffice(office.id)}
                                    style={{ marginLeft: "10px", color: "red" }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                    {filteredOffices.length === 0 && (
                        <tr>
                            <td colSpan="3">No offices found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List

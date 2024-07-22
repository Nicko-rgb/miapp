// This file displays the data fetched from the API
import './data.css'
import React from 'react'
import { useContext } from 'react'
import { DataContext } from './DataContex'
import Navegador from '../Navegador/Nav'

const DataDisplay = () => {
    const { state } = useContext(DataContext)
    const { data, loading, error } = state

    if (loading) return <h2>Loading...</h2>

    if (error) return <p>Error: {error}</p>

    return (
        <div className='datadisplay'>
            <Navegador />
            <div className="subData">
                <h2>Data From API</h2>
                <div>
                    {data.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DataDisplay
// This file defines the DataContext and the DataProvider component
import React, { createContext, useReducer, useEffect } from 'react'

const DataContext = createContext()

const initialState = {
    data: [],
    loading: true,
    error: null
}

const dataReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: error.message })
            }
        }
        fetchData()
    }, [])

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }
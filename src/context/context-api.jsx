import { useContext, createContext, useReducer, useEffect, useState } from "react";
import { reducer } from "../utils/reducer";
import {
    SET_LOADING,
    SET_STORIES,
    HANDLE_PAGE,
    HANDLE_SEARCH,
    HANDLE_REMOVE
} from "../actions";
const appContext = createContext();
let initialState = {
    loading: true,
    hits: [],
    query: localStorage.getItem('query') ? localStorage.getItem('query') : "react",
    page: localStorage.getItem('page') ? parseInt(localStorage.getItem('page')) : 0,
    nbPages: localStorage.getItem('nbPages') ? parseInt(localStorage.getItem('nbPages')) : 0
}
const AppProvider = ({ children }) => {
    let API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";


    const [state, dispatch] = useReducer(reducer, initialState);
    const fetchStories = async (url) => {
        dispatch({ type: SET_LOADING, payload: { loading: true } })
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({ type: SET_STORIES, payload: { hits: data.hits, page: data.page, nbPages: data.nbPages, loading: false } });
        } catch (error) {
            console.log(error);
        }

    }
    const handleSearch = (query) => {
        dispatch({ type: HANDLE_SEARCH, payload: { query: query } })
    }
    const handlePage = (value) => {
        dispatch({ type: HANDLE_PAGE, payload: { value } });
    }
    const handleRemove = (id) => {
        dispatch({ type: HANDLE_REMOVE, payload: id })
    }

    useEffect(() => {
        fetchStories(`${API_ENDPOINT}${state.query}&page=${state.page}`);
    }, [state.query, state.page])


    console.log(state);
    return (
        <appContext.Provider value={{ ...state, handleSearch, handlePage, handleRemove }}>
            {children}
        </appContext.Provider>
    )
}

const useGlobal = () => {
    return useContext(appContext);
}

export { useGlobal, AppProvider };
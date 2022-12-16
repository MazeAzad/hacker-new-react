import {
    SET_LOADING,
    SET_STORIES,
    HANDLE_PAGE,
    HANDLE_SEARCH,
    HANDLE_REMOVE

} from "../actions";
export const reducer = (state, action) => {

    switch (action.type) {
        case SET_LOADING:
            {
                return { ...state, loading: true }
            }
        case SET_STORIES:
            {
                return {
                    ...state,
                    loading: action.payload.loading,
                    hits: action.payload.hits,
                    page: action.payload.page,
                    nbPages: action.payload.nbPages
                }
            }
        case HANDLE_SEARCH:
            {

                return {
                    ...state,
                    query: action.payload.query,
                    page: 0
                }
            }
        case HANDLE_PAGE:
            {
                if (action.payload.value === "next") {
                    if (state.page >= state.nbPages - 1) {
                        state.page = state.nbPages - 1
                    }
                    else {
                        state.page += 1;
                    }

                }
                else {
                    if (0 >= state.page) {
                        state.page = 0;
                    } else {
                        state.page -= 1;
                    }
                }
                return { ...state }
            }
        case HANDLE_REMOVE:
            {
                const filtered = state.hits.filter((hit) => {
                    return hit.objectID != action.payload;
                })
                state.hits = filtered;
                return { ...state };
            }
    }

}



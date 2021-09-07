import { ACTION_UPDATE_SELECTED_CARDS, ACTION_UPDATE_SELECTED_ATTRIBUTE } from '../reducers/actions';

export const initialState = {
    selectedCards: [],
    selectedAttribute: ''
}

export const gameReducer = (state, action) => {
    switch (action.type) {
        case ACTION_UPDATE_SELECTED_CARDS:
            return {
                ...state,
                selectedCards: action.value.newCards
            }
        case ACTION_UPDATE_SELECTED_ATTRIBUTE:
            return {
                ...state,
                selectedAttribute: action.value.selectedAttribute
            }
        default:
            return state;
    }
}
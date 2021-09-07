export const ACTION_UPDATE_SELECTED_CARDS = 'ACTION_UPDATE_SELECTED_CARDS';
export const updateSelectedCards = (newCards) => {
    return {
        type: ACTION_UPDATE_SELECTED_CARDS,
        value: {
            newCards
        }
    }
}

export const ACTION_UPDATE_SELECTED_ATTRIBUTE = 'ACTION_UPDATE_SELECTED_ATTRIBUTE';
export const updateSelectedAttribute = (selectedAttribute) => {
    return {
        type: ACTION_UPDATE_SELECTED_ATTRIBUTE,
        value: {
            selectedAttribute
        }
    }
}
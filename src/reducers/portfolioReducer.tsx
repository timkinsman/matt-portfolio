import {
    UPDATE_THEME
} from "../actions/types";

const INITIAL_STATE = {
    theme: "DARK"
};

// eslint-disable-next-line
export default (state = INITIAL_STATE, action: { type: string; payload: any; }) => {
    console.log(action)
    switch (action.type) {
        case UPDATE_THEME:
            return {...state, theme: action.payload }

        default:
            return state
    }
}
import { CHANGE_COUNTRY } from "../actionTypes";

const initialState = "global";

export default function(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COUNTRY: {
            return action.payload.country;
        }
        default: {
            return state;
        }
    }
}

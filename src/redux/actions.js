import { CHANGE_COUNTRY } from "./actionTypes";

export const changeCountry = country => ({
    type: CHANGE_COUNTRY,
    payload: { country }
});

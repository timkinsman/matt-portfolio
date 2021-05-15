import { UPDATE_THEME } from "./types";

export const updateTheme = (payload: string) => {
    return { type: UPDATE_THEME, payload };
};
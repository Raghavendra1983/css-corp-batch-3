export const themeInitialValues = {
    light: {
        foreground: "#000000",
        background: "#eeeeee",
        isActive: true
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222",
        isActive: false
    }
};

export const themeReducer = (state, { type, payload }) => {
    switch (type) {
        case 'ACTIVATE_LIGHT_THEME':
            return {
                light: { ...state.light, isActive: payload },
                dark: { ...state.dark, isActive: !payload }

            };

        case 'ACTIVATE_DARK_THEME':
            return {
                light: { ...state.light, isActive: !payload },
                dark: { ...state.dark, isActive: payload }
            };

        default:
            return state;
    }

};

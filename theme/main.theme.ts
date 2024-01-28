import { Platform } from "react-native";

export const mainTheme = {
    colors: {
        primary: '#1d1c1b',
        primaryLighten: '#262626',
        secondary: '#f8fafb',
        success: '#198754',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#0dcaf0',
        light: '#f8f9fa',
        dark: '#212529',
        white: '#fff',
        black: '#000',
        gray: '#a4a4a4',
    },
    fonts: {
        primary: 'Roboto, sans-serif',
        secondary: 'Roboto, sans-serif',
    },
    platformShadow: (Platform.OS === "android") ? { elevation: "3", backgroundColor: '#fff' } : { shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.14, shadowRadius: 10 },

}
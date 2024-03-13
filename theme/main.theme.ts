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

        // rajouté
        colorTest: 'rgb(99, 102, 241)',
        // colorTest: '#000',
    },
    fonts: {
        primary: 'Roboto, sans-serif',
        secondary: 'Roboto, sans-serif',
    },
    platformShadow: (elevation:number)=> (Platform.OS === "android") ? {
    elevation: elevation.toString(),
    backgroundColor: '#fff',
 } : { 
    border: '0.3px solid rgb(209, 213, 219)',
  },

 // ios shadow : { shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.14, shadowRadius: 10 },

}
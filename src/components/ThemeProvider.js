import React from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
    const [theme, setTheme] = useState('light')

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}
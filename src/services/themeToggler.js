import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../Store/Actions/ThemeAction';

const ThemeToggler = props => {
    const {
        setTheme,
        theme
    } =  props;

    const [mytheme, setMyTheme] = useState(localStorage.getItem('bdBookTheme')||'');

    useEffect(() => {
        
    }, [theme]);

    return (
        <div>
            <button onClick={()=> setTheme('dark')}>Dark theme</button>
            <button onClick={()=> setTheme('light')}>light theme</button>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        theme: state.theme,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTheme: theme => dispatch(setTheme(theme))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ThemeToggler);

export const getTheme = ()=> {
    localStorage.getItem('bdBookTheme');
}

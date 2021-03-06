import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css'

const MainNavigation = ()=>{
    return <header className={classes.header} >
        <div className={classes.logo} >Some Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to="/quotes" activeClassName={classes.active} exact>All Quotes</NavLink></li>
                <li><NavLink to="/quotes/new" activeClassName={classes.active}>NewQuote</NavLink></li>
            </ul>
        </nav>
    </header>

};

export default MainNavigation;
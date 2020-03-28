import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.list}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <div>News</div>
                </div>
                <div className={s.item}>
                    <div>Music</div>
                </div>
                <div className={s.item}>
                    <div>Settings</div>
                </div>
            </div>
            <div className={s.friends}>
                 friends
            </div>
        </nav>
    )
}

export default Navbar;
import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

type PropsType = {
    isAuth: boolean
    logout: () => void
}

const Navbar: React.FC<PropsType> = ({isAuth, logout}) => {
    return (
        <div className={s.navbar}>
            <NavLink to="/profile" className={s.link} activeClassName={s.activeItem}>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.998 18">
                    <g transform="translate(-260.001 -148)">
                        <path className="a"
                              d="M17.515,7.829h0L10.171.486a1.657,1.657,0,0,0-2.344,0L.489,7.824l-.007.008a1.656,1.656,0,0,0,1.1,2.823l.051,0h.293v5.4A1.942,1.942,0,0,0,3.867,18H6.74a.527.527,0,0,0,.527-.527V13.236a.886.886,0,0,1,.885-.885H9.846a.886.886,0,0,1,.885.885v4.236a.527.527,0,0,0,.527.527h2.873a1.942,1.942,0,0,0,1.94-1.939v-5.4h.271a1.657,1.657,0,0,0,1.173-2.828Zm0,0"
                              transform="translate(260.001 148)"/>
                    </g>
                </svg>
                <span className={s.item}>My Profile</span>
            </NavLink>

            <NavLink to="/dialogs" className={s.link} activeClassName={s.activeItem}>
                <svg className={s.dialogs} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                    <g transform="translate(-260 -207)">
                        <path className="a"
                              d="M15.525-.037H2.475A2.511,2.511,0,0,0,0,2.5v8.2a2.511,2.511,0,0,0,2.466,2.54v3.721l5.208-3.72h7.851A2.511,2.511,0,0,0,18,10.7V2.5a2.511,2.511,0,0,0-2.475-2.54ZM13.182,9.49H4.818V8.408h8.365Zm0-2.31H4.818V6.1h8.365Zm0-2.31H4.818V3.788h8.365Zm0,0"
                              transform="translate(260 207.037)"/>
                    </g>
                </svg>
                <span className={s.item}>Messages</span>
            </NavLink>

            <NavLink to="/users" className={s.link} activeClassName={s.activeItem}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                    <g transform="translate(-260 -323)">
                        <g transform="translate(274.01 330.974)">
                            <path className="a"
                                  d="M15.4,9.609H14.01a3.621,3.621,0,0,1,.219,1.245v5.261a1.551,1.551,0,0,1-.089.52h2.3A1.561,1.561,0,0,0,18,15.075V12.207A2.6,2.6,0,0,0,15.4,9.609Z"
                                  transform="translate(-14.01 -9.609)"/>
                        </g>
                        <g transform="translate(260 330.974)">
                            <path className="a"
                                  d="M3.771,10.854A3.621,3.621,0,0,1,3.99,9.609H2.6a2.6,2.6,0,0,0-2.6,2.6v2.868a1.561,1.561,0,0,0,1.559,1.559h2.3a1.552,1.552,0,0,1-.089-.52Z"
                                  transform="translate(0 -9.609)"/>
                        </g>
                        <g transform="translate(264.81 329.621)">
                            <path className="a"
                                  d="M10.591,8.255H7.409a2.6,2.6,0,0,0-2.6,2.6v5.261a.52.52,0,0,0,.52.52h7.34a.52.52,0,0,0,.52-.52V10.854A2.6,2.6,0,0,0,10.591,8.255Z"
                                  transform="translate(-4.81 -8.255)"/>
                        </g>
                        <g transform="translate(265.875 323)">
                            <path className="a" d="M9,1.365A3.124,3.124,0,1,0,12.125,4.49,3.128,3.128,0,0,0,9,1.365Z"
                                  transform="translate(-5.875 -1.365)"/>
                        </g>
                        <g transform="translate(261.176 325.839)">
                            <path className="a"
                                  d="M3.513,4.278A2.336,2.336,0,1,0,5.85,6.615,2.34,2.34,0,0,0,3.513,4.278Z"
                                  transform="translate(-1.176 -4.278)"/>
                        </g>
                        <g transform="translate(272.15 325.839)">
                            <path className="a"
                                  d="M14.487,4.278a2.337,2.337,0,1,0,2.337,2.337A2.34,2.34,0,0,0,14.487,4.278Z"
                                  transform="translate(-12.15 -4.278)"/>
                        </g>
                    </g>
                </svg>
                <span className={s.item}>Users</span>
            </NavLink>

            <NavLink to="/friends" className={s.link} activeClassName={s.activeItem}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 18">
                    <g transform="translate(-261 -264)">
                        <g transform="translate(261 264)">
                            <path className="a"
                                  d="M7.386,8.671A4.182,4.182,0,0,0,10.446,7.4a4.2,4.2,0,0,0,1.267-3.065A4.2,4.2,0,0,0,10.446,1.27,4.183,4.183,0,0,0,7.386,0,4.182,4.182,0,0,0,4.327,1.27,4.2,4.2,0,0,0,3.06,4.335,4.2,4.2,0,0,0,4.327,7.4a4.183,4.183,0,0,0,3.059,1.27Zm0,0"/>
                            <path className="a"
                                  d="M14.964,13.841a10.72,10.72,0,0,0-.146-1.137,8.97,8.97,0,0,0-.279-1.144,5.652,5.652,0,0,0-.47-1.066,4.024,4.024,0,0,0-.708-.924,3.121,3.121,0,0,0-1.017-.64,3.512,3.512,0,0,0-1.3-.235,1.317,1.317,0,0,0-.7.3c-.211.138-.458.3-.733.473a4.2,4.2,0,0,1-.949.418,3.68,3.68,0,0,1-2.321,0,4.189,4.189,0,0,1-.948-.418c-.273-.175-.52-.334-.734-.474a1.315,1.315,0,0,0-.7-.3,3.507,3.507,0,0,0-1.3.236,3.119,3.119,0,0,0-1.017.64,4.024,4.024,0,0,0-.708.924,5.663,5.663,0,0,0-.47,1.067A8.991,8.991,0,0,0,.182,12.7a10.682,10.682,0,0,0-.146,1.138C.012,14.186,0,14.543,0,14.9a2.991,2.991,0,0,0,.887,2.261A3.19,3.19,0,0,0,3.171,18h8.657a3.189,3.189,0,0,0,2.285-.834A2.989,2.989,0,0,0,15,14.9c0-.363-.012-.72-.036-1.063Zm0,0"
                                  transform="translate(0)"/>
                        </g>
                    </g>
                </svg>
                <span className={s.item}>Friends</span>
            </NavLink>

            <NavLink to="/news" className={s.link} activeClassName={s.activeItem}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                    <path className="a"
                          d="M17.357,4.5H14.143V.643A.643.643,0,0,0,13.5,0H.643A.643.643,0,0,0,0,.643V15.429A2.571,2.571,0,0,0,2.571,18H15.429A2.571,2.571,0,0,0,18,15.429V5.143A.643.643,0,0,0,17.357,4.5ZM5.143,3.214H9A.643.643,0,0,1,9,4.5H5.143a.643.643,0,1,1,0-1.286Zm5.786,12.214H3.214a.643.643,0,1,1,0-1.286h7.714a.643.643,0,0,1,0,1.286Zm0-2.571H3.214a.643.643,0,1,1,0-1.286h7.714a.643.643,0,0,1,0,1.286Zm0-2.571H3.214A.643.643,0,0,1,3.214,9h7.714a.643.643,0,0,1,0,1.286Zm0-2.571H3.214a.643.643,0,1,1,0-1.286h7.714a.643.643,0,0,1,0,1.286Zm5.786,7.714a1.286,1.286,0,0,1-2.571,0V5.786h2.571v9.643Z"/>
                </svg>
                <span className={s.item}>News</span>
            </NavLink>

            <NavLink to="/music" className={s.link} activeClassName={s.activeItem}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17.998">
                    <path className="a"
                          d="M17.76.141a.651.651,0,0,0-.541-.126L5.647,2.586a.643.643,0,0,0-.5.627v10.17a3.719,3.719,0,0,0-1.929-.527C1.443,12.856,0,14.01,0,15.428S1.443,18,3.214,18s3.214-1.153,3.214-2.571V7.586L16.714,5.3v5.512a3.719,3.719,0,0,0-1.929-.527c-1.773,0-3.214,1.153-3.214,2.571s1.441,2.571,3.214,2.571S18,14.274,18,12.856V.642A.639.639,0,0,0,17.76.141Z"
                          transform="translate(0 -0.001)"/>
                </svg>
                <span className={s.item}>Music</span>
            </NavLink>

            <NavLink to="/settings" className={s.link} activeClassName={s.activeItem}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                    <g transform="translate(-0.236)">
                        <g transform="translate(0.236)">
                            <path className="a"
                                  d="M17.924,10.973l-1.7-1.294a6.345,6.345,0,0,0,.04-.68,6.154,6.154,0,0,0-.04-.68l1.7-1.294a.8.8,0,0,0,.2-1.033L16.36,3.015a.829.829,0,0,0-1.022-.358l-2,.784a6.921,6.921,0,0,0-1.2-.68L11.824.69A.811.811,0,0,0,11.008,0H7.465A.809.809,0,0,0,6.65.684L6.345,2.762a7.134,7.134,0,0,0-1.2.68l-2.01-.786a.846.846,0,0,0-1.014.352L.349,5.989a.792.792,0,0,0,.2,1.039l1.7,1.294a5.78,5.78,0,0,0,0,1.358l-1.7,1.294a.8.8,0,0,0-.2,1.033l1.767,2.977a.828.828,0,0,0,1.022.358l2-.784a6.982,6.982,0,0,0,1.2.68l.3,2.07A.811.811,0,0,0,7.466,18h3.543a.81.81,0,0,0,.816-.684l.306-2.077a7.167,7.167,0,0,0,1.2-.681l2.01.786a.847.847,0,0,0,.3.056.817.817,0,0,0,.712-.407L18.131,12A.8.8,0,0,0,17.924,10.973ZM9.237,12a3,3,0,1,1,3.081-3A3.044,3.044,0,0,1,9.237,12Z"
                                  transform="translate(-0.236)"/>
                        </g>
                    </g>
                </svg>
                <span className={s.item}>Settings</span>
            </NavLink>

            {isAuth &&
            <div className={`${s.link} ${s.itemLogout}`} onClick={logout}>
                <svg fill="red" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 17.999 18">
                    <g transform="translate(-260 -554)">
                        <g transform="translate(260 554)">
                            <path className="a"
                                  d="M17.943,7.963a.758.758,0,0,0-.163-.245L15.531,5.47a.75.75,0,1,0-1.06,1.06l.97.97H11.25a.75.75,0,1,0,0,1.5H15.44l-.97.97a.75.75,0,1,0,1.061,1.06L17.78,8.781a.743.743,0,0,0,.163-.245A.751.751,0,0,0,17.943,7.963Z"/>
                            <path className="a"
                                  d="M12.75,10.5a.75.75,0,0,0-.75.75V15H9V3a.751.751,0,0,0-.535-.718L5.861,1.5H12V5.25a.75.75,0,0,0,1.5,0V.75A.75.75,0,0,0,12.75,0H.75A.668.668,0,0,0,.673.014.741.741,0,0,0,.355.125C.339.136.319.136.3.148S.294.161.288.166A.743.743,0,0,0,.089.4.613.613,0,0,0,.068.466.711.711,0,0,0,.009.641a.467.467,0,0,0,0,.065C.01.722,0,.735,0,.75v15a.749.749,0,0,0,.6.735l7.5,1.5A.7.7,0,0,0,8.25,18,.75.75,0,0,0,9,17.25V16.5h3.75a.75.75,0,0,0,.75-.75v-4.5A.75.75,0,0,0,12.75,10.5Z"/>
                        </g>
                    </g>
                </svg>
                <span className={s.item}>Exit from account</span>
            </div>}
        </div>
    )
}

export default connect(mapStateToProps, {logout})(Navbar);

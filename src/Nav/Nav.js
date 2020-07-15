import React from 'react'
import './nav.scss'
import {NavLink} from "react-router-dom"


export const Nav = () => {
    return (
        <>
            <nav className="nav flex-column">
                <NavLink className="nav-link text-muted" to="/">
                    <svg className="bi bi-house-fill hover" width="2em" height="2em" viewBox="0 0 20 20"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.5 12.995V16.5a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V13c0-.25-.25-.5-.5-.5H9c-.25 0-.5.25-.5.495z"/>
                        <path fillRule="evenodd" d="M15 4.5V8l-2-2V4.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                              clipRule="evenodd"/>
                    </svg>
                    <span className="spanContent active">Home</span></NavLink>
                <NavLink className="nav-link text-muted" to="/about">
                    <svg className="bi bi-person-fill hover" width="2em" height="2em" viewBox="0 0 20 20"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M5 16s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H5zm5-6a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"/>
                    </svg>
                    <span className="spanContent">About</span></NavLink>
                <NavLink className="nav-link text-muted" to="/skills">
                    <svg className="bi bi-gear-fill hover" width="2em" height="2em" viewBox="0 0 20 20"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M11.405 3.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM10 12.93a2.929 2.929 0 100-5.858 2.929 2.929 0 000 5.858z"
                              clipRule="evenodd"/>
                    </svg>
                    <span className="spanContent">Skills</span></NavLink>
                <NavLink className="nav-link text-muted" to="/works">
                    <svg className="bi bi-eye-fill hover" width="2em" height="2em" viewBox="0 0 20 20"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                        <path fillRule="evenodd"
                              d="M2 10s3-5.5 8-5.5 8 5.5 8 5.5-3 5.5-8 5.5S2 10 2 10zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                              clipRule="evenodd"/>
                    </svg>
                    <span className="spanContent">Works</span></NavLink>
                <NavLink className="nav-link text-muted" to="/contacts">
                    <svg className="bi bi-envelope-fill hover" width="2em" height="2em" viewBox="0 0 20 20"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.05 5.555L10 10.414l7.95-4.859A2 2 0 0016 4H4a2 2 0 00-1.95 1.555zM18 6.697l-5.875 3.59L18 13.743V6.697zm-.168 8.108l-6.675-3.926-1.157.707-1.157-.707-6.675 3.926A2 2 0 004 16h12a2 2 0 001.832-1.195zM2 13.743l5.875-3.456L2 6.697v7.046z"/>
                    </svg>
                    <span className="spanContent">Contacts</span></NavLink>
            </nav>
        </>
    );
}

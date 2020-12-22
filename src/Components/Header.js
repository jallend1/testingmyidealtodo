import React from 'react';

const Header = () => {
    return (
        <>
            <header className="mdl-layout__header">
                <div className="mdl-layout-icon"></div>
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout__title">To Do</span>
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation">
                        <a href="http://wwww.google.com/" className="mdl-navigation__link">Home</a>
                        <a href="http://wwww.google.com/" className="mdl-navigation__link">Archive</a>
                        <a href="http://wwww.google.com/" className="mdl-navigation__link">Templates</a>
                        <a href="http://wwww.google.com/" className="mdl-navigation__link">About</a>
                    </nav>
                </div>
            </header>
            <div className="mdl-layout__drawer">
                <span className="mdl-layout--title">To Do</span>
                <nav className="mdl-navigation">
                    <a href="https://www.google.com" className="mdl-navigation__link">Home</a>
                    <a href="https://www.google.com" className="mdl-navigation__link">Archive</a>
                    <a href="https://www.google.com" className="mdl-navigation__link">Templates</a>
                    <a href="https://www.google.com" className="mdl-navigation__link">About</a>
                </nav>
            </div>
        </>
    )
}

export default Header;
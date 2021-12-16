import React from 'react'

function MobileNavigation() {
    return (
        <div className="mobile-navigation">
            <ul className="mobile-navigation-list">
                    <li> <a href="/userpage">My Team</a></li>
                    <li> <a href="/leaderboard">Leaderboard</a></li>
                    <li> <a href="/adminpage">Admin</a></li>
                    <li> <a href="/">Log Out</a></li>
            </ul>
        </div>
    )
}

export default MobileNavigation

import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://lh3.googleusercontent.com/proxy/cSdxnuAWLCXr35YozZmy3pRuFqLa2mSAgb3ljzatZ8t5H53FpV4TQbtgm7pf-xD5wt1p6hXrIPXKaybv_YI1T8YL8t5svgMx3ovUS7Vu1pMXgNGyyv6_Nw'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src='https://www.robertwalters.com.hk/content/dam/robert-walters/global/images/article-images/digital-neon.jpg'/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

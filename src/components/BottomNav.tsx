import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface NavItem {
    to: string;
    label: string;
    shortcut: string;
}

const navItems: NavItem[] = [
    { to: '/', label: 'home', shortcut: 'h' },
    { to: '/about', label: 'abouts', shortcut: 'a' },
    { to: '/projects', label: 'projects', shortcut: 'p' },
    { to: '/blog', label: 'blogs', shortcut: 'b' },
    { to: '/contact', label: 'contact', shortcut: 'c' },
];

const BottomNav = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const { theme, toggleTheme } = useTheme();

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            // Don't trigger if typing in an input
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

            const item = navItems.find(nav => nav.shortcut === e.key.toLowerCase());
            if (item) {
                window.location.href = item.to;
            }

            // Toggle theme with 't' key
            if (e.key.toLowerCase() === 't') {
                toggleTheme();
            }
        };

        window.addEventListener('keypress', handleKeyPress);
        return () => window.removeEventListener('keypress', handleKeyPress);
    }, [toggleTheme]);

    const isActive = (path: string) => {
        if (path === '/') {
            return currentPath === '/';
        }
        return currentPath.startsWith(path);
    };

    return (
        <nav className="bottom-nav">
            <div className="bottom-nav-inner">
                {navItems.map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        className={`nav-link ${isActive(item.to) ? 'nav-link-active' : ''}`}
                    >
                        <span>
                            <span className="nav-shortcut">{item.shortcut}</span>
                            {item.label.slice(1)}
                        </span>
                    </Link>
                ))}

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="nav-link theme-toggle"
                    aria-label="Toggle theme"
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode (t)`}
                >
                    {theme === 'dark' ? (
                        // Sun icon for switching to light
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    ) : (
                        // Moon icon for switching to dark
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default BottomNav;

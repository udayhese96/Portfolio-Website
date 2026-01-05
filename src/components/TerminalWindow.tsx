import React from 'react';
import AnimatedFace from './AnimatedFace';

interface TerminalWindowProps {
    title?: string;
    tabs?: { id: string; label: string; active?: boolean; onClick?: () => void }[];
    children: React.ReactNode;
    className?: string;
    statusBar?: React.ReactNode;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
    title = 'Ghostty',
    tabs,
    children,
    className = '',
    statusBar,
}) => {
    return (
        <div className={`terminal-window ${className}`}>
            {/* Title Bar */}
            <div className="terminal-title-bar">
                <div className="terminal-controls">
                    <span className="terminal-dot terminal-dot-red"></span>
                    <span className="terminal-dot terminal-dot-yellow"></span>
                    <span className="terminal-dot terminal-dot-green"></span>
                </div>
                <span className="terminal-title">{title}</span>
                <AnimatedFace size={21} />
            </div>

            {/* Tabs (optional) */}
            {tabs && tabs.length > 0 && (
                <div className="terminal-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`terminal-tab ${tab.active ? 'terminal-tab-active' : ''}`}
                            onClick={tab.onClick}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            )}

            {/* Content */}
            <div className="terminal-content">
                {children}
            </div>

            {/* Status Bar (optional) */}
            {statusBar && (
                <div className="terminal-status-bar">
                    {statusBar}
                </div>
            )}
        </div>
    );
};

export default TerminalWindow;

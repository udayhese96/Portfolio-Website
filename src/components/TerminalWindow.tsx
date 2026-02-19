import React from 'react';
import AnimatedFace from './AnimatedFace';

interface TerminalWindowProps {
    title?: string;
    tabs?: { id: string; label: string; active?: boolean; onClick?: () => void }[];
    children: React.ReactNode;
    className?: string;
    statusBar?: React.ReactNode;
    headerAction?: React.ReactNode;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
    title = 'Ghostty',
    tabs,
    children,
    className = '',
    statusBar,
    headerAction,
}) => {
    return (
        <div className={`terminal-window ${className}`}>
            {/* Title Bar */}
            <div className="terminal-title-bar relative">
                <div className="terminal-controls">
                    <span className="terminal-dot terminal-dot-red"></span>
                    <span className="terminal-dot terminal-dot-yellow"></span>
                    <span className="terminal-dot terminal-dot-green"></span>
                </div>
                <span className="terminal-title">{title}</span>
                <div className="flex items-center gap-2 absolute right-4">
                    {headerAction}
                    <AnimatedFace size={21} />
                </div>
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

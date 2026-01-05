import { useEffect, useState, useRef } from 'react';

interface CodeLine {
    lineNumber: number;
    content: JSX.Element;
}

interface CodeTypingAnimationProps {
    lines: CodeLine[];
    speed?: number;
    onComplete?: () => void;
}

const CodeTypingAnimation = ({
    lines,
    speed = 50,
    onComplete,
}: CodeTypingAnimationProps) => {
    const [visibleLines, setVisibleLines] = useState(0);
    const hasCompletedRef = useRef(false);

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            setVisibleLines(lines.length);
            if (onComplete && !hasCompletedRef.current) {
                hasCompletedRef.current = true;
                onComplete();
            }
            return;
        }

        // Show lines one by one
        if (visibleLines < lines.length) {
            const timer = setTimeout(() => {
                setVisibleLines(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timer);
        } else if (visibleLines === lines.length && !hasCompletedRef.current) {
            hasCompletedRef.current = true;
            if (onComplete) {
                setTimeout(onComplete, 300);
            }
        }
    }, [visibleLines, lines.length, speed, onComplete]);

    return (
        <div className="code-block">
            {lines.slice(0, visibleLines).map((line, index) => (
                <div key={index} className="code-line">
                    <span className="line-number">{line.lineNumber}</span>
                    <span className="code-content">{line.content}</span>
                </div>
            ))}
            {visibleLines < lines.length && visibleLines > 0 && (
                <div className="code-line">
                    <span className="line-number">{lines[visibleLines]?.lineNumber}</span>
                    <span className="code-content">
                        <span className="typing-cursor">|</span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default CodeTypingAnimation;

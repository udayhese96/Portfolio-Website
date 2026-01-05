import { useEffect, useState, useRef } from 'react';

interface TypingAnimationProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
    className?: string;
    instantLines?: boolean; // New prop for line-by-line rendering
}

const TypingAnimation = ({
    text,
    speed = 25, // Reduced from 50ms to 25ms for faster typing
    onComplete,
    className = '',
    instantLines = false,
}: TypingAnimationProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const hasCompletedRef = useRef(false);

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            setDisplayedText(text);
            setCurrentIndex(text.length);
            setShowCursor(false);
            if (onComplete && !hasCompletedRef.current) {
                hasCompletedRef.current = true;
                onComplete();
            }
            return;
        }

        // Line-by-line mode for ASCII art
        if (instantLines) {
            const lines = text.split('\n');
            const currentLineIndex = text.slice(0, currentIndex).split('\n').length - 1;

            if (currentLineIndex < lines.length) {
                const delay = 100; // 100ms between lines

                const timer = setTimeout(() => {
                    const nextLineEnd = lines.slice(0, currentLineIndex + 1).join('\n').length;
                    setDisplayedText(text.slice(0, nextLineEnd + 1));
                    setCurrentIndex(nextLineEnd + 1);
                }, delay);

                return () => clearTimeout(timer);
            }
        } else {
            // Character-by-character mode for regular text
            if (currentIndex < text.length) {
                const randomDelay = Math.floor(Math.random() * 20) + 15; // Reduced from 40-70ms to 15-35ms

                const timer = setTimeout(() => {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    setCurrentIndex(currentIndex + 1);
                }, randomDelay);

                return () => clearTimeout(timer);
            }
        }
    }, [currentIndex, text, instantLines]);

    // Separate effect for completion to avoid race condition
    useEffect(() => {
        if (currentIndex >= text.length && currentIndex > 0 && !hasCompletedRef.current) {
            hasCompletedRef.current = true;

            // Fade out cursor after 500ms, then call onComplete
            const fadeTimer = setTimeout(() => {
                setShowCursor(false);
                if (onComplete) {
                    onComplete();
                }
            }, 500);

            return () => clearTimeout(fadeTimer);
        }
    }, [currentIndex, text.length, onComplete]);

    return (
        <span className={className} aria-live="polite">
            {displayedText}
            {showCursor && (
                <span className={`typing-cursor ${currentIndex >= text.length && currentIndex > 0 ? 'cursor-fade-out' : ''}`}>|</span>
            )}
        </span>
    );
};

export default TypingAnimation;

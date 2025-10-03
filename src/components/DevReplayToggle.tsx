import { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

/**
 * Dev Replay Toggle Component
 * Hidden by default - shows when 'dev-mode' class is added to body
 * Allows replaying the staged entrance sequence
 */
const DevReplayToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if dev mode is enabled
    const checkDevMode = () => {
      setIsVisible(document.body.classList.contains('dev-mode'));
    };

    checkDevMode();

    // Listen for dev mode changes
    const observer = new MutationObserver(checkDevMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const replaySequence = () => {
    // Clear the visited flag
    sessionStorage.removeItem('siteVisited_v1');

    // Reset body classes
    document.body.classList.remove('sequence-complete');
    document.body.classList.remove('sequence-run');

    // Reload page to trigger sequence
    window.location.reload();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        onClick={replaySequence}
        className="flex items-center gap-2 px-4 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
        style={{ fontFamily: 'Space Mono, monospace' }}
        title="Replay entrance sequence"
      >
        <RotateCcw className="w-4 h-4" />
        <span className="text-sm">REPLAY SEQUENCE</span>
      </button>
      <div className="absolute -top-12 right-0 bg-black/90 text-cyan-300 text-xs px-3 py-2 rounded border border-cyan-400/30 whitespace-nowrap">
        Dev Mode Active
      </div>
    </div>
  );
};

export default DevReplayToggle;

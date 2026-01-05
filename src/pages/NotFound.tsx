import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-medium text-[var(--terminal-highlight)] mb-4">404</h1>
        <p className="text-[var(--terminal-text-muted)] mb-8">
          Page not found
        </p>
        <Link
          to="/"
          className="text-[var(--terminal-text)] hover:text-[var(--terminal-highlight)] transition-colors"
        >
          &lt;&lt; Go back home
        </Link>
      </div>
      <BottomNav />
    </div>
  );
};

export default NotFound;

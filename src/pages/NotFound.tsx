import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center px-6 py-40">
      <h1 className="text-9xl font-black text-brand-red tracking-tighter mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-gray-400 mb-10 max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="inline-flex h-14 px-8 items-center justify-center rounded-full bg-brand-red text-white font-semibold text-lg transition-transform hover:scale-105"
      >
        Return Home
      </Link>
    </div>
  );
}

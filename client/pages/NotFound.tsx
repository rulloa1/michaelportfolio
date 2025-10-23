import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-charcoal-50 via-charcoal-100 to-charcoal-200">
      <div className="text-center px-6">
        <h1 className="text-8xl md:text-9xl font-bold text-charcoal-900 mb-4 font-display">
          404
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
        <p className="text-xl md:text-2xl text-charcoal-700 mb-2 font-display">
          Page Not Found
        </p>
        <p className="text-charcoal-600 mb-8 max-w-md mx-auto font-light">
          It seems you've ventured into unexplored territory. Let's get you back
          to the main portfolio.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 text-charcoal-900 font-semibold tracking-widest text-sm bg-gold-500 hover:bg-gold-600 transition-colors duration-300 rounded-sm shadow-lg uppercase"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

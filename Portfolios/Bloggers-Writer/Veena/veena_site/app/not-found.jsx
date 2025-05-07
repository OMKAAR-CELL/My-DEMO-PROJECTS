import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-gray-600">Oops! The page you're looking for doesn’t exist or has been moved.</p>
      <Link
        href="/"
        className="px-6 py-2 bg-black text-white rounded hover:bg-gray-900 transition"
      >
        Go back home
      </Link>
    </div>
  );
}

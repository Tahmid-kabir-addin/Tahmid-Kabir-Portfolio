'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  // Don't show the admin navigation on the login page
  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link 
                href="/"
                className="text-white font-medium hover:text-blue-400 transition-colors"
              >
                ← Back to Site
              </Link>
            </div>
            <div className="text-lg font-bold text-white">Admin Dashboard</div>
            <div className="flex space-x-4">
              <Link 
                href="/admin/analytics"
                className={`text-sm ${
                  pathname === '/admin/analytics' 
                    ? 'text-blue-400 font-medium' 
                    : 'text-gray-300 hover:text-white'
                } transition-colors`}
              >
                Analytics
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

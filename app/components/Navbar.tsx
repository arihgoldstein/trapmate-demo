import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
              Trapmate
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-black font-medium text-sm">
              Products
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-black font-medium text-sm">
              Resources
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black font-medium text-sm">
              About Us
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium text-gray-900 hover:text-gray-600">
              Login
            </Link>
            <Link
              href="/demo"
              className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-gray-900 focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}


import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-primary mb-4 block">
              Trapmate
            </Link>
            <p className="text-gray-500 max-w-sm mb-6">
              Self-Powered, Reusable Monitoring That Installs in Minutes—Anywhere You Need It.
            </p>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Trapmate. All Rights Reserved.
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products/multi-trap" className="text-gray-500 hover:text-black">Multi-Trap Solutions</Link></li>
              <li><Link href="/products/single-trap" className="text-gray-500 hover:text-black">Single-Trap Solutions</Link></li>
              <li><Link href="/products/insect" className="text-gray-500 hover:text-black">Insect Monitoring</Link></li>
              <li><Link href="/products/software" className="text-gray-500 hover:text-black">Software</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-gray-500 hover:text-black">News & Articles</Link></li>
              <li><Link href="/case-studies" className="text-gray-500 hover:text-black">Case Studies</Link></li>
              <li><Link href="/support" className="text-gray-500 hover:text-black">Support</Link></li>
              <li><Link href="/docs" className="text-gray-500 hover:text-black">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-500 hover:text-black">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-black">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-500 hover:text-black">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-black">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}


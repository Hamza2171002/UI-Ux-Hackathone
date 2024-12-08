import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full max-w-[1440px] mx-auto  bg-white">
      <div className="container mx-auto px-4 py-16 mt-32">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-blue-600 text-2xl font-bold">
              MORENT
            </Link>
            <p className="text-gray-600 mt-4 max-w-xs">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-black font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-gray-800">How it works</Link></li>
              <li><Link href="/featured" className="text-gray-600 hover:text-gray-800">Featured</Link></li>
              <li><Link href="/partnership" className="text-gray-600 hover:text-gray-800">Partnership</Link></li>
              <li><Link href="/business-relation" className="text-gray-600 hover:text-gray-800">Business Relation</Link></li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-black font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              <li><Link href="/events" className="text-gray-600 hover:text-gray-800">Events</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link></li>
              <li><Link href="/podcast" className="text-gray-600 hover:text-gray-800">Podcast</Link></li>
              <li><Link href="/invite-friend" className="text-gray-600 hover:text-gray-800">Invite a friend</Link></li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="text-black font-semibold mb-4">Socials</h3>
            <ul className="space-y-3">
              <li><Link href="/discord" className="text-gray-600 hover:text-gray-800">Discord</Link></li>
              <li><Link href="/instagram" className="text-gray-600 hover:text-gray-800">Instagram</Link></li>
              <li><Link href="/twitter" className="text-gray-600 hover:text-gray-800">Twitter</Link></li>
              <li><Link href="/facebook" className="text-gray-600 hover:text-gray-800">Facebook</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between font-semibold items-center space-y-4 md:space-y-0">
            <p className="text-gray-800">©2022 MORENT. All rights reserved</p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-800 font-semibold hover:text-gray-800">
                Privacy & Policy
              </Link>
              <Link href="/terms" className="text-gray-800 font-semibold hover:text-gray-800">
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
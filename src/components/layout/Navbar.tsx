"use client";
import Link from "next/link";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button, UserProfile } from "@/components";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfile(false);
      }
    }
    if (showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfile]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="flex items-center py-4 w-full">
        <div className="flex items-center flex-shrink-0 mr-8">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            DazaCramp
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition-colors">Categories</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          </div>

          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-64 ml-6">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none flex-1"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4 ml-8 relative">
          <Button className="relative" variant="secondary">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Button>

          <Button variant="secondary" onClick={() => setShowProfile(!showProfile)}>
            <User className="w-6 h-6 text-gray-700 hover:text-blue-600" />
          </Button>

          {showProfile && (
            <div ref={profileRef} className="absolute right-0 top-14 w-80">
              <UserProfile />
            </div>
          )}

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

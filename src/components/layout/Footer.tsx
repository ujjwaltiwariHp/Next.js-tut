import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">dazaCramp</h3>
            <p className="text-gray-300 mb-4">
              Your trusted online shopping destination with quality products
              and excellent service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white">Products</Link></li>
              <li><Link href="/categories" className="text-gray-300 hover:text-white">Categories</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-white">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-300 hover:text-white">Returns</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span className="text-gray-300">support@dazaCramp.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span className="text-gray-300">+918765489765</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span className="text-gray-300">123 Noida, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 dazaCramp. All rights reserved. Built with Next.js
          </p>
          <div className="mt-4">
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { BookOpen, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream mt-24 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-orange p-2 rounded-xl">
              <BookOpen size={20} />
            </div>
            <span className="font-bold text-lg">Read on Rent</span>
          </div>
          <p className="text-cream/60 text-sm">
            Rent. Read. Return. Making reading affordable, accessible and
            convenient — one book at a time.
          </p>
          <div className="flex gap-3 mt-4">
            <Instagram size={18} className="hover:text-orange cursor-pointer" />
            <Twitter size={18} className="hover:text-orange cursor-pointer" />
            <Facebook size={18} className="hover:text-orange cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-cream/60">
            <li><Link to="/books" className="hover:text-orange">Browse Books</Link></li>
            <li><Link to="/rewards" className="hover:text-orange">Rewards</Link></li>
            <li><Link to="/track" className="hover:text-orange">Track Order</Link></li>
            <li><Link to="/bag" className="hover:text-orange">Rental Bag</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-cream/60">
            <li>About Us</li>
            <li>Careers</li>
            <li>Warehouse Partners</li>
            <li>Delivery Partners</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-cream/60 text-sm mb-3">
            Get new arrivals & offers in your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l-lg text-navy w-full text-sm outline-none"
            />
            <button className="bg-orange px-4 rounded-r-lg text-sm font-medium">
              Join
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-cream/40 text-xs mt-12">
        © {new Date().getFullYear()} Read on Rent (ROR). All rights reserved.
      </p>
    </footer>
  );
}


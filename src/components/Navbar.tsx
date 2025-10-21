import React, { useState } from "react";
import logo from "@/assets/nextgen-logo.png"; // Adjust the path as necessary

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="NextGen Leaflets"
          className="h-14 md:h-16 w-auto object-contain"
        />
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex -ml-24 items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#hero" className="hover:text-foreground transition-colors">Home</a>
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </nav>

      {/* Action Button (Desktop) */}
      <div className="hidden md:block">
        <button className="px-4 py-2 rounded-md bg-accent text-background text-sm font-medium hover:opacity-90 transition">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-accent transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>

    {/* Mobile Menu (Slide Down) */}
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? "max-h-60 border-t border-border" : "max-h-0"
      }`}
    >
      <nav className="flex flex-col px-6 py-3 space-y-3 text-sm font-medium text-muted-foreground bg-background">
        <a href="#hero" className="hover:text-foreground transition-colors">Home</a>
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        <button className="w-full mt-2 px-4 py-2 rounded-md bg-accent text-background text-sm font-medium hover:opacity-90 transition">
          Get Started
        </button>
      </nav>
    </div>
  </header>
  );
}
// components/Footer.tsx
import { Heart, Coffee } from "lucide-react";
import Image from "next/image"; // Add this import

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo in Footer */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="LOTPUB Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                <span className="text-white">LOT</span>
                <span className="text-blue-400">PUB</span>
              </h2>
              <p className="text-gray-400 text-sm">Love Of Technology Push Us Beyond</p>
            </div>
          </div>
          
          <div className="text-center max-w-2xl">
            <p className="text-lg font-semibold mb-2">
              &ldquo;Satisfy Our Curiosity and Be The Best of the Best&rdquo;
            </p>
            <p className="text-gray-400">
              Creating interactive websites, inspiring apps, immersive games and exploring science and technology.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-500">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by</span>
            <span className="font-semibold">Mubarak, Abdullah & Ameer</span>
            <Coffee className="w-4 h-4" />
          </div>
          
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} LOTPUB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
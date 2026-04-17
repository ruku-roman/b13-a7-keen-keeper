import Link from 'next/link';
import { FaHome,FaSearch  } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-emerald-50 p-6 rounded-full mb-6">
        <FaSearch className="w-12 h-12 text-[#1C4D42] opacity-80" />
      </div>

      <h1 className="text-6xl font-black text-[#1C4D42] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        Friendship not found
      </h2>
      <p className="text-slate-500 max-w-md mb-8">
        We couldn&apos;t find the page you&apos;re looking for. It might have been moved, 
        or perhaps that connection hasn&apos;t been made yet.
      </p>

      <Link 
        href="/" 
        className="flex items-center gap-2 bg-[#1C4D42] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#153a32] transition-all shadow-md active:scale-95"
      >
        <FaHome className="w-5 h-5" />
        Back to Dashboard
      </Link>
    </div>
  );
}
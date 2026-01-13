import React from 'react';
import { NAV_ITEMS } from '../constants';

export const Navigation: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 p-10 z-[100] flex flex-col gap-12 pointer-events-none">
      {/* Top Nav */}
      <nav className="flex gap-2 items-start pointer-events-auto">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className={`
              px-5 py-2 text-[10px] font-semibold tracking-[0.15em] transition-all duration-300 uppercase
              ${item.active ? 'bg-black text-white' : 'bg-transparent text-black border border-black/10 hover:bg-black/5'}
            `}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
'use client';

import { useEffect, useRef, useState } from 'react';
import { PRODUCT_CATEGORIES } from '~/config';
import NavItem from './NavItem';

export default function NavItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, idx) => {
        const handleOpen = () => {
          if (activeIndex === idx) {
            setActiveIndex(null);
          } else {
            setActiveIndex(idx);
          }
        };
        const close = () => setActiveIndex(null);
        const isOpen = idx === activeIndex;
        return (
          <NavItem
            category={category}
            close={close}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
}

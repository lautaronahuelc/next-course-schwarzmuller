'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './nav-link.module.css';
import { useMemo } from 'react';

export default function NavLink({ children, href, ...props }) {
  const path = usePathname();
  
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${classes.Link} ${classes.active}` : classes.link}
      {...props}
    >
      {children}
    </Link>
  );
}
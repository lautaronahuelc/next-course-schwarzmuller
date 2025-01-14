'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './nav-link.module.css';
import { useMemo } from 'react';

export default function NavLink({ children, href, ...props }) {
  const path = usePathname();
  console.log('💊 [NavLink] path:', path);
  
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
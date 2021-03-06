import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/episodes">
      <a>Episodes</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
    </>
  )
}

export default Header;

'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt2, HiOutlineSearch, HiOutlineShoppingBag, HiX } from 'react-icons/hi';
import * as S from './NavigationStyles';
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // This will be dynamic later

  return (
    <>
      <S.NavContainer>
        {/* Left: Hamburger (Mobile Only) */}
        <S.Hamburger onClick={() => setIsOpen(true)}>
          <HiOutlineMenuAlt2 />
        </S.Hamburger>

        {/* Center/Left: Logo */}
        <S.Logo $hideOnMobile={false}>
         <Image src="/lumeaura.png" alt="Logo" fill style={{ objectFit: "contain" }} priority />
        </S.Logo>

        {/* Desktop Links */}
        <S.NavLinks>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/blog">Blog</Link></li>
           <li><Link href="/about us">About us</Link></li>
           <li><Link href="/Contact us">contact</Link></li>
        </S.NavLinks>

        {/* Right: Icons */}
        <S.IconsGroup>
          <HiOutlineSearch />
          <S.CartBadge>
            <HiOutlineShoppingBag />
            {cartCount > 0 && <span>{cartCount}</span>}
          </S.CartBadge>
        </S.IconsGroup>
      </S.NavContainer>

      {/* Mobile Sidebar */}
      <S.SideMenu $isOpen={isOpen}>
        <HiX onClick={() => setIsOpen(false)} style={{ alignSelf: 'flex-end', fontSize: '1.8rem' }} />
        <S.Logo>MINI-SHOP</S.Logo>
        <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
        <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
      </S.SideMenu>
    </>
  );
};

export default Navigation;
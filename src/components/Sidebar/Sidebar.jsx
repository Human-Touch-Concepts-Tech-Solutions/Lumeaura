'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  HiOutlineViewGrid, 
  HiOutlinePlusCircle, 
  HiOutlinePencilAlt, 
  HiOutlineChartBar, 
  HiOutlineClipboardList, 
  HiOutlineUsers,
  HiOutlineLogout,
  HiMenuAlt2,
  HiX
} from 'react-icons/hi';
import * as S from './SidebarStyles';


const Sidebar = ({ username = "Admin" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <S.Hamburger onClick={toggleSidebar}>
    {isOpen ? <HiX /> : <HiMenuAlt2 />}
  </S.Hamburger>

      <S.Overlay $show={isOpen} onClick={() => setIsOpen(false)} />

      <S.SidebarContainer $mobileOpen={isOpen}>
        <S.NavSection>
          <MenuLink href="/admin/dashboard" icon={<HiOutlineViewGrid />} label="Dashboard" close={toggleSidebar} />
          <MenuLink href="/admin/products/add" icon={<HiOutlinePlusCircle />} label="Create Product" close={toggleSidebar} />
          <MenuLink href="/admin/products/edit" icon={<HiOutlinePencilAlt />} label="Edit Product" close={toggleSidebar} />
          <MenuLink href="/admin/analytics" icon={<HiOutlineChartBar />} label="Analytics" close={toggleSidebar} />
          <MenuLink href="/admin/orders" icon={<HiOutlineClipboardList />} label="Order History" close={toggleSidebar} />
          <MenuLink href="/admin/customers" icon={<HiOutlineUsers />} label="Customers Data" close={toggleSidebar} />
        </S.NavSection>

        <S.BottomSection>
          <S.UserInfo>
            <div className="avatar">{username[0].toUpperCase()}</div>
            <div className="name">{username}</div>
          </S.UserInfo>
          
          <S.LogoutButton onClick={() => logoutAction()}>
            <HiOutlineLogout />
            <span>Logout</span>
          </S.LogoutButton>
        </S.BottomSection>
      </S.SidebarContainer>
    </>
  );
};

// Sub-component to keep code clean and fix the Link deprecation
const MenuLink = ({ href, icon, label, close }) => (
  <Link href={href} style={{ textDecoration: 'none' }} onClick={close}>
    <S.NavItem>
      {icon}
      <span>{label}</span>
    </S.NavItem>
  </Link>
);

export default Sidebar;
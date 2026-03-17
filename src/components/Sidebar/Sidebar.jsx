'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  HiOutlineViewGrid, HiOutlinePlusCircle, HiOutlinePencilAlt, 
  HiOutlineTrash, HiOutlineChartBar, HiOutlineClipboardList, 
  HiOutlineUsers, HiOutlineLogout, HiMenuAlt2, HiX, HiChevronRight 
} from 'react-icons/hi';
import * as S from './SidebarStyles';

const Sidebar = ({ username = "Admin" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleMobileSub = (name) => setActiveMobileSub(activeMobileSub === name ? null : name);

  return (
    <>
      <S.Hamburger onClick={toggleSidebar}>
        {isOpen ? <HiX /> : <HiMenuAlt2 />}
      </S.Hamburger>

      <S.Overlay $show={isOpen} onClick={() => setIsOpen(false)} />

      <S.SidebarContainer $mobileOpen={isOpen}>
        <S.NavSection>
          <MenuLink href="/admin/dashboard" icon={<HiOutlineViewGrid />} label="Dashboard" close={toggleSidebar} />

          <FlyoutMenu 
            icon={<HiOutlinePlusCircle />} 
            label="Create" 
            isMobileOpen={activeMobileSub === 'create'}
            onMobileClick={() => handleMobileSub('create')}
          >
            <SubLink href="/admin/products/add" label="Product" close={toggleSidebar} />
            <SubLink href="/admin/blog/create" label="Blog" close={toggleSidebar} />
          </FlyoutMenu>

          <FlyoutMenu 
            icon={<HiOutlinePencilAlt />} 
            label="Edit" 
            isMobileOpen={activeMobileSub === 'edit'}
            onMobileClick={() => handleMobileSub('edit')}
          >
            <SubLink href="/admin/products/edit" label="Product" close={toggleSidebar} />
            <SubLink href="/admin/blog/edit" label="Blog" close={toggleSidebar} />
          </FlyoutMenu>

          <FlyoutMenu 
            icon={<HiOutlineTrash />} 
            label="Delete" 
            isMobileOpen={activeMobileSub === 'delete'}
            onMobileClick={() => handleMobileSub('delete')}
          >
            <SubLink href="/admin/products/delete" label="Product" close={toggleSidebar} />
            <SubLink href="/admin/blog/delete" label="Blog" close={toggleSidebar} />
          </FlyoutMenu>

          <MenuLink href="/admin/analytics" icon={<HiOutlineChartBar />} label="Analytics" close={toggleSidebar} />
          <MenuLink href="/admin/orders" icon={<HiOutlineClipboardList />} label="Orders" close={toggleSidebar} />
          <MenuLink href="/admin/customers" icon={<HiOutlineUsers />} label="Customers" close={toggleSidebar} />
        </S.NavSection>

        <S.BottomSection>
          <S.UserInfo>
            <div className="avatar">{username[0]?.toUpperCase()}</div>
            <div className="name">{username}</div>
          </S.UserInfo>
          <S.LogoutButton>
            <HiOutlineLogout />
            <span>Logout</span>
          </S.LogoutButton>
        </S.BottomSection>
      </S.SidebarContainer>
    </>
  );
};

const MenuLink = ({ href, icon, label, close }) => (
  <Link href={href} style={{ textDecoration: 'none' }} onClick={close}>
    <S.NavItem>
      {icon}
      <span>{label}</span>
    </S.NavItem>
  </Link>
);

const FlyoutMenu = ({ icon, label, children, isMobileOpen, onMobileClick }) => (
  <S.NavItemWrapper onClick={onMobileClick}>
    <S.NavItem>
      {icon}
      <span>{label}</span>
      <S.ExpandIcon $isOpen={isMobileOpen}><HiChevronRight /></S.ExpandIcon>
    </S.NavItem>
    <S.SubMenuContainer $isOpen={isMobileOpen}>
      {children}
    </S.SubMenuContainer>
  </S.NavItemWrapper>
);

const SubLink = ({ href, label, close }) => (
  <Link href={href} style={{ textDecoration: 'none' }} onClick={close}>
    <S.SubNavItem>{label}</S.SubNavItem>
  </Link>
);

export default Sidebar;
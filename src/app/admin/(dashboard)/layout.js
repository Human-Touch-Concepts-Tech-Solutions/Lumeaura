'use client';

import Sidebar from '@/components/Sidebar/Sidebar';
import styled from 'styled-components';

// Create a styled wrapper for the main content
const MainContent = styled.main`
  flex: 1;
  width: 100%;
  min-height: 100vh;
  background: #fff;
  transition: margin-left 0.3s ease;

  @media (min-width: 769px) {
    margin-left: 70px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const LayoutWrapper = styled.div`
  display: flex;
`;

export default function AdminLayout({ children }) {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
    </LayoutWrapper>
  );
}
'use client';
import Link from 'next/link';
import { 
  HiOutlineCube, 
  HiOutlineCurrencyDollar, 
  HiOutlineUsers,
  HiOutlinePlus,
  HiOutlineDocumentText,
  HiOutlinePencil
} from 'react-icons/hi';
import * as S from './DashboardStyles';

const Dashboard = ({ username = "Admin" }) => {
  return (
    <S.DashboardContainer>
      <S.Header>
        <h1>Welcome, {username}</h1>
        <p>Lumeaura Performance Overview</p>
      </S.Header>

      {/* Main Stats */}
      <S.StatsGrid>
        <StatItem icon={<HiOutlineCube />} label="Total Products" value="124" />
        <StatItem icon={<HiOutlineCurrencyDollar />} label="Total Sales" value="$12,450" />
        <StatItem icon={<HiOutlineUsers />} label="Total Customers" value="850" />
      </S.StatsGrid>

      {/* Quick Actions */}
      <S.QuickActions>
  <h2>Quick Actions</h2>
  <div className="button-group">
    <S.ActionButton>
      <Link href="/admin/products/add">
        <HiOutlinePlus /> <span>Add New Product</span>
      </Link>
    </S.ActionButton>
    
    <S.ActionButton $secondary>
      <Link href="/admin/blog/create">
        <HiOutlineDocumentText /> <span>Create Blog Post</span>
      </Link>
    </S.ActionButton>

    <S.ActionButton $secondary>
      <Link href="/admin/blog/edit">
        <HiOutlinePencil /> <span>Edit Blog Post</span>
      </Link>
    </S.ActionButton>
  </div>
</S.QuickActions>
    </S.DashboardContainer>
  );
};

// Internal sub-component for stats to keep main code clean
const StatItem = ({ icon, label, value }) => (
  <S.StatCard>
    <div className="icon-box">{icon}</div>
    <div className="details">
      <p>{label}</p>
      <h3>{value}</h3>
    </div>
  </S.StatCard>
);

export default Dashboard;
import Link from 'next/link';
import { HiOutlinePlus, HiOutlineShoppingBag, HiOutlineCube } from 'react-icons/hi';

export default function DashboardPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'var(--body)' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--heading)', fontSize: '2rem', color: 'var(--charcoal)' }}>
          Welcome, Admin
        </h1>
        <p style={{ color: '#666' }}>Overview of Lumeaura Store</p>
      </header>

      {/* Quick Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <StatCard icon={<HiOutlineCube />} label="Total Products" value="0" />
        <StatCard icon={<HiOutlineShoppingBag />} label="Recent Orders" value="0" />
      </div>

      {/* Quick Actions */}
      <div style={{ background: '#F7F7F5', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Quick Actions</h2>
        <Link 
          href="/admin/products/add" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'var(--gold)', 
            color: 'white', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
          <HiOutlinePlus /> Add New Product
        </Link>
      </div>
    </div>
  );
}

// Simple internal component for the stats
function StatCard({ icon, label, value }) {
  return (
    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ fontSize: '2rem', color: 'var(--gold)' }}>{icon}</div>
      <div>
        <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>{label}</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>{value}</p>
      </div>
    </div>
  );
}
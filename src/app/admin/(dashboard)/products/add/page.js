import ProductForm from '@/components/ProductForm/ProductForm';

export default function CreateProductPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--heading)', fontSize: '2rem' }}>Add New Product</h1>
        <p style={{ color: '#666' }}>Create a new luxury entry for the Lumeaura catalog.</p>
      </header>
      
      <ProductForm />
    </div>
  );
}
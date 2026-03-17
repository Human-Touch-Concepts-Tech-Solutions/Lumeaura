import BlogForm from '@/components/BlogForm/BlogForm';

export default function CreateBlogPage() {
  return (
    <div style={{ padding: '3rem 1rem', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto 2rem auto' }}>
        <h1 style={{ fontFamily: 'var(--heading)', fontSize: '2.5rem', color: '#1a1a1a' }}>
          Create Blog Post
        </h1>
        <p style={{ color: '#666', marginTop: '0.5rem' }}>
          Share the latest stories, trends, and updates with the Lumeaura community.
        </p>
      </div>
      
      <BlogForm />
    </div>
  );
}
'use client';
import { useState } from 'react';
import { HiOutlinePhotograph, HiOutlinePlus, HiOutlineTrash, HiX } from 'react-icons/hi';
import * as S from './BlogFormStyles';

const BlogForm = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    author: '',
    category: '',
  });

  const [images, setImages] = useState([]); // File objects
  const [previews, setPreviews] = useState([]); // Preview URLs
  const [links, setLinks] = useState([{ label: '', url: '' }]);

  // Image Upload Logic (Unlimited)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImages([...images, ...files]);
    setPreviews([...previews, ...newPreviews]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setPreviews(previews.filter((_, i) => i !== index));
  };

  // Dynamic Links Logic
  const addLink = () => setLinks([...links, { label: '', url: '' }]);
  
  const updateLink = (index, field, value) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  const removeLink = (index) => setLinks(links.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...blogData, links, images });
    // Proceed to Server Action or API call
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Section>
        <h3>Main Content</h3>
        <S.FormGroup>
          <label>Blog Title</label>
          <input 
            type="text" 
            placeholder="e.g. The Evolution of Gold Craftsmanship" 
            onChange={(e) => setBlogData({...blogData, title: e.target.value})}
            required 
          />
        </S.FormGroup>
        <S.FormGroup>
          <label>Category</label>
          <input 
            type="text" 
            placeholder="Jewelry Trends, Lifestyle, etc." 
            onChange={(e) => setBlogData({...blogData, category: e.target.value})}
          />
        </S.FormGroup>
        <S.FormGroup>
          <label>Article Body</label>
          <textarea 
            placeholder="Write your story here..." 
            onChange={(e) => setBlogData({...blogData, content: e.target.value})}
            required
          />
        </S.FormGroup>
      </S.Section>

      <S.Section>
        <h3>Article Media</h3>
        <S.ImageGrid>
          {previews.map((src, i) => (
            <S.Preview key={i}>
              <img src={src} alt="Preview" />
              <button type="button" onClick={() => removeImage(i)}><HiX /></button>
            </S.Preview>
          ))}
          <S.ImageBox>
            <HiOutlinePhotograph size={30} />
            <span>Add Media</span>
            <input type="file" multiple accept="image/*" onChange={handleImageChange} />
          </S.ImageBox>
        </S.ImageGrid>
      </S.Section>

      <S.Section>
        <h3>Resources & Links</h3>
        {links.map((link, i) => (
          <S.LinkRow key={i}>
            <div className="label-input">
              <label>Label</label>
              <input 
                type="text" 
                placeholder="Source Name" 
                value={link.label}
                onChange={(e) => updateLink(i, 'label', e.target.value)}
              />
            </div>
            <div className="url-input">
              <label>URL</label>
              <input 
                type="url" 
                placeholder="https://..." 
                value={link.url}
                onChange={(e) => updateLink(i, 'url', e.target.value)}
              />
            </div>
            <button type="button" onClick={() => removeLink(i)}>
              <HiOutlineTrash />
            </button>
          </S.LinkRow>
        ))}
        <S.AddButton type="button" onClick={addLink}>
          <HiOutlinePlus /> Add External Link
        </S.AddButton>
      </S.Section>

      <S.SubmitButton type="submit">Publish Blog Post</S.SubmitButton>
    </S.FormContainer>
  );
};

export default BlogForm;
'use client';
import { useState } from 'react';
import { 
  HiOutlineCloudUpload, 
  HiX, 
  HiOutlinePlusCircle, 
  HiOutlineTrash 
} from 'react-icons/hi';
import * as S from './ProductFormStyles';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Necklaces',
    available_quantity: 0,
    video_url: '',
    colors: [],
    sizes: [],
    product_type: []
  });

  const [images, setImages] = useState([]); // File objects
  const [previews, setPreviews] = useState([]); // Preview URLs
  const [tagInputs, setTagInputs] = useState({ colors: '', sizes: '', product_type: '' });

  // Handle local image selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 4) {
      alert("Maximum 4 images allowed for luxury listings.");
      return;
    }

    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...files]);
    setPreviews(prev => [...prev, ...newPreviews]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    // Revoke URL to prevent memory leaks
    URL.revokeObjectURL(previews[index]);
    setPreviews(previews.filter((_, i) => i !== index));
  };

  // Handle JSONB Tag fields (Colors, Sizes, Type)
  const handleAddTag = (e, field) => {
    if (e.key === 'Enter' && tagInputs[field].trim()) {
      e.preventDefault();
      if (!formData[field].includes(tagInputs[field].trim())) {
        setFormData({ 
          ...formData, 
          [field]: [...formData[field], tagInputs[field].trim()] 
        });
      }
      setTagInputs({ ...tagInputs, [field]: '' });
    }
  };

  const removeTag = (field, index) => {
    const updated = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Images to upload:", images);
    // Next Step: Connect to Server Action
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      {/* Left Column */}
      <div>
        <S.Section>
          <h3>General Information</h3>
          <S.FormGroup>
            <label>Product Name</label>
            <input 
              type="text" 
              placeholder="e.g. Lumeaura 18K Radiant Necklace" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>Description</label>
            <textarea 
              placeholder="Describe the craftsmanship and materials..." 
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </S.FormGroup>
        </S.Section>

        <S.Section>
          <h3>Product Media</h3>
          <p style={{fontSize: '0.85rem', color: '#666', marginBottom: '1.5rem'}}>
            Upload up to 4 images. JPG, PNG or WebP recommended.
          </p>
          
          <S.UploadGrid>
            {previews.map((src, i) => (
              <S.PreviewCard key={i}>
                <img src={src} alt="Preview" />
                <button type="button" onClick={() => removeImage(i)}><HiX /></button>
              </S.PreviewCard>
            ))}
            
            {images.length < 4 && (
              <S.UploadBox>
                <HiOutlineCloudUpload />
                <span>Add Image</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  multiple 
                  onChange={handleFileChange} 
                />
              </S.UploadBox>
            )}
          </S.UploadGrid>

          <S.FormGroup style={{marginTop: '2rem'}}>
            <label>Video Review URL (Optional)</label>
            <input 
              type="text" 
              placeholder="YouTube or Vimeo Link" 
              value={formData.video_url}
              onChange={(e) => setFormData({...formData, video_url: e.target.value})}
            />
          </S.FormGroup>
        </S.Section>

        <S.Section>
          <h3>Attributes & Variants</h3>
          <S.FormGroup>
            <label>Available Colors (Press Enter to add)</label>
            <S.TagInputContainer>
              {formData.colors.map((tag, i) => (
                <div key={i} className="tag">
                  {tag} <button type="button" onClick={() => removeTag('colors', i)}><HiX /></button>
                </div>
              ))}
              <input 
                type="text" 
                value={tagInputs.colors}
                placeholder="e.g. Rose Gold"
                onChange={(e) => setTagInputs({...tagInputs, colors: e.target.value})}
                onKeyDown={(e) => handleAddTag(e, 'colors')}
              />
            </S.TagInputContainer>
          </S.FormGroup>

          <S.FormGroup>
            <label>Available Sizes</label>
            <S.TagInputContainer>
              {formData.sizes.map((tag, i) => (
                <div key={i} className="tag">
                  {tag} <button type="button" onClick={() => removeTag('sizes', i)}><HiX /></button>
                </div>
              ))}
              <input 
                type="text" 
                value={tagInputs.sizes}
                placeholder="e.g. 18 inch, Large"
                onChange={(e) => setTagInputs({...tagInputs, sizes: e.target.value})}
                onKeyDown={(e) => handleAddTag(e, 'sizes')}
              />
            </S.TagInputContainer>
          </S.FormGroup>
        </S.Section>
      </div>

      {/* Right Column */}
      <div>
        <S.Section>
          <h3>Inventory & Pricing</h3>
          <S.FormGroup>
            <label>Base Price ($)</label>
            <input 
              type="number" 
              step="0.01" 
              placeholder="0.00" 
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              required 
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>Stock Quantity</label>
            <input 
              type="number" 
              placeholder="0" 
              value={formData.available_quantity}
              onChange={(e) => setFormData({...formData, available_quantity: e.target.value})}
            />
          </S.FormGroup>
          <S.FormGroup>
            <label>Category</label>
            <select 
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="Necklaces">Necklaces</option>
              <option value="Rings">Rings</option>
              <option value="Bracelets">Bracelets</option>
              <option value="Earrings">Earrings</option>
            </select>
          </S.FormGroup>
        </S.Section>

        <S.SubmitButton type="submit">
          Publish Product
        </S.SubmitButton>
      </div>
    </S.FormContainer>
  );
};

export default ProductForm;
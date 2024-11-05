// src/components/StoryForm.js
import React, { useState, useEffect } from 'react';

const StoryForm = ({ onSave, selectedStory, onCancel }) => {
  const [name, setName] = useState('');
  const [imageFileName, setImageFileName] = useState('');
  const [iconFileName, setIconFileName] = useState('');
  const [isViewed, setIsViewed] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [iconFile, setIconFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [iconPreview, setIconPreview] = useState('');

  useEffect(() => {
    if (selectedStory) {
      setName(selectedStory.name);
      setImageFileName(selectedStory.imageFileName);
      setIconFileName(selectedStory.iconFileName);
      setIsViewed(selectedStory.isViewed);
      setImagePreview(`/images/${selectedStory.imageFileName}`);
      setIconPreview(`/icons/${selectedStory.iconFileName}`);
    }
  }, [selectedStory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, imageFileName, iconFileName, isViewed, imageFile, iconFile });
  };

  const handleReset = () => {
    setName('');
    setImageFileName('');
    setIconFileName('');
    setIsViewed(false);
    setImageFile(null);
    setIconFile(null);
    setImagePreview('');
    setIconPreview('');
    onCancel();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFileName(file.name);
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIconFileName(file.name);
      setIconFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <h2 className="card-title">{selectedStory ? 'Edit Story' : 'Add Story'}</h2>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter story name" 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image File</label>
            <input 
              type="file" 
              className="form-control" 
              accept="image/*" 
              onChange={handleImageUpload} 
            />
            {imageFileName && <p>Selected Image: {imageFileName}</p>}
            {imagePreview && <img src={imagePreview} alt="Image Preview" style={{ width: '100px', height: 'auto', marginTop: '10px' }} />}
          </div>
          <div className="mb-3">
            <label className="form-label">Icon File</label>
            <input 
              type="file" 
              className="form-control" 
              accept="image/*" 
              onChange={handleIconUpload} 
            />
            {iconFileName && <p>Selected Icon: {iconFileName}</p>}
            {iconPreview && <img src={iconPreview} alt="Icon Preview" style={{ width: '50px', height: 'auto', marginTop: '10px' }} />}
          </div>
          <div className="mb-3 form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              checked={isViewed} 
              onChange={(e) => setIsViewed(e.target.checked)} 
            />
            <label className="form-check-label">Viewed</label>
          </div>
          <button type="submit" className="btn btn-primary me-2">
            {selectedStory ? 'Update' : 'Add'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default StoryForm;

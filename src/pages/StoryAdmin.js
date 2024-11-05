import React, { useState, useEffect } from 'react';
import StoryList from '../components/StoryList';
import StoryForm from '../components/StoryForm';
import { fetchStories, addStory, updateStory, deleteStory } from '../services/storyService';

const StoryAdmin = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadStories();
  }, []);

  const loadStories = async () => {
    const data = await fetchStories();
    setStories(data);
  };

  const handleSave = async (storyData) => {
    if (selectedStory) {
      await updateStory(selectedStory._id, storyData);
    } else {
      await addStory(storyData);
    }
    loadStories();
    handleCloseModal();
  };

  const handleEdit = (story) => {
    setSelectedStory(story);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    await deleteStory(id);
    loadStories();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStory(null);
  };

  return (
    <div>
      <h1>Story Management</h1>
      <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
        Add Story
      </button>
      <StoryList stories={stories} onDelete={handleDelete} onEdit={handleEdit} />
      
      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedStory ? 'Edit Story' : 'Add Story'}</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <StoryForm onSave={handleSave} selectedStory={selectedStory} onCancel={handleCloseModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryAdmin;

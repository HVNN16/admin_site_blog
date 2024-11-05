// src/components/StoryList.js
import React from 'react';

const StoryList = ({ stories, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Story List</h2>
      <div className="list-group">
        {stories.map((story) => (
          <div key={story._id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3>{story.name}</h3>
                <img src={`/images/${story.imageFileName}`} alt={story.name} width="100" className="me-2" />
                <img src={`/icons/${story.iconFileName}`} alt={`${story.name} icon`} width="50" className="me-2" />
                <p>Viewed: {story.isViewed ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <button onClick={() => onEdit(story)} className="btn btn-warning me-2">
                  Edit
                </button>
                <button onClick={() => onDelete(story._id)} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryList;

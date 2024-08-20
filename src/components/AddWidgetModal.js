import React from 'react';

const AddWidgetModal = ({ isOpen, onClose, category, onWidgetAdd }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Personalize your dashboard by adding the following widget</h2>
        <div>
          {category.widgets.map(widget => (
            <div key={widget.id}>
              <input 
                type="checkbox" 
                id={widget.id} 
                name={widget.name} 
                value={widget.id} 
                onChange={(e) => onWidgetAdd(e.target.value)}
              />
              <label htmlFor={widget.id}>{widget.name}</label>
            </div>
          ))}
          <hr></hr>
          <p>Image</p>
          <form action="/action_page.php">
  <input type="file" id="myFile" name="filename" />
  <input type="submit" />
</form>
          <hr></hr>
          <p>Ticket</p>
        </div>
        <button onClick={onClose}>Confirm</button>
      </div>
    </div>
  );
};

export default AddWidgetModal;
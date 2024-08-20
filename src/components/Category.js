import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';
import '../components/Dashboard.css';

const Category = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  const handleAddWidgetClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleWidgetAdd = (widgetId) => {
    setSelectedWidgets([...selectedWidgets, widgetId]);
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
        <button className="buttonaddwidget" onClick={handleAddWidgetClick}>Add Widget</button>
      </div>
      <AddWidgetModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        category={category} 
        onWidgetAdd={handleWidgetAdd} 
      />
    </div>
  );
};

export default Category;

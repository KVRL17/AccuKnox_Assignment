// Dashboard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from './Category';
import { setCategories } from '../store/widgetSlice';
import '../components/Dashboard.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.widgets.categories);

  useEffect(() => {
  }, [dispatch]);

  return (
    <div className="dashboard">
      <div class="dashboard-header">
        <h1>CNAPP Dashboard</h1>
        <div class="controls">
            <button class="add-widget">Add Widget +</button>
            <div class="dropdown">
                <button class="dropdown-btn">Last 2 days <span class="caret">▼</span></button>
                <div class="dropdown-content">
                    <a href="#">Last 7 days</a>
                    <a href="#">Last 30 days</a>
                    <a href="#">Custom Range</a>
                </div>
            </div>
            <button class="options-btn">⋮</button>
        </div>
    </div>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;
import { createSlice } from '@reduxjs/toolkit';
import dashboardData from '../data/dashboardData.json';

const initialState = {
  categories: dashboardData.categories,
};

export const widgetSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
  },
});

export const { setCategories, addWidget, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
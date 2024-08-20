// Widget.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store/widgetSlice';
import '../components/Dashboard.css';
import '../components/widget.css';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    document.querySelector(`.widget-${widget.id}`).classList.add('removing');

    setTimeout(() => {
      dispatch(removeWidget({ categoryId, widgetId: widget.id }));
    }, 300);
  };

  return (
    <div className={`widget widget-${widget.id}`}>
      <h3>{widget.name}</h3>
      <p>{widget.content}</p>
      {widget.name === "Cloud Accounts" && (
        <div className="chart">
          <div className="circle">
            <div className="connected"></div>
            <div className="not-connected"></div>
            <div className="total">2<br />Total</div>
          </div>
          <div className="legend">
            <div className="connected-legend">Connected (2)</div>
            <div className="not-connected-legend">Not Connected (2)</div>
          </div>
        </div>
      )}
      <button className="buttonx" onClick={handleRemove}>✖</button>
    </div>
  );
};

export default Widget;
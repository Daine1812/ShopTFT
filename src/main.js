import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Nếu bạn muốn thêm Tailwind CSS qua file CSS

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
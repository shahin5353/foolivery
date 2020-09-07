import React from 'react';
import AdminHeader from '../component/AdminHeader.jsx/AdminHeader';
import Dashboard from '../component/Dashboard/Dashboard';

const DashboardPage = () => {
    return (
        <div className="container">
            <AdminHeader/>
            <Dashboard/>
        </div>
    );
};

export default DashboardPage;
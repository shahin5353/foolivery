import React from 'react';
import AddNewItem from '../../admin/component/AddNewItem/AddNewItem'
import AdminHeader from '../component/AdminHeader.jsx/AdminHeader';

const AddItemPage = () => {
    return (
        <div className="container">
            <AdminHeader/>
            <AddNewItem/>
           </div>
    );
};

export default AddItemPage;
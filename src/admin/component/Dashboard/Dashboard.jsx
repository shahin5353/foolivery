import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSpinner, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItems, deleteItem, updateItem } from "../../../redux";


const Dashboard = () => {
  const itemsData = useSelector((state) => state.items);
  const deleteItemFeedback = useSelector(state=>state.deleteItem.status);
  const updateItemFeedback = useSelector(state=>state.updateItem.status);
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch(fetchItems())]);
  return (
    <div className="container">
          {
                deleteItemFeedback==="pending" ?
                <div className="alert alert-primary" role="alert"> Please Wait, Delete Request Pending </div>
                :
                deleteItemFeedback==="success" ?
                <div className="alert alert-danger" role="alert"> Item has been Deleted Successfully </div>
                :
                deleteItemFeedback==="error" &&
                <div className="alert alert-warning" role="alert"> Something Error, Can't Delete Right Now </div>
              }
            {
                updateItemFeedback==="pending" ?
                <div className="alert alert-primary" role="alert"> Please Wait, Update Request Pending </div>
                :
                updateItemFeedback==="success" ?
                <div className="alert alert-danger" role="alert"> Item has been Updated Successfully </div>
                :
                updateItemFeedback==="error" &&
                <div className="alert alert-warning" role="alert"> Something Error, Can't Update Right Now </div>
              }
        <table id="dashboardTable" className="table table-dark table-striped table-borderless">

        <thead>
            <tr>
                <th scope="col" className="py-3">Sr. No</th>
                <th scope="col" className="py-3">Id</th>
                <th scope="col" className="py-3">Title</th>
                <th scope="col" className="py-3">Category</th>
                <th scope="col" className="py-3">Price</th>
                <th scope="col" className="py-3">Status</th>
                <th scope="col" className="py-3">Action</th>
            </tr>
        </thead>
        <tbody>
        {
            itemsData.loading ?
            <tr>
              <td className="py-5" colSpan="7"><h4 className="text-center"> <FontAwesomeIcon icon={faSpinner} className="mr-3"/> Loading Data, Please Wait</h4></td>
            </tr>
            :
            itemsData.items ?
            itemsData.items.map((item,index)=>
                <tr key={item._id}>
                <th scope="row">{index+1}</th>
                <td>{item._id}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                {
                    item.status === "true" &&
                    <select className="form-control-sm select bg-success text-white" name="status" onChange={()=> dispatch(updateItem(item._id,{status:"false"}))}>
                    <option>Enabled</option>
                    <option value="false">Disabled</option>
                    </select>
                }
                    {
                    item.status === "false" &&
                    <select className="form-control-sm select bg-danger text-white" name="status"  onChange={()=> dispatch(updateItem(item._id,{status:"true"}))}>
                    <option>Disabled</option>
                    <option value="true">Enabled</option>
                    </select>
                }
                </td>
                <td><button onClick={()=> dispatch(deleteItem(item._id))} className="btn btn-sm"><FontAwesomeIcon className="text-danger" icon={faTrash}/></button></td>
            </tr>
                )
            :
            <tr>
            <td className="py-5" colSpan="7"><h4 className="text-center"> <FontAwesomeIcon icon={faExclamationTriangle} className="mr-3"/> Can't Load Data, Please Try Again</h4></td>
          </tr>
        }

</tbody>
</table>
    </div>
  );
};

export default Dashboard;
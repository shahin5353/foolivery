import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../redux';

const AddNewItem = () => {
  const { register, handleSubmit, errors } = useForm();
  const addItemFeedback = useSelector(state=>state.addItem.status)
  const dispatch = useDispatch();
  const onSubmit = (data, e) => {
    const {title,description,category,deliveryTime,spoonQuantity,weight,price,img} = data;
    const newData = {title,description,category,deliveryTime,spoonQuantity,weight,price,img};
    newData.status = "true";
    dispatch(addItem(newData));
  }
  return (
    <div className="container">
     <div className="bg-warning px-lg-5 py-5 px-2">
     <h1 className="text-center text-uppercase pb-3">Add New Item</h1>
     
      <form onSubmit={handleSubmit(onSubmit)} className="mx-lg-5">
              <div className="form-group mb-2">
                  <input type="text" className="form-control" name="title" ref={register({ required: true })} placeholder="Food Title"/>
                  {errors.title && <span className="text-danger">Food Title is required</span>}
                </div>
                <div className="form-group mb-2">
                  <textarea type="text" className="form-control" name="description" ref={register({ required: true, minLength:300, maxLength:500 })} placeholder="Food Description" rows="5"/>
                  {errors.description?.type === "required" && <span className="text-danger">Food Description is required</span>}
                  {errors.description?.type === "minLength" && <span className="text-danger">Minimum 300 Characters</span>}
                  {errors.description?.type === "maxLength" && <span className="text-danger">Maximum 500 characters</span>}
                </div>
                <div className="d-flex flex-row mb-2">
              
              <div className="form-group col-6 pr-3">
                <select className="form-control" name="category" ref={register({ required: true })} placeholder="price">
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
                {errors.category && <span className="text-danger">Food Category is required</span>}
              </div>
              <div className="form-group col-6">
                <input type="number" className="form-control" name="price" ref={register({ required: true, min: 1 })} placeholder="price"/>
                {errors.price?.type === "required" && <span className="text-danger">Food Price is required</span>}
                {errors.price?.type === "min" && <span className="text-danger">Minimum Food Price is 1$</span>}
              </div>
            </div>
                <div className="d-flex flex-row mb-2">
              <div className="form-group col-4 pr-2">
                  <input type="number" className="form-control" name="deliveryTime" ref={register({ required: true, min: 5 })} placeholder="Delivery time"/>
                  {errors.deliveryTime?.type === "required" && <span className="text-danger">Food Delivery Time is required</span>}
                  {errors.deliveryTime?.type === "min" && <span className="text-danger">Food Delivery Time can't less than 5 minutes</span>}
                </div>
                <div className="form-group col-4 pr-2">
                  <input type="number" className="form-control" name="spoonQuantity" ref={register({ required: true, min:1 })} placeholder="Spoon Quantity"/>
                  {errors.spoonQuantity?.type === "required" && <span className="text-danger">Spoon Quantity is required</span>}
                  {errors.spoonQuantity?.type === "min" && <span className="text-danger">Spoon Quantity can't less than 1</span>}
                </div>
                <div className="form-group col-4">
                  <input type="number" className="form-control" name="weight"  ref={register({ required: true, min:100 })} placeholder="Weight in Gram"/>
                  {errors.weight?.type === "required" && <span className="text-danger">Food Weight is required</span>}
                  {errors.weight?.type === "min" && <span className="text-danger">Minimum Food weight is 100g</span>}
                </div>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" name="img" ref={register({ required: true, maxLength:50, pattern: /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/ })} placeholder="Host your image and paste the link" />
                  {errors.img?.type === "required" && <span className="text-danger">Food Image is required</span>}
                  {errors.img?.type === "pattern" && <span className="text-danger">Must be a Valid URL</span>}
                  {errors.img?.type === "maxLength" && <span className="text-danger">Please Paste a Short URL</span>}
                </div>
                <div className="text-center">
              <button type="submit" className="btn btn-dark px-5 my-3 font-weight-bold py-2">ADD</button>
              {
                addItemFeedback === "pending" ?
                <div className="alert alert-primary" role="alert"> Please Wait, Item is Processing </div>
                :
                addItemFeedback === "success" ?
                <div className="alert alert-success" role="alert"> Item has been Added Successfully </div>
                :
                addItemFeedback === "error" &&
                <div className="alert alert-danger" role="alert"> Something Error, Can't Add Right Now </div>
              }
              </div>
            </form>
     </div>
    </div>
  )
}
export default AddNewItem;
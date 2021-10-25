import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
               const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
                 
   console.log(data);
   axios.post('http://localhost:5000/services',data)
   .then(res=>{
                  if(res.data.insertedId){
                                 alert('add successfully');
                                 reset();
                  }
   })
}
               return (
                              <div>
                                 <h1>Please add servise</h1> 
                                 <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
      <br />
      <input {...register("img")} placeholder='png' />
      <br />
      <input {...register("description")} placeholder='Description' />
      <br />
      <input type="number" {...register("price")} placeholder='price' />
      <br />
      <input type="submit" />
    </form>      
                              </div>
               );
};

export default AddService;
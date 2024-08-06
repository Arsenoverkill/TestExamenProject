"use client";
import React from "react";
import { usePostTodoMutation } from "@/redux/api/todo";
import { SubmitHandler, useForm } from "react-hook-form";

const Admin = () => {
  const [postTodoMutation] = usePostTodoMutation();
  const { register, handleSubmit, reset } = useForm<Todo>();
  const onSubmit: SubmitHandler<Todo> = async (data) => {
    const result = await postTodoMutation(data);
    console.log(result);

    reset();
  };
  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Title"
          {...register("title", { required: true })}
          type="text"
        />
        <input
          placeholder="URL"
          {...register("image", { required: true })}
          type="text"
        />
        <input
          placeholder="Price"
          {...register("price", { required: true })}
          type="number"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Admin;

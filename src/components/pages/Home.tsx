"use client";
import React, { useState } from "react";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodoQuery,
} from "@/redux/api/todo";
import scss from "./Home.module.scss";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

const Home = () => {
  const { data } = useGetTodoQuery();
  const { register, handleSubmit, reset, setValue } = useForm<Todo>();
  const [productId, setProductId] = useState<number>();
  const [editInputs, setEditInputs] = useState<boolean>(false);
  const [deleteTodoMutation] = useDeleteTodoMutation();
  const [editTodoMutation] = useEditTodoMutation();

  const deleteProduct = async (_id: number) => {
    await deleteTodoMutation(_id);
  };
  const onSubmit: SubmitHandler<Todo> = async (data) => {
    try {
      await editTodoMutation({ _id: productId!, data: data });
      setEditInputs(false);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {data?.map((item) => (
        <div key={item._id}>
          <Image width={200} height={200} src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          <button onClick={() => deleteProduct(item._id!)}>Delete</button>
          <button
            onClick={() => {
              setValue("title", item.title);
              setValue("image", item.image);
              setValue("price", item.price);
              setProductId(item._id);
              setEditInputs(true);
            }}
          >
            Edit
          </button>
        </div>
      ))}
      <div style={{ display: editInputs ? "block" : "none" }}>
        <h1>Edit</h1>
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
    </div>
  );
};

export default Home;

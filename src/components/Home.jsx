import React, { useContext, useEffect, useState } from "react";
import { deleteMovie, getMovie } from "../api/RESTful";
import { Link } from "react-router-dom";
import { Context } from "../contexts/MovieContext";

const Home = () => {
  const { state1, head, dispatch1 } = useContext(Context);

  const delHandler = (para) => {
    const fetch = async () => {
      const res = await deleteMovie(para);
      console.log(res.data);
    };
    fetch();
    dispatch1({ type: "Delete", payload: para });
  };
  return (
    <>
      <div className=" container  relative mx-auto p-2">
        <table className="mx-auto h-full w-full table-auto border-collapse overflow-x-scroll border border-slate-500">
          <caption className="m-4 caption-top p-4 text-3xl font-medium capitalize tracking-widest">
            anime myanmar
          </caption>

          <thead>
            <tr>
              <td colSpan={4}></td>
              <th className="border border-slate-500 ">
                <button className="p-4 text-center text-lg font-bold capitalize tracking-widest text-yellow-500">
                  <Link to="/add">add</Link>
                </button>
              </th>
            </tr>
            <tr>
              {head.map((i, index) => (
                <th
                  className="border border-slate-500 bg-[#131B2E] p-4 text-center capitalize"
                  key={index}
                >
                  {i}
                </th>
              ))}
              <th className="border border-slate-500 bg-[#131B2E] p-4 text-center capitalize">
                action
              </th>
            </tr>
          </thead>

          <tbody>
            {state1.map((i) => (
              <tr key={i.id}>
                <td className="border border-slate-600 bg-[#1E293B] p-4 text-center capitalize">
                  {i.id}
                </td>
                <td className="border border-slate-600 bg-[#1E293B] p-4 text-center capitalize">
                  {i.title}
                </td>
                <td className="border border-slate-600 bg-[#1E293B] p-4 text-center capitalize">
                  {i.genres}
                </td>
                <td className="border border-slate-600 bg-[#1E293B] p-4 text-center ">
                  {i.video}
                </td>
                <td className="border border-slate-600 bg-[#1E293B] p-4 text-center ">
                  <button className=" p-1 capitalize text-green-600">
                    <Link to={`/update/${i.id}`}>update</Link>
                  </button>
                  &nbsp;<span className=" slash:hidden">/</span>&nbsp;
                  <button
                    onClick={() => delHandler(i.id)}
                    className=" p-1 capitalize text-red-600"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneMovie, patchMovie } from "../api/RESTful";
import { Context } from "../contexts/MovieContext";

const Update = () => {
  const navigate = useNavigate();
  const { dispatch1 } = useContext(Context);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    genres: "",
    video: "",
  });
  useEffect(() => {
    const res = async () => {
      const res = await getOneMovie(id);
      setFormData(res.data);
    };
    res();
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();

    const res = async () => {
      const res = await patchMovie(id, formData);

      dispatch1({ type: "Patch", payload: formData });
      alert("Updated...");
      navigate("/");
    };
    res();
  };

  return (
    <div className=" container mx-auto p-2">
      <form
        onSubmit={submitHandler}
        action=""
        className=" mx-auto space-y-8 border border-slate-800  p-20 lg:w-7/12"
      >
        <h1 className=" mb-6 text-center text-3xl font-semibold capitalize tracking-wider sm:text-6xl sm:font-extrabold">
          edit movie
        </h1>

        <div className=" flex flex-col gap-y-4">
          <label
            htmlFor="id"
            className=" text-lg font-medium capitalize tracking-wider"
          >
            id
          </label>
          <input
            type="text"
            name="id"
            id="id"
            className=" form-input rounded-sm text-black"
            required
            value={formData.id}
            disabled
            readOnly
          />
        </div>

        <div className=" flex flex-col gap-y-4">
          <label
            htmlFor="title"
            className=" text-lg font-medium capitalize tracking-wider"
          >
            title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className=" form-input rounded-sm text-black"
            required
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>

        <div className=" flex flex-col gap-y-4">
          <label
            htmlFor="genres"
            className=" text-lg font-medium capitalize tracking-wider"
          >
            genres
          </label>
          <input
            type="text"
            name="genres"
            id="genres"
            className=" form-input rounded-sm text-black"
            required
            value={formData.genres}
            onChange={(e) =>
              setFormData({ ...formData, genres: e.target.value })
            }
          />
        </div>

        <div className=" flex flex-col gap-y-4">
          <label
            htmlFor="video"
            className=" text-lg font-medium capitalize tracking-wider"
          >
            video
          </label>
          <input
            type="text"
            name="video"
            id="video"
            className=" form-input rounded-sm text-black"
            required
            value={formData.video}
            onChange={(e) =>
              setFormData({ ...formData, video: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="!mt-[4rem] flex rounded-full bg-slate-800 px-4 py-2 text-start text-base font-bold capitalize tracking-widest text-yellow-500"
        >
          update
        </button>
      </form>
    </div>
  );
};

export default Update;

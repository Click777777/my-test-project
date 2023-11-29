import axios from "axios";

const url = `http://localhost:3000/movie`;

const config = { "content-type": "application/json" };

/**
 * Get
 */
export const getMovie = async () => {
  try {
    const res = await axios.get(url, config);
    return res;
  } catch (error) {
    return error;
  }
};

export const getOneMovie = async (id) => {
  const patchUrl = `http://localhost:3000/movie/${id}`;

  try {
    const res = await axios.get(patchUrl, config);
    return res;
  } catch (error) {
    return error;
  }
};

/**
 * Post
 */
export const postMovie = async (newMovie) => {
  try {
    const response = await axios.post(url, newMovie, config);
    return response;
  } catch (error) {
    return error;
  }
};

/**
 * Update
 */
export const patchMovie = async (id, data) => {
  const patchUrl = `http://localhost:3000/movie/${id}`;
  try {
    const res = await axios.patch(patchUrl, data, config);
    return res;
  } catch (error) {
    return error;
  }
};

/**
 * Delete
 */
export const deleteMovie = async (id) => {
  const patchUrl = `http://localhost:3000/movie/${id}`;
  try {
    const res = await axios.delete(patchUrl, config);
    return res;
  } catch (error) {
    return error;
  }
};

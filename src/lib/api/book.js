import client from "./client";

export const getbook = async(id) => {
  const res = await client
    .get(`/books/${id}`)
  return res.data
}

export const createBook = async(id, title, image) => {
  const params = {
    id: id,
    title: title,
    image: image
  }
  await client
    .post("/books", params)
    .then(({ data }) => {
      if (data) {
        console.log(data)
      }
    })
    .catch(e => console.log(e));
};

export const updatebook = async(id, count) => {
  const params = {
    count: count
  }
  const res = await client
    .patch(`/books/${id}`, params)
  return res.data
}
import client from "./client";

export const createBook = async(title, data) => {
  const params = {
    title: title,
    image: data
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
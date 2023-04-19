import axios from "axios";

export default async function () {
  const { data } = await axios.get('https://swapi.dev/api/people/1');

  console.log(data);

  return { data };
}
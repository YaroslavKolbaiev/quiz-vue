import axios from "axios";

export default async function () {
  const { data } = await axios.get('https://swapi.dev/api/people/1');

  return { data };
}
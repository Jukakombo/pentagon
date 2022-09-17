import axios from "axios";
export const fetchApi = async () => {
  await axios
    .get("")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
  fetchApi();
};

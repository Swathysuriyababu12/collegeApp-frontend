import axios from "axios";

const ListAll = async () => {
  const found = await axios.get(
    "https://collegeapiapp.herokuapp.com/api/user/found"
  );
  const result = {
    found: found.data,
  };

  return result;
};

export default ListAll;

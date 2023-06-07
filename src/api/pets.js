import instance from "./index";

const getAllPets = async () => {
  const res = await instance.get(`pets/`);
  return res.data;
};

const addPet = async (petInfo) => {
  const res = await instance.post(`pets/`,  petInfo );
  return res.data;
};

export { getAllPets, addPet };

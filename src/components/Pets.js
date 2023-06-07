import React from "react";
// import { useState, useEffect } from "react";
import { getAllPets } from "../api/pets";
import { useQuery } from "@tanstack/react-query";

const Pets = () => {
  //   const [pets, setPets] = useState([]);

  //   const callAPI = async () => {
  //     const res = await getAllPets();
  //     setPets(res.data);
  //   };

  //   useEffect(() => {
  //     callAPI();
  //   }, []);
  const { data, isLoading } = useQuery({
    queryKey: ["pets"],
    queryFn: () => getAllPets(),
  });
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  const petList = data?.map((pet) => <h1>{pet.name}</h1>);
  return <div>{petList}</div>;
};

export default Pets;

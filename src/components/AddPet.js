import React, { useState } from "react";
import { addPet } from "../api/pets";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddPet = () => {
  const [petInfo, setPetInfo] = useState({});
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => addPet(petInfo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["pets"] }),
  });

  const handleChange = (e) => {
    setPetInfo({ ...petInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="pet name"
          name="name"
          onChange={handleChange}
        ></input>
        <input
          placeholder="pet type"
          name="type"
          onChange={handleChange}
        ></input>
        <input
          placeholder="pet image"
          name="image"
          onChange={handleChange}
        ></input>
        <input
          placeholder="pet adopted"
          name="adopted"
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPet;

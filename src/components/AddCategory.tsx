import React, { useState, FormEvent } from "react";

interface AddCategoryProps {
  onAddCategory: (category: string) => void;
}

export const AddCategory = ({ onAddCategory }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="categorieName"
        type="text"
        placeholder="Ingrese una Categoría"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

  //   onClick={() =>
        //     onAddCategory(
        //       //get text from input categorieName
        //       (document.getElementById('categorieName') as HTMLInputElement)
        //         .value
        //     )
        //   }
        // >
        //   Agregar
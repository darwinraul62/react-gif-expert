import { useState } from "react";
import React from 'react';
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp : React.FC = () => {

    const [categories, setCategories] = useState<string[]>([
        "One Punch"  
    ]);

    const onAddCategory = (name: string) : void => {
        console.log(name);
        if(name && name.trim().length > 0 && !categories.includes(name) )
            //setCategories([...categories, name]);
            setCategories( cat => [ name, ...cat ] );
    };    

    return (
      <>        
        <h2>GifExpertApp</h2>

        <AddCategory onAddCategory={onAddCategory}/>
        {/* <AddCategory onAddCategory={ (name) => onAddCategory(name) }/> */}       
       
        <ol>
          {categories.map((category) => 
            (
            <GifGrid key={category} category={category} />
            // return <li key={category}>{category}</li>;
            )
          )}
        </ol>
      </>
    );
    
};
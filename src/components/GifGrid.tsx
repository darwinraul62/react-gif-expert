import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

type GifGridProps = {
    category: string;
};

export const GifGrid = ({ category }: GifGridProps) => {
   
    const { images, isLoading } = useFetchGifs(category);

    return (
      <>
        <h3>{category}</h3>
        {isLoading && <p>Loading...</p>}
        <div className="card-grid">
          {images.map((img : any ) => (
            <GifItem key={img.id} 
                {...img}
            />
          ))}
        </div>
      </>
    );
}
    

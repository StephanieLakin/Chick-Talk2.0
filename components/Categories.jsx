import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "@/Services";

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
   getCategories()
   .then((newCategories) => setCategories(newCategories)) 
  }, [])
  
  return (
    <div className="text-zinc-600 bg-white shadow-lg rounded-lg p-8 md-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-zinc-600 ">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
       <span className="cursor-pointer block pb-3 mb-3">
       {category.name}
       </span>        
        </Link>
      ))}
    </div>
  )
}

export default Categories

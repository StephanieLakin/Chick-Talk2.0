import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const categories = [{name:'Baby Chicks', slug: 'Chicks'}, {name:'Roosters', slug:'Do we need roosters?'}]

const Header = () => {
  return (
    <div className='contaainer mx-auto px-10 mb-8'>
        <div className="border-b w-full inline-block border-green-600 py-8">
            <div className="md:float-left block">
                <Link  href="/" >
                    <span className="cursor-pointer font-bold text-4xl text-white">
                    Chick-Talk
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
            {categories.map((category) =>(
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="md:float-right mt-2 align-middle text-white ml-4 cursor-pointer font-semibold">
                        {category.name}
                    </span>
                </Link>
            ))};
            </div>
        </div>
      
    </div>
  )
}

export default Header

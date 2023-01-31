import React from 'react';
import Image from 'next/image';

//import { graphCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-10 mb-8 p-12 relative rounded-lg bg-black bg-opacity-30 grid">
    <div className="justify-self-center">
      <Image
        unoptimized
        // loader={graphCMSImageLoader}
        alt={author.name}
        height="80"
        width="80"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-lg">{author.bio}</p>
  </div>
);
export default Author

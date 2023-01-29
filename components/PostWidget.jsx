import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "@/Services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  console.log(relatedPosts);
  return (
    <div className="text-zinc-600 bg-white shadow-lg rounded-lg p-8 md-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-zinc-600 ">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img src={post.featuredImage.url}
             alt={post.title} 
             height="60px"
             width="60px"
             className="align-middle rounded-full" />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-zinc-600 font-xs">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;


import Head from "next/head";
import { getPosts } from '../Services/index'
import { PostCard, Categories, PostWidget } from "../components";



export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8 text-white">
      <Head>
        <title>Chick-Talk</title>        
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard  post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget/>
            <br/>
            <br/>
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return {
    props:{posts}
  }
}




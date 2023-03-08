import fs from 'fs';
import matter from 'gray-matter';
import path from 'path'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { sortByDate } from '../utils'
import Post from '../components/Post.js'
import { Key } from 'react';
import Head from 'next/head';

export default function Home({ posts }: any) { // Creates the homepage and imports all posts from staticprops
  return (
    <div className={styles.container}>
      <Head> 
          <title>AMA Mazing Blog</title>
          <meta name="description" content="Demo blog made with next.js" />
          <link rel="icon" href="\favicon.ico" />
      </Head>

      <div className='posts'>
       {/* Displays every post in the variable posts */}
        {posts.map((post: any, index: Key | null | undefined) => ( // key iterator is required but can be set to null
          <Post key ={index} post={post} /> // Uses the post component to display post, key still required
        ))}
      </div>
      
    </div>
  )
}

// Getstaticprops runs on the server making the website faster
export async function getStaticProps() {
  // Set the path to posts
  const files = fs.readdirSync(path.join('posts'))

  // Puts the the list of files in the posts variable
  const posts = files.map((filename) => { 
    // Create slug which is the name of the file without the markdown extension
    const slug = filename.replace('.md', '')

    // Sets markdownwithmeta to path to post file
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    // Gets frontmatter of post
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug, // Returns the slug so it can be passed through when clicked in post component
      frontmatter, // Returns frontmatter to be displayed via the post component
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate), // Sorts posts by date in a variable called posts
    },
  }
}
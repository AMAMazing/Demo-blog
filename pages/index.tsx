import fs from 'fs';
import matter from 'gray-matter';
import path from 'path'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { sortByDate } from '../utils'
import Post from '../components/Post'
import { Key } from 'react';

export default function Home({ posts }: any) {
  return (
    <div className={styles.container}>
      {/* */}
      <div className='posts'> 
        {posts.map((post: any, index: Key | null | undefined) => ( // 
          <Post key ={index} post={post} pos={index}/>
        ))}
      </div>
      
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate), // Sorts posts by date, and returns them to map
    },
  }
}
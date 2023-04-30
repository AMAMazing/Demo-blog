import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import styles from '/styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head';
import hl from 'highlight.js';


export default function PostPage({
  // Gets the variables from staticprops
  frontmatter: { title, date, description, coverimage},
  html, 
}: any) {
  return (
    <div className={styles.container}>
      {/* Sets the metadata and title of page to post details */}
      <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="og:image" content={coverimage} />
          <link rel="icon" href="\favicon.ico" />
      </Head>

      {/* The card on top of page displaying post information*/}
      <div className="topcard">
        {/* Displays the image for topcard*/}
        <div className="coverimg">
        <Image
            src={coverimage}
            alt="image"
            fill
            
            />
        </div>

        {/* Displays the text for topcard*/}
        <div className="inposttext">
          <div className="inpostdate">{date}</div>

          <div className="inposttitle">{title}</div>

          <div className="inpostdesc">{description}</div>
          
        </div>
      </div>
      {/* Displays the content of post*/}
      <div className="htmltext" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
}

export async function getStaticPaths() {
  // Set the path to posts
  const files = fs.readdirSync(path.join('posts'))

  // Sets the path (can be seen in url) to the name of post file 
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
// Getstaticprops runs on the server making the website faster
export async function getStaticProps({ params: { slug } }: any) {
  // Sets markdownwithmeta to path to post file
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )
    // Gets frontmatter and content of post
  const { data: frontmatter, content } = matter(markdownWithMeta)

  // Returns everything to PostPage 
  return {
    props: {
      frontmatter,
      slug,
      html: marked(content, {
        highlight: function(code, lang) {
          return hl.highlight(lang, code).value;
        },
    }),
  }
}}
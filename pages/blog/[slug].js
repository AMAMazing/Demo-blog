import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import styles from '/styles/Home.module.css'
import Image from 'next/image'


export default function PostPage({
  frontmatter: { title, date, description, coverimage},
  slug,
  content,
}) {
  return (
    <div className={styles.container}>
      <div className="topcard">
        <div className="coverimg">
        <Image
            src={coverimage}
            alt="image"
            fill
            
            />
        </div>

        <div className="inposttext">
          <div className="inpostdate">{date}</div>

          <div className="inposttitle">{title}</div>

          <div className="inpostdesc">{description}</div>
          
        </div>
      </div>
      <div className="htmltext" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
  )
}


{/* <h1>{title}</h1>
        <div>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div> */}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

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

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
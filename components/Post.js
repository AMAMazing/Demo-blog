import Link from 'next/link'
import Image from 'next/image'

// Prints the card
export default function Post({ post, pos }) {
  return (
    <div className='card'>
      <div>
      <Link href={`/blog/${post.slug}`}>
        <div className='postimg'>
          <Image
          src={post.frontmatter.coverimage}
          alt="image"
          fill
          
          />
        </div>

        <div className="cardtext">
          <div className='postdate'>{post.frontmatter.date}</div>
        

          <h3 className='posttitle'>{post.frontmatter.title}</h3>

          <div className='postdesc'>{post.frontmatter.description}</div>
        </div>
        </Link>
      </div>
    </div>
  )
}
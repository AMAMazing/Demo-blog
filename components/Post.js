import Link from 'next/link'
import Image from 'next/image'

// Creates the post card
export default function Post({ post }) { 
  return (
    <div className='card'>
      <div>
      <Link href={`/blog/${post.slug}`}> {/* Redicts the user to the post page (slug) when clicked */}
        {/* Displays the post image */}
        <div className='postimg'>
          <Image
          src={post.frontmatter.coverimage} 
          alt="image"
          fill
          />
        </div>

        {/* Displays the post text */}
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
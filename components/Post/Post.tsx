import Link from "next/link";

const Post = ({ post }: any) => {
  const {
    frontmatter: { title, date, excerpt, cover_image },
  } = post;
  console.log(post);

  return (
    <div
      key={post.id}
      className="post-card text-center  sm:basis-4/12 md:basis-3/12 w-full"
    >
      <a className="post-card-image-link cursor-pointer">
        <img className="post-card-image" src={cover_image} alt={title} />
      </a>

      <div className="post-card-content">
        <a className="post-card-content-link cursor-pointer">
          <header className="post-card-title">
            <h2 className="text-2xl text-left font-bold mb-2.5">{title}</h2>
          </header>
          <section className="post-card-excerpt">
            <p className="text-md text-left font-normal">{excerpt}</p>
          </section>
        </a>
        <footer className="post-card-meta">
          <time className="post-card-time">{date}</time>
          <span className="post-card-time-read">5 min Read</span>
        </footer>
      </div>
    </div>
  );
};

export default Post;

{
  /* <Link href={`/blog/${post.id}`}>Read more</Link> */
}

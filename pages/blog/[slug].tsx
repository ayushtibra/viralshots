import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { marked } from "marked";
import Newsletter from "../../components/Newsletter";

const BlogPost = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}: any) => {
  return (
    <>
      <div className="card sm:max-w-[70%] mx-auto px-0 pt-4 mt-4 pb-8">
        {/* <Link href="/">
          <a className="btn btn-back">Go Back</a>
        </Link> */}
        <div className="text-center">
          <time className="text-[#8e2ad6] text-base"> {date}</time>
          <h1 className="post-title text-3xl font-semibold">{title}</h1>
        </div>
        <figure>
          <img
            src={cover_image}
            alt={title}
            className="w-full max-w-[60%] p-4 mx-auto"
          />
        </figure>
        <div className="card-page">
          <div className="post-body">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export async function getStaticPaths() {
  // get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // get slug and frontmatter from posts
  const paths = files.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");

    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  // get formatter
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default BlogPost;

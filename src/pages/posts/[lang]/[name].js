import Head from "next/head";
import { useRouter } from "next/router";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content/posts/en`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const data = blogs
    .map((blog) => {
      const path = `${process.cwd()}/content/posts/en/${blog}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const {
        content,
        data: { date, ...data },
      } = matter(rawContent);
      return { content, data: { ...data, date: date.toString() } };
    })
    .reduce((acc, content) => {
      return {
        ...acc,
        [content.data.name]: content,
      };
    }, {});
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content/posts/en`, "utf-8");
  const blogs = files.filter((fn) => fn.endsWith(".md"));
  return {
    paths: blogs.map((b) => `/posts/en/${b.replace(".md", "")}`),
    fallback: false,
  };
}

const Post = ({ data = {} }) => {
  console.log(data);
  const router = useRouter();
  const { name, lang } = router.query;
  if (!data[name]) {
    if (router.isReady) router.push("/");
    return <div></div>;
  }
  const {
    content,
    data: { title, description, date },
  } = data[name];
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <h3>{description}</h3>
        <ReactMarkdown escapeHtml={true} source={content} />
      </article>
    </>
  );
};

export default Post;

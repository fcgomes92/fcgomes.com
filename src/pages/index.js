import matter from "gray-matter";
import Head from "next/head";
import { Component } from "react";
import ReactMarkdown from "react-markdown";
import HomeContent from "../../content/home.md";
import Link from "next/link";

export default class Home extends Component {
  render() {
    const {
      content,
      data: { title, description, cats },
    } = matter(HomeContent);
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <ReactMarkdown escapeHtml={true} source={content} />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
          <Link href={`/posts/en/foo`}>foo</Link>
          <br />
          <Link href={`/posts/en/bar`}>bar</Link>
        </article>
      </>
    );
  }
}

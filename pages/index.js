import React from 'react';
import { getPostCollection } from '/handlers/data-handler'
import Link from 'next/link'
import Layout from './../templates/layout/layout';
import handler from './api/hello';

export async function getStaticProps() {
    let posts = await getPostCollection();
    return {
      props: {
        posts: posts
      }
    };
  }
  
  export default function Home({ posts }) {
  return (
    <>

      <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
        {/* Navbar content */}
      </nav>
      <Layout>
      <header className="intro-header" style={{ backgroundImage: "url('/vendor/img/home-bg.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <hr className="small" />
                <span className="subheading">A Clean Blog Theme by Tai Le Tan - SD5036</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            {posts.map((post) => {
              return (
                <div key={post.id}>
                  <div className="post-preview">
                    <Link href={`/post`}>
                        <div>
                            <h2 className="post-title">
                            {post.title}
                            </h2>
                            {post.subTitle ? (<h3 className="post-subtitle">{post.subTitle}</h3>) : null}
                        </div>
                    </Link>
                    <p className="post-meta">Posted by <Link href="#">{post.postedBy}</Link> on {post.createdAt}</p>
                  </div>
                  <hr />
                </div>
              );
            })}

            <ul className="pager">
              <li className="next">
                <Link href="#">Older Posts &rarr;</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Layout>
      

      <footer>
        {/* Footer content */}
      </footer>
    </>
  );
}

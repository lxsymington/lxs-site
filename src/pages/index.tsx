import React from "react"
import { Link } from "gatsby"

import { Article, Layout, SEO } from "../components"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Article>
      <h1>
        <strong>Hi,</strong>
        <span>
          I am Luke. I am a Front-end Engineer and this is my personal site.
        </span>
      </h1>
      <p>
        There&apos;s not much to see here at the moment, but I intend for that
        to change. I, like a vast number of people, have recently had a little
        more time on my hands and thought after 5 years working with web
        technologies it really is about time that I have a live website of my
        own&hellip;
      </p>
    </Article>
    <Article>
      <h2>
        <strong>So this is just a portfolio site?</strong>
      </h2>
      <p>
        &hellip;well yes, but it is also going to be a journal of my learning
        and any tips and tricks that I come across while working with code.
      </p>
      <p>
        To get started I'll be focussing mostly on{" "}
        <Link to="/short-reads/">short reads</Link>, before diving into
        something in more depth in some{" "}
        <Link to="/long-reads/">long reads</Link>
      </p>
    </Article>
  </Layout>
)

export default IndexPage

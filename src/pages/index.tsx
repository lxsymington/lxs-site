import React from "react"

import { Layout, SEO } from "../components"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi,</h1>
    <p>I am Luke. I am a Front-end Engineer and this is my personal site.</p>
    <p>
      There&apos;s not much to see here at the moment, but I intend for that to
      change. I, like a vast number of people, have recently had a little more
      time on my hands and thought after 5 years working with web technologies
      it really is about time that I have a live website of my own&hellip;
    </p>
  </Layout>
)

export default IndexPage

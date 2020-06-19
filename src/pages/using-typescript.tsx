// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import { Layout, SEO } from "../components"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don&apos;t support TypeScript yet.
    </p>
    <p>
      For type checking you&apos;ll want to install <em>typescript</em> via npm
      and run <em>tsc --init</em> to create a{` `}
      <em>.tsconfig</em> file.
    </p>
    <p>
      You&apos;re currently on the page &ldquo;{path}&rdquo; which was built on
      {` `}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{` `}
      <a href="https://www.gatsbyjs.org/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue
      interdum velit euismod in. Metus dictum at tempor commodo ullamcorper a.
      Et magnis dis parturient montes nascetur ridiculus mus mauris vitae.
      Habitasse platea dictumst vestibulum rhoncus est pellentesque elit.
      Posuere ac ut consequat semper viverra nam libero justo. Fusce ut placerat
      orci nulla pellentesque dignissim enim. Fames ac turpis egestas integer
      eget aliquet nibh. A cras semper auctor neque. Amet nulla facilisi morbi
      tempus iaculis. Diam donec adipiscing tristique risus nec feugiat in.
    </p>

    <p>
      Rhoncus est pellentesque elit ullamcorper dignissim cras. Feugiat in ante
      metus dictum. Vel turpis nunc eget lorem dolor sed. Quam vulputate
      dignissim suspendisse in est ante in. Vivamus arcu felis bibendum ut
      tristique. Sed adipiscing diam donec adipiscing. Libero enim sed faucibus
      turpis in eu mi bibendum neque. In vitae turpis massa sed elementum.
      Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing.
      Risus nec feugiat in fermentum posuere urna nec.
    </p>

    <p>
      Porttitor massa id neque aliquam vestibulum morbi. Ullamcorper a lacus
      vestibulum sed arcu non odio. Volutpat blandit aliquam etiam erat. In
      metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
      Viverra aliquet eget sit amet tellus. Semper auctor neque vitae tempus
      quam pellentesque nec nam. Interdum velit laoreet id donec ultrices
      tincidunt arcu. Nisi lacus sed viverra tellus in hac habitasse. Nisl
      pretium fusce id velit ut tortor pretium. Tortor at auctor urna nunc id
      cursus metus. Non pulvinar neque laoreet suspendisse interdum. Egestas
      diam in arcu cursus euismod quis viverra. Integer enim neque volutpat ac
      tincidunt vitae semper quis. Non sodales neque sodales ut etiam sit amet
      nisl purus.
    </p>

    <p>
      Eu turpis egestas pretium aenean. Elit duis tristique sollicitudin nibh
      sit amet commodo. Egestas diam in arcu cursus. Id eu nisl nunc mi ipsum
      faucibus. Commodo sed egestas egestas fringilla phasellus faucibus
      scelerisque. Quisque id diam vel quam elementum. Tempor commodo
      ullamcorper a lacus vestibulum. Commodo quis imperdiet massa tincidunt
      nunc pulvinar sapien et ligula. Lacus sed viverra tellus in hac habitasse
      platea dictumst vestibulum. Dictum varius duis at consectetur lorem. Sem
      fringilla ut morbi tincidunt augue interdum. Facilisi nullam vehicula
      ipsum a arcu cursus vitae. Arcu odio ut sem nulla pharetra diam sit. In eu
      mi bibendum neque egestas congue quisque egestas diam. Eros in cursus
      turpis massa tincidunt dui ut ornare lectus. Risus in hendrerit gravida
      rutrum. Faucibus ornare suspendisse sed nisi. Elit eget gravida cum sociis
      natoque penatibus.
    </p>

    <p>
      Vitae ultricies leo integer malesuada. Facilisi cras fermentum odio eu.
      Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Libero
      id faucibus nisl tincidunt eget nullam non. Proin libero nunc consequat
      interdum varius sit. Maecenas volutpat blandit aliquam etiam erat velit
      scelerisque. In aliquam sem fringilla ut morbi tincidunt augue. Feugiat
      pretium nibh ipsum consequat nisl vel pretium. Risus quis varius quam
      quisque id diam vel quam elementum. Nisl tincidunt eget nullam non nisi
      est sit amet. Dui accumsan sit amet nulla facilisi morbi. Neque volutpat
      ac tincidunt vitae semper quis. Pulvinar neque laoreet suspendisse
      interdum consectetur libero id faucibus. Eu turpis egestas pretium aenean
      pharetra magna ac placerat. Purus sit amet volutpat consequat.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`

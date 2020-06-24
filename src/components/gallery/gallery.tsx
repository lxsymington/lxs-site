import React from "react"
import { Exhibit } from "../../components"
import * as galleryStyles from "./gallery.module.scss"

export type MarkdownNode = {
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
    title: string
    description: string
    tags: string[]
  }
  timeToRead: number
}

type GalleryProps = {
  exhibits: MarkdownNode[]
}

const Gallery: React.FC<GalleryProps> = ({ exhibits }) => (
  <ul className={galleryStyles.root}>
    {exhibits.map(({ fields, frontmatter, timeToRead }, index) => (
      <li className={galleryStyles.item} key={index}>
        <Exhibit {...fields} {...frontmatter} timeToRead={timeToRead} />
      </li>
    ))}
  </ul>
)

export { Gallery }

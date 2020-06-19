import React from "react"
import { Image } from "../../components"
import * as articleStyles from "./article.module.scss"

const Article: React.FC = ({ children }) => (
  <article className={articleStyles.root}>
    <section className={articleStyles.copy}>{children}</section>
    <aside className={articleStyles.gallery}>
      <Image className={articleStyles.media} />
    </aside>
  </article>
)

export { Article }

import React from "react"
import { Link } from "gatsby"
import * as exhibitStyles from "./exhibit.module.scss"

type ExhibitProps = {
  className?: string
  date: string
  description: string
  slug: string
  tags: string[]
  timeToRead: number
  title: string
}

const Exhibit: React.FC<ExhibitProps> = ({
  className,
  date,
  description,
  slug,
  tags,
  timeToRead,
  title,
}) => (
  <Link className={`${exhibitStyles.root} ${className ?? ``}`} to={slug}>
    <header className={exhibitStyles.header}>
      <h2 className={exhibitStyles.heading}>
        <strong className={exhibitStyles.heading__text}>{title}</strong>
      </h2>
    </header>
    <div className={exhibitStyles.body}>
      <p className={exhibitStyles.description}>
        <strong>{description}</strong>
      </p>
      <time dateTime={`PT${timeToRead}M`}>{timeToRead} minutes</time>
    </div>
    <footer className={exhibitStyles.footer}>
      <ul className={exhibitStyles.tag__cloud}>
        {tags.map((tag, index) => (
          <li className={exhibitStyles.tag} key={index}>
            {tag}
          </li>
        ))}
      </ul>
      <time className={exhibitStyles.date}>{date}</time>
    </footer>
  </Link>
)

export { Exhibit }

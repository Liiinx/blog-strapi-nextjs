import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[slug]">
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top uk-animation-toggle">
            {/*<div className="uk-animation-shake">*/}
            <NextImage image={article.image} />
            </div>

          {/*</div>*/}
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card

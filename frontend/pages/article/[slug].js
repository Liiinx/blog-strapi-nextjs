import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"
import Comments from "../../components/comments"
import React from "react";

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../components/map'), {
  ssr: false
});

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image)
  // const comments = article.comments

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }

  // console.log(article);
  return (
      <Layout categories={categories}>
        <Seo seo={seo} />
        <div
            id="banner"
            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
            data-src={imageUrl}
            data-srcset={imageUrl}
            data-uk-img
        >
          <h1>{article.title}</h1>
        </div>
        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={article.content} escapeHtml={false} />
            <hr className="uk-divider-small" />
            <Map pos={article.map} />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.author.picture && (
                    <NextImage image={article.author.picture} />
                )}
              </div>
            </div>
            <Comments comments={article.comments} />
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.author.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles")

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`)
  const categories = await fetchAPI("/categories")

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  }
}

export default Article

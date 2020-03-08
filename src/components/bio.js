/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            linkedin
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        <strong>{author.name}</strong>
        {` `}
        <a href={`https://github.com/${social.github}`}>
          <FaGithub />
        </a>
        {` `}
        <a href={`https://linkedin.com/in/${social.linkedin}`}>
          <FaLinkedin />
        </a>
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          <FaTwitter />
        </a>
      </p>
    </div>
  )
}

export default Bio

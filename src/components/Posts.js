import React from 'react'
import PropTypes from 'prop-types'

const Posts = ({posts}) => (
  <ul>
    {posts.map((post, i) =>
      <li key={i}>
        <a target="_blank" rel="noopener noreferrer" href={`https://www.reddit.com${post.permalink}`}>{post.title}</a>
      </li>
    )}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts

import React from 'react'
import GatsbyLink, { withPrefix } from "gatsby-link"

export default ({ children, to, ...other }) => {
  // This regex assumes that any internal link (intended for Gatsby to process)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use gatsby-link for internal links, and <a> for others, or <div> if no to or href is specified.

  if ((typeof to === 'undefined') && (typeof other.href === 'undefined')) {
    return (
      <div { ...other }>
        {children}
      </div>
    )
  }

  if (internal) {
    return (
      <GatsbyLink to={withPrefix(to)} { ...other }>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} { ...other }>
      {children}
    </a>
  );
};

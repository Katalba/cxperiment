import React from 'react'
import { Helmet } from 'react-helmet'

const metaHelmetHook = ({ datosSeo }) => {
  return (
    <Helmet>
      {/* metadatos estandard */}
      <title>{datosSeo.title}</title>
      <meta name='description' content={datosSeo.description} />

      {/* facebook tags */}
      <meta property='og:type' content={datosSeo.type} />
      <meta property='og:title' content={datosSeo.title} />'
      <meta property='og:description' content={datosSeo.description} />

      {/* taggs twitter */}
      <meta name='twitter:creator' content={datosSeo.name} />
      <meta name='twitter:card' content={datosSeo.type} />
      <meta name='twitter:title' content={datosSeo.title} />
      <meta name='twitter:description' content={datosSeo.description} />

    </Helmet>
  )
}

export default metaHelmetHook

// npm uninstall react-helmet
// npm uninstall -D react-helmet

import React from "react"

import Layer from "../components/layer"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layer>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layer>
)

export default NotFoundPage

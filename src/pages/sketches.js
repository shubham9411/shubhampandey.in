import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { graphql } from 'gatsby'

import Layout from '../layout'

import * as styles from './sketches.module.css'

// eslint-disable-next-line react/prop-types
const Sketches = ({ data }) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    try {
      // eslint-disable-next-line react/prop-types
      let newPhotos = data.allFile.edges.map(t => t.node.relativePath)

      setPhotos(newPhotos)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }, [])

  return (
    <Layout>
      <h1>Sketch Gallery</h1>
      <hr />
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {photos.map((photo, idx) => (
            <a href={photo} onClick={e => this.openLightbox(idx, e)} key={idx}>
              <img
                key={idx}
                className={styles.imgFluid}
                src={photo}
                alt={photo ? photo.split('.')[0] : ''}
              />
            </a>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Layout>
  )
}

export default Sketches

export const query = graphql`
  query SketchesQuery {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(gif)/" }
        sourceInstanceName: { eq: "sketches" }
      }
    ) {
      edges {
        node {
          id
          name
          relativePath
        }
      }
    }
  }
`

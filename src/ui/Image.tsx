import React, { CSSProperties, useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

type GetAllImagesQuery = {
  allFile: {
    nodes: ReadonlyArray<{
      relativePath: string;
      childImageSharp: {
        gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData;
      } | null;
    }>;
  };
};

type ImageProps = {
  alt: string;
  backgroundColor?: string;
  imgStyle?: CSSProperties;
  loading?: 'eager' | 'lazy';
  imageName: string;
};

const Image = ({ alt, backgroundColor, imgStyle, loading, imageName }: ImageProps) => {
  const data = useStaticQuery<GetAllImagesQuery>(graphql`
    query GetAllImages {
      allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 100)
          }
        }
      }
    }
  `);

  const matchedImage = useMemo(
    () => data.allFile.nodes.find(({ relativePath }) => imageName === relativePath),
    [data, imageName],
  );

  const image = matchedImage?.childImageSharp?.gatsbyImageData;

  if (!image) {
    return null;
  }
  return (
    <GatsbyImage
      alt={alt}
      backgroundColor={backgroundColor}
      image={image}
      imgStyle={imgStyle}
      loading={loading}
    />
  );
};

Image.defaultProps = {
  backgroundColor: undefined,
  imgStyle: undefined,
  loading: 'lazy',
};

export default Image;

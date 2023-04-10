import React from 'react';

const plugin = jest.requireActual('gatsby-plugin-image');

type MockImageParams = {
  imgClassName: string;
};

const mockImage = ({ imgClassName, ...props }: MockImageParams) =>
  React.createElement('img', {
    ...props,
    className: imgClassName,
  });

module.exports = {
  ...plugin,
  GatsbyImage: jest.fn().mockImplementation(mockImage),
  StaticImage: jest.fn().mockImplementation(mockImage),
};

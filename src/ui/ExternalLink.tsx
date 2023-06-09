import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';

const ExternalOutboundLink = styled(OutboundLink)`
  display: flex;
  align-items: center;
`;

type ExternalLinkProps = {
  href: string;
  text: string;
};

const ExternalLinIcon = styled(FiArrowUpRight)`
  display: inline-block;
`;

const ExternalLink = ({ text, href }: ExternalLinkProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <ExternalOutboundLink
      aria-label={text}
      href={href}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      rel="noreferrer"
      target="_blank"
    >
      {text} {isHovering && <ExternalLinIcon />}
    </ExternalOutboundLink>
  );
};

export default ExternalLink;

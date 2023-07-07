import React, { useState } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';

import ArrowUpRight from '../atoms/icons/ArrowUpRight ';

const ExternalOutboundLinkLayout = styled(OutboundLink)`
  display: inline-block;
`;

const ExternalOutboundLink = styled(OutboundLink)`
  display: flex;
  align-items: center;
`;

type ExternalLinkProps = {
  href: string;
  text: string;
};

const ExternalLinkIcon = styled(ArrowUpRight)`
  display: inline-block;
`;

const ExternalLink = ({ text, href }: ExternalLinkProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <ExternalOutboundLinkLayout>
      <ExternalOutboundLink
        aria-label={text}
        href={href}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        rel="noreferrer"
        target="_blank"
      >
        {text} {isHovering && <ExternalLinkIcon />}
      </ExternalOutboundLink>
    </ExternalOutboundLinkLayout>
  );
};

export default ExternalLink;

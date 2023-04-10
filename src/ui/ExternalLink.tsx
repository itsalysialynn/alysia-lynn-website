import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

type ExternalLinkProps = {
  href: string;
  text: string;
};

const ExternalLink = ({ text, href }: ExternalLinkProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <OutboundLink
      aria-label={text}
      href={href}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      rel="noreferrer"
      target="_blank"
    >
      {text} {isHovering && <FiArrowUpRight />}
    </OutboundLink>
  );
};

export default ExternalLink;

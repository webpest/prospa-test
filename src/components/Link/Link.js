import NextLink from 'next/link';
import styles from './Link.module.css';

const Link = ({ children, href, className }) => {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export default Link;

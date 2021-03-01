import NextLink from 'next/link';
import styles from './Link.module.css';

const Link = ({ children, href }) => {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;

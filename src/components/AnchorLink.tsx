interface AnchorLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  offset?: number | (() => number);
}

const AnchorLink: React.FC<AnchorLinkProps> = ({
  offset,
  onClick,
  ...rest
}) => {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    let offsetFn: () => number = () => 0;
    if (typeof offset !== 'undefined') {
      if (typeof offset === 'function') {
        offsetFn = offset;
      } else {
        offsetFn = () => parseInt(offset.toString(), 10);
      }
    }

    const id = e.currentTarget.getAttribute('href')?.slice(1);
    const $anchor = document.getElementById(id!);
    const offsetTop = $anchor!.getBoundingClientRect().top + window.pageYOffset;

    window.scroll({
      top: offsetTop - offsetFn(),
      behavior: 'smooth',
    });

    if (onClick) {
      onClick(e);
    }
  };

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...rest} onClick={smoothScroll} />;
};

export default AnchorLink;

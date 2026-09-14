export function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1220px] px-5 sm:px-8 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

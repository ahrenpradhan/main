const ImageWrapper = ({ svg, src, children, alt, className, imgStyle }) => (
  <div
    className={`mb-4 w-2/5 max-w-full self-center md:max-w-fit ${
      className || ''
    }`}
  >
    {svg || src ? (
      <img className="mx-auto" src={svg || src} alt={alt} style={imgStyle} />
    ) : (
      children
    )}
  </div>
);

ImageWrapper.defaultProps = {
  svg: false,
  src: false,
  alt: 'random',
  className: false,
  imgStyle: {}
};

export default ImageWrapper;

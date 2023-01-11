const ImageWrapper = ({ svg, children, alt, className }) => (
  <div
    className={`mb-4 w-2/5 max-w-full self-center md:max-w-fit ${
      className || ''
    }`}
  >
    {svg ? <img className="mx-auto" src={svg} alt={alt} /> : children}
  </div>
);

ImageWrapper.defaultProps = {
  svg: false,
  alt: 'random',
  className: false
};

export default ImageWrapper;

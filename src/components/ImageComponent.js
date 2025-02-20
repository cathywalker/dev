const ImageComponent = ({ images, altText }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'flex-start', paddingBottom: '10px' }}>
        {images.map((image, index) => (
        <img
            key={index}
            src={image.src}
            srcSet={image.srcSet}
            sizes={image.sizes}
            alt={altText}
        />
        ))}
    </div>
    );

export default ImageComponent;
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ photos, onClick }) => {
  return (
    <Gallery>
      {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </Gallery>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};

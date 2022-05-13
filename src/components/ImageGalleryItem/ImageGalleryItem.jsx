import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ largeImageURL, webformatURL, tags, onClick }) => (
  <GalleryItem
    onClick={() => {
      onClick(largeImageURL);
    }}
  >
    <GalleryItemImage src={webformatURL} alt={tags} />
  </GalleryItem>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

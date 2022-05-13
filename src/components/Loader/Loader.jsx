import { BallTriangle } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { LoaderFixed } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderFixed>
      <BallTriangle
        height="100"
        width="100"
        color="#740526"
        ariaLabel="loading"
      />
    </LoaderFixed>
  );
};

export default Loader;

import { useLocation, Link } from 'react-router-dom';

const Goback = () => {
  const location = useLocation();
  return (
    <Link
      style={{
        textDecoration: 'none',
        fontSize: '22px',
        color: 'rgb(169, 153, 153)',
        padding: '0px 7px',
        borderRadius: '20px',
        border: '1px solid rgb(169, 153, 153)',
      }}
      to={location.state?.from ?? '/'}
    >
      {'<Back'}
    </Link>
  );
};

export default Goback;

import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div>
      <Link to='./'>Header</Link>
      <Link to='./dapplets'>Dapplets</Link>
    </div>
  );
}

export default Header;

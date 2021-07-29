import { Link } from 'react-router-dom';
import Tags from '../../components/Tags/Tags';
import DappletsProjectImage from '../../assets/images/dapplets-project-image.svg';
import s from './sidebarRight.module.css';

function SidebarRight() {
  return (
    <div>
      <h2>Dapplet settings</h2>
      <p>Create new list</p>
      <div>
        <input />
        <button>Create</button>
      </div>
      <p>Create new tag</p>
      <div>
        <input />
        <button>Create</button>
      </div>
      <p>Community tags</p>
      <Tags />
      <p>Working on</p>
      <ol>
        <li>twitter.com</li>
        <li>twitter.com/randomusername</li>
        <li>facebook.com</li>
        <li>facebook.com/randomusername</li>
      </ol>
    </div>
  );
}

export default SidebarRight;

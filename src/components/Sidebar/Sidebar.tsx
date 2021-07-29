import { Link } from 'react-router-dom';
import Tags from '../../components/Tags/Tags';
import DappletsProjectImage from '../../assets/images/dapplets-project-image.svg';
import s from './sidebar.module.css';

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <Link to='./'>
        <div>
          <img src={DappletsProjectImage} alt='-'/>
          <span>Dapplets Project.</span>
        </div>
      </Link>

      <div className={s.main_menu}>
        <Link to='./dapplets'>Editor’s Choice</Link>
        <Link to='./dapplets'>Essential Dapplets</Link>
        <Link to='./dapplets'>Social Networks</Link>
        <Link to='./dapplets'> Dapplets</Link>
      </div>

      <div className={s.list_menu}>
        <p>My lists</p>
        <Link to='./dapplets'>TOP-10 Twitter Dapplets (Me)</Link>
        <Link to='./dapplets'>Best Financial dapplets by Jack (Jack)</Link>
        <Link to='./dapplets'>TOP-10 Twitter Dapplets (Me)</Link>
      </div>

      <div>
        <p>My Tags</p>
        <Tags />
      </div>
      
    </div>
  );
}

export default Sidebar;

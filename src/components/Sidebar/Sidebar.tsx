import { NavLink, Link } from 'react-router-dom';
import Tags from '../../components/Tags/Tags';
import DappletsProjectImage from '../../assets/images/dapplets-project-image.svg';
import {
  AllLogo,
  EditorLogo,
  EssentialLogo,
  SocialLogo,
  FinancialLogo,
} from '../../assets/images/menu';

import s from './sidebar.module.css';

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <Link to='./'>
          <img src={DappletsProjectImage} alt='-'/>
          <span>Dapplets Project.</span>
      </Link>

      <div className={s.menu}>
        <NavLink to='./dapplets' activeClassName={s.a_active}>
            <img src={AllLogo} alt='-'/>
            <span>All Dapplets</span>
        </NavLink>
        <Link to='./dapplets'>
            <img src={EditorLogo} alt='-'/>
            <span>Editor’s Choice</span>
        </Link>
        <Link to='./dapplets'>
            <img src={EssentialLogo} alt='-'/>
            <span>Essential Dapplets</span>
        </Link>
        <Link to='./dapplets'>
            <img src={SocialLogo} alt='-'/>
            <span>Social Networks</span>
        </Link>
        <Link to='./dapplets'>
            <img src={FinancialLogo} alt='-'/>
            <span>Financial Dapplets</span>
        </Link>
      </div>

      <div className={`${s.menu} ${s.list}`}>
        <p className={s.title}>My lists</p>
        <Link to='./dapplets'>TOP-10 Twitter Dapplets (Me)</Link>
        <Link to='./dapplets'>Best Financial dapplets by Jack (Jack)</Link>
        <Link to='./dapplets'>TOP-10 Twitter Dapplets (Me)</Link>
      </div>

      <div className={`${s.menu}`}>
        <p className={s.title}>My Tags</p>
        <div className={`${s.tags}`}>
          <Tags />
        </div>
      </div>
      
    </div>
  );
}

export default Sidebar;

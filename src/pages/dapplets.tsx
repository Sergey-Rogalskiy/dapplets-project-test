import React from 'react';
import { useDispatch, useSelector } from '../types';
import { getDapplets } from '../services/actions/dapplets';
import DappletsTable from '../components/DappletsTable/DappletsTable';
import Sidebar from '../components/Sidebar/Sidebar';
import SidebarRight from '../components/SidebarRight/SidebarRight';
import s from './dapplets.module.css'

function Dapplets() {
  const dispatch = useDispatch()
  const dapplets = useSelector(store => store.dapplets.dappletsSuccess)
  
  React.useEffect(()=>{
    dispatch(getDapplets())
  }, [dispatch])
  return (
      <div className={s.flex}>
        <Sidebar />
        <DappletsTable data={dapplets}/>
        <SidebarRight />
      </div>
  );
}

export default Dapplets;

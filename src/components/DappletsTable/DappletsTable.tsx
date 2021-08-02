import React from 'react';
import DappletImage from '../../components/DappletImage/DappletImage';
import {BurgerIcon} from '../../assets/images/menu'
import s from'./dappletsTable.module.css';
import { useSelector } from '../../types';
import DappletsTableElement from './DappletsTableElement';
import SearchPannel from './SearchPannel';

function DappletsTable(props:any) {
  const tags = useSelector(store => store.tags.tagsSuccess.data)
  
  return (
    <div>
      <div className={s.glass_card}>
        <SearchPannel />
          <hr className={s.separator}/>
          <table className={s.table_dapplets}>
            {
              props.data && props.data.data.map((item: any) => {
                return (
                  <DappletsTableElement item={item}/>
                )
              })
            }
          </table>
      </div>
    </div>
  );
}

export default DappletsTable;

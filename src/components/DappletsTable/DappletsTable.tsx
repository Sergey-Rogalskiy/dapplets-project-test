import React from 'react';
import DappletImage from '../../components/DappletImage/DappletImage';
import {BurgerIcon} from '../../assets/images/menu'
import s from'./dappletsTable.module.css';
import { useSelector } from '../../types';
import DappletsTableElement from './DappletsTableElement';

function DappletsTable(props:any) {
  const tags = useSelector(store => store.tags.tagsSuccess.data)
  
  return (
    <div>
      <div className={s.glass_card}>
        <div className={s.search_panel}>
          <input 
            className={s.search_input}
            placeholder='Search'/>
          <select className={s.search_dropdown}>
            <option value="volvo">Release Date</option> 
            <option value="saab">Rating</option>
            <option value="mercedes">Downloads</option>
          </select>
          <select className={s.search_dropdown}>
            <option value="volvo">Descending</option> 
            <option value="audi">Ascending</option>
          </select>
        </div>
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

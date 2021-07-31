import React from 'react';
import DappletImage from '../../components/DappletImage/DappletImage';
import {BurgerIcon} from '../../assets/images/menu'
import s from'./dappletsTable.module.css';
import { useSelector } from '../../types';

function DappletsTableElement(props:any) {
  const tags = useSelector(store => store.tags.tagsSuccess.data)
  const item = props.item
  return (
    <>
      <tr key={item.id}>
          <td className={s.flex}>
            <img src={BurgerIcon} alt='-' />
            <DappletImage name={item.icon} />
          </td>
          <td>
            <div>
              <p>{item.title}</p>
              <p>{item.address.slice(0,5)}...{item.address.slice(-5)}</p>
            </div>
          </td>
          <td>{item.description}</td>
          <td>{item.author}</td>
          {
            item.tags.length ? (
              item.tags.map((tag:any) => {
                return (
                  <div className={`${s.tags}`}>
                    <td>
                        <span>{tags[tag]?.name}</span>
                    </td>
                  </div>
                )
              })
            ) : (
              <div className={`${s.tags}`}>
                <td>
                  <span>'No Tags'</span>
                </td>
            </div>
              
            )
          }
          
          <td><button className={s.button_install}>Install</button></td>
          <div className={s.content}>
            <td>{item.text_1}</td>
            <td>{item.text_2}</td>
            <td>{item.text_3}</td>
            <td>{item.text_4}</td>
            <td>{item.text_5}</td>
            <td>{item.text_6}</td>
            <td>{item.text_7}</td>
            <td>{item.text_8}</td>
            <td>{item.text_9}</td>
          </div>
          <div className={s.hidden_search}>
            <td>{item.rating}</td>
            <td>{item.released}</td>
            <td>{item.downloads}</td>
          </div>
      </tr>
    </>
  );
}

export default DappletsTableElement;

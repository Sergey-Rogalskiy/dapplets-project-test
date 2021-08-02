import React from 'react';
import DappletImage from '../../components/DappletImage/DappletImage';
import {BurgerIcon} from '../../assets/images/menu'
import s from'./dappletsTable.module.css';
import { useSelector } from '../../types';

function DappletsTableElement(props:any) {
  const tags = useSelector(store => store.tags.tagsSuccess.data)
  const item = props.item
  return (
      <li key={item.id} className={s.element}>
          <div className={s.flex}>
            <img src={BurgerIcon} alt='-' />
            <DappletImage name={item.icon} />
          </div>
          <div>
            <div>
              <p className={s.title}>{item.title}</p>
              <p className={s.address}>{item.address.slice(0,5)}...{item.address.slice(-5)}</p>
            </div>
          </div>
          <div>{item.description}</div>
          <div className={s.author}>{item.author}</div>
          <div className={`${s.tags}`}>
            {
              item.tags.length ? (
                item.tags.map((tag:any) => {
                  return (
                      <div>
                          <span>{tags[tag]?.name}</span>
                      </div>
                  )
                })
              ) : (
                <div>
                  <span>'No Tags'</span>
                </div>
              )
            }
          </div>
          
          <div>
            <button className={s.button_install}>Install</button>
          </div>
          
          <div className={s.content}>
            <div>{item.text_1}</div>
            <div>{item.text_2}</div>
            <div>{item.text_3}</div>
            <div>{item.text_4}</div>
            <div>{item.text_5}</div>
            <div>{item.text_6}</div>
            <div>{item.text_7}</div>
            <div>{item.text_8}</div>
            <div>{item.text_9}</div>
          </div>
          <div className={s.hidden_search}>
            <div>{item.rating}</div>
            <div>{item.released}</div>
            <div>{item.downloads}</div>
          </div>
      </li>
  );
}

export default DappletsTableElement;

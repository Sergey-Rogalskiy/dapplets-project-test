import React from 'react';
import { useDispatch, useSelector } from '../../types';
import { getTags } from '../../services/actions/tags';
import s from './tags.module.css'

function Tags() {
  const dispatch = useDispatch()
  const tags = useSelector(store => store.tags.tagsSuccess)
  
  React.useEffect(()=>{
    dispatch(getTags())
  }, [dispatch])
  return (
    <>
      <h2>Tags</h2>
      <p>Total: {tags.total}</p>
      
      <table className={s.table_dapplets}>
        <tr>
        <th>id</th>
        <th>name</th>
        </tr>
        {
          tags.data && tags.data.map((item: any) => {
            return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
            )
          })
        }
      </table>
    </>
  );
}

export default Tags;

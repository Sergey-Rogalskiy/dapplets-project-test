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
        {
          tags.data && tags.data.map((item: any) => {
            return  <span>{item.name}</span>
          })
        }
    </>
  );
}

export default Tags;

import s from'./dappletsTable.module.css';
import { useSelector } from '../../types';

function SearchPannel() {
  const search = useSelector(store => store.tags.tagsSuccess.data)
  return (
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
  );
}

export default SearchPannel;

import React from 'react';
import DappletImage from '../../components/DappletImage/DappletImage';
import s from'./dappletsTable.module.css';

function DappletsTable(props:any) {
    console.log(props.data);
    
  return (
    <div>
      <h2>all dapplets</h2>
      <table className={s.table_dapplets}>
        <tr>
        <th>id</th>
        <th>icon</th>
        <th>title</th>
        <th>author</th>
        <th>rating</th>
        <th>address</th>
        <th>released</th>
        <th>downloads</th>
        <th>description</th>
        <th>text_1</th>
        <th>text_2</th>
        <th>text_3</th>
        <th>text_4</th>
        <th>text_5</th>
        <th>text_6</th>
        <th>text_7</th>
        <th>text_8</th>
        <th>text_9</th>
        <th>tags</th>
        </tr>
        {
          props.data && props.data.data.map((item: any) => {
            return (
              <tr>
                  <td>{item.id.slice(0,5)}</td>
                  <td><DappletImage name={item.icon} /></td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.rating}</td>
                  <td>{item.address.slice(0,5)}</td>
                  <td>{item.released.slice(0,10)}</td>
                  <td>{item.downloads}</td>
                  <td>{item.description.slice(0,5)}</td>
                  <td>{item.text_1.slice(0,5)}</td>
                  <td>{item.text_2.slice(0,5)}</td>
                  <td>{item.text_3.slice(0,5)}</td>
                  <td>{item.text_4.slice(0,5)}</td>
                  <td>{item.text_5.slice(0,5)}</td>
                  <td>{item.text_6.slice(0,5)}</td>
                  <td>{item.text_7.slice(0,5)}</td>
                  <td>{item.text_8.slice(0,5)}</td>
                  <td>{item.text_9.slice(0,5)}</td>
                  <td>{item.tags}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default DappletsTable;

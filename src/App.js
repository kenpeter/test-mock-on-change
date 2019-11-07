import React, {useState, useEffect, useRef, createRef} from 'react';

function Menu({buttonName}) {
  const menuItems = {download: 'download', view: 'view', delete: 'delete'};
  //test
  console.log('buttonName', buttonName);

  return (
    <>
      <button>{buttonName}</button>
      <ul>
        {Object.keys(menuItems).map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

function TableElement() {
  const items = [
    {
      file: 'file1',
      button: 'button1'
    },
    {
      file: 'file2',
      button: 'button2'
    },
    {
      file: 'file3',
      button: 'button3'
    }
  ];
  return (
    <table style={{borderCollapse: 'collapse', border: '1px solid black'}}>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={index}>
              <td style={{border: '1px solid black'}}>
                <a href="#">{item.file}</a>
              </td>
              <td style={{border: '1px solid black'}}>
                <Menu buttonName={item.button} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [uniqueKey, setUniqueKey] = useState('');
  // active index is 0
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <TableElement />
    </>
  );
}

export default App;

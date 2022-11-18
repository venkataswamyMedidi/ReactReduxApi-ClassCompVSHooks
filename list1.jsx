import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';

function List1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch('https://www.mocky.io/v2/5d0c720e3500005a00b8980b')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    console.log('data' + data);
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error || !Array.isArray(data)) {
    return <p>There was an error loading your data!</p>;
  }

  return (
    // <ul>
    //   {data.map(item => (
    //     <li key={data.id}>{data.company}</li>
    //   ))}
    // </ul>

    <div>
      {data.map((item) => (
        <div className="e-list-wrapper e-list-multi-line " key={item.id}>
          <p className="e-list-content">Company: {item.company}</p>
          <p className="e-list-content">Email: {item.email}</p>
          <p className="e-list-content">Phone: {item.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default List1;

// useEffect(async () => {
//      setLoading(true);
//   const result = await axios(
//     'https://www.mocky.io/v2/5d0c720e3500005a00b8980b'
//   );
//   setData(result.data);
// },[]);

// useEffect(() => {
//     // async await fetch function
//     const fetchData = async () => {
//       const result = await axios(
//         'https://www.mocky.io/v2/5d0c720e3500005a00b8980b'
//       );

//       setData(result.data);
//     };

//     fetchData();
//   }, []);

// useEffect(() => {
//   fetch('https://www.mocky.io/v2/5d0c720e3500005a00b8980b')
//     .then(response => response.json())
//     .then(data => setData(data))
//     .catch(error => console.log(error.message));
//   console.log('render!');
// }, []);

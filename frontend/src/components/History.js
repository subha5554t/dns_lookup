import React, {useEffect, useState} from 'react';
import { history } from '../api';

export default function History(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const load = async ()=>{
      setLoading(true);
      try{
        const res = await history();
        setItems(res.data);
      }catch(err){
        // ignore
      }finally{ setLoading(false); }
    };
    load();
  },[]);

  return (
    <div>
      <h3>Recent lookups</h3>
      {loading && <p>Loading history...</p>}
      {!items.length && <p>No history yet.</p>}
      <ul>
        {items.map(it=>(
          <li key={it._id}>
            <strong>{it.domain}</strong> — {new Date(it.queriedAt).toLocaleString()}
            <ul>
              {it.results.map((r,i)=>(<li key={i}>{r.address} (family: {r.family})</li>))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

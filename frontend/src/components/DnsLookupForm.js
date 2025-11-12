import React, {useState} from 'react';
import { lookup } from '../api';

export default function DnsLookupForm(){
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    if(!domain.trim()) return setError('Please enter a domain');
    setLoading(true);
    try{
      const res = await lookup(domain.trim());
      setResult(res.data);
    }catch(err){
      setError(err.response?.data?.error || err.message || 'Lookup failed');
    }finally{
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={submit} style={{display:'flex', gap:8}}>
        <input value={domain} onChange={e=>setDomain(e.target.value)} placeholder="example.com" style={{flex:1, padding:8}} />
        <button type="submit" style={{padding:'8px 12px'}}>Lookup</button>
      </form>

      {loading && <p>Looking up...</p>}
      {error && <p style={{color:'crimson'}}>{error}</p>}
      {result && (
        <div style={{marginTop:12}}>
          <h3>Result for: {result.domain}</h3>
          <ul>
            {result.addresses.map((a,i)=>(
              <li key={i}>{a.address} (family: {a.family})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import DnsLookupForm from './components/DnsLookupForm';
import History from './components/History';

export default function App(){
  return (
    <div className="container">
      <h1 style={{textAlign:'center'}}>DNS Lookup Tool</h1>
      <div className="card" style={{marginBottom:12}}>
        <DnsLookupForm />
      </div>
      <div className="card">
        <History />
      </div>
    </div>
  );
}

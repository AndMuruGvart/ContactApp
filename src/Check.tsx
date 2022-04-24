import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import AppList from './AppList';
import { RootState } from './store/store';
import { useToken } from './store/useToken';

export function Check() {
   const [data, setData] = useState(false);   
   const token =useSelector<RootState, string>(state=>state.tokenText);
    useEffect(() => {
        if (token) {
          setData(true);
        }

     }, [token]);
  
     return (
       <div>
          { (data) && (<AppList/> )}
       </div>
     );


  }




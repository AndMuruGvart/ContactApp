import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { set } from 'react-hook-form';
import AppList from './AppList';
import { usePostsData } from './hooks/usePostsData';

export function Check() {
      
   const [data]=usePostsData();
   let count=false;
   
   if (data.length>0) { count=true};

     return (
       <div>
          { count && (<AppList/> )}
                

       </div>

     );


  }




import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { set } from 'react-hook-form';
import AppList from './AppList';

export function CardsLists() {
      
     return (
       <div>
          {  (           <AppList/>       )}

       </div>

     );


  }





"use client"
import { useEffect, useState } from 'react'

type transitTypes = {
  path?: string | undefined,
  execute?: () => void | undefined,
}

export default function useNextTransition({path, execute} : transitTypes) {
    const [transit, settransit] = useState(false);
  
    const toggletransit = () => {
      settransit(true);
    };
  
    useEffect(() => {
      if (transit) {
        setTimeout(() => {
          if (path) window.location.pathname = `${path}`
          else if (execute) execute();
        }, 600);
      }
    }, [transit]);

    return { transit, toggletransit }
}

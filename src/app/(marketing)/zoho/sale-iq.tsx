'use client';

import { useEffect } from 'react';

// Define specific types for Zoho SalesIQ
interface ZohoSalesIQ {
  ready: () => void;
  widget?: {
    [key: string]: unknown;
  };
  chat?: {
    [key: string]: unknown;
  };
  visitor?: {
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

interface ZohoGlobal {
  salesiq?: ZohoSalesIQ;
  [key: string]: unknown;
}

// Extend the Window interface to include Zoho SalesIQ properties
declare global {
  interface Window {
    $zoho?: ZohoGlobal;
  }
}

const SalesIQ = () => {
  useEffect(() => {
    // Initialize Zoho SalesIQ
    if (typeof window !== 'undefined') {
      // Initialize the $zoho object
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || {
        ready: function () {},
      };

      // Create and append the script tag
      const script = document.createElement('script');
      script.id = 'zsiqscript';
      script.src =
        'https://salesiq.zohopublic.com/widget?wc=siq43a1fa0c1c2e9aa58672234bf7628518c32180969fc8eb482e361bb7109a5936';
      script.defer = true;

      // Check if script is already loaded to prevent duplicates
      if (!document.getElementById('zsiqscript')) {
        document.head.appendChild(script);
      }
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.getElementById('zsiqscript');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render any visible content
};

export default SalesIQ;

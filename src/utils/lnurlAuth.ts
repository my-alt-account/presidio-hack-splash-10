
/**
 * Utility functions for LNURL-auth implementation
 * Based on the spec: https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-auth.md
 */

import { v4 as uuidv4 } from 'uuid';

// Base URL of the LNURL-auth service
const LNURL_AUTH_SERVICE = 'https://lightninglogin.live/login';

/**
 * Generates a random k1 challenge and constructs LNURL-auth data
 */
export function generateLnurlAuth() {
  // Generate a random k1 challenge (32 bytes hex)
  const k1 = uuidv4().replace(/-/g, '');
  
  // Construct the LNURL with the k1 challenge
  const params = new URLSearchParams({
    tag: 'login',
    k1: k1,
    action: 'register'
  });
  
  const lnurl = `${LNURL_AUTH_SERVICE}?${params.toString()}`;
  
  // Encode as bech32 for QR code (in production, we'd use a proper bech32 library)
  // For this demo, we'll use the raw URL with the lightning: prefix
  const encoded = `lightning:${lnurl}`;
  
  return { lnurl, k1, encoded };
}

/**
 * Checks the status of an LNURL-auth request
 * @param k1 The k1 challenge to check
 * @returns A promise that resolves to true if authenticated, false otherwise
 */
export async function checkLnurlAuthStatus(k1: string): Promise<boolean> {
  try {
    const response = await fetch(`${LNURL_AUTH_SERVICE}/status/${k1}`);
    
    if (!response.ok) {
      return false;
    }
    
    const data = await response.json();
    return data.status === 'authenticated';
  } catch (error) {
    console.error('Error checking LNURL-auth status:', error);
    return false;
  }
}

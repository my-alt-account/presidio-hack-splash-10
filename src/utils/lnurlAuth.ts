
/**
 * Utility functions for LNURL-auth implementation
 * Based on the spec: https://github.com/lnurl/luds/blob/legacy/lnurl-auth.md
 */

import { v4 as uuidv4 } from 'uuid';

// Base URL of the LNURL-auth service
// Using the correct base URL for the API
const LNURL_AUTH_SERVICE = 'https://api.lightninglogin.live/v1';

/**
 * Generates a random k1 challenge and constructs LNURL-auth data
 */
export function generateLnurlAuth() {
  // Generate a random k1 challenge (32 bytes hex)
  const k1 = uuidv4().replace(/-/g, '');
  
  // Construct the LNURL with the k1 challenge
  // According to spec, we need tag=login and k1=random challenge
  const params = new URLSearchParams({
    tag: 'login',
    k1,
    action: 'login'  // Using login action instead of register
  });
  
  const lnurl = `${LNURL_AUTH_SERVICE}/auth?${params.toString()}`;
  
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
    // Use the correct status endpoint according to the API documentation
    const response = await fetch(`${LNURL_AUTH_SERVICE}/auth/status/${k1}`, {
      headers: {
        'Accept': 'application/json'
      },
      // Adding no-cors mode to help with CORS issues
      mode: 'cors',
    });
    
    if (!response.ok) {
      console.log('LNURL-auth status response not OK:', response.status, response.statusText);
      return false;
    }
    
    const data = await response.json();
    console.log('LNURL-auth status response:', data);
    
    // According to the API docs, check the 'verified' field
    return data.verified === true;
  } catch (error) {
    console.error('Error checking LNURL-auth status:', error);
    return false;
  }
}

/**
 * Generate mock LNURL-auth data for testing or when service is unavailable
 * This function simulates real auth data but doesn't interact with any real service
 */
export function generateMockLnurlAuth() {
  const k1 = uuidv4().replace(/-/g, '');
  return {
    lnurl: `https://example.com/lnurl-auth?k1=${k1}`,
    k1,
    encoded: `lightning:lnurl1dp68gurn8ghj7urp0yh8xarpva8g7untd9kzcmvd9c82pf7xz6mfduhkcmrv9ewxumtdakxvurrwtr`,
    mock: true
  };
}

/**
 * Mock function to simulate checking authentication status
 * Will always return true after a delay - for testing purposes only
 */
export function mockCheckLnurlAuthStatus(): Promise<boolean> {
  return new Promise(resolve => {
    // Simulate network delay
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
}

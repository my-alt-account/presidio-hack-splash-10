
/**
 * Utility functions for LNURL-auth implementation
 * Based on the spec: https://github.com/lnurl/luds/blob/legacy/lnurl-auth.md
 */

import { v4 as uuidv4 } from 'uuid';
import * as lnurl from 'lnurl';

// Base URL of the LNURL-auth service
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
  
  const lnurlString = `${LNURL_AUTH_SERVICE}/auth?${params.toString()}`;
  
  // Properly encode as bech32 for QR code using the lnurl library
  const encoded = lnurl.encode(lnurlString);
  const fullEncodedUrl = `lightning:${encoded}`;
  
  console.log('Generated LNURL auth data:', { lnurl: lnurlString, encoded: fullEncodedUrl });
  
  return { 
    lnurl: lnurlString, 
    k1, 
    encoded: fullEncodedUrl 
  };
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
      // Using correct CORS mode
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
  // Create a properly formatted mock LNURL
  const mockLnurl = `https://example.com/lnurl-auth?tag=login&k1=${k1}&action=login`;
  const encodedMock = `lightning:${lnurl.encode(mockLnurl)}`;
  
  return {
    lnurl: mockLnurl,
    k1,
    encoded: encodedMock,
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

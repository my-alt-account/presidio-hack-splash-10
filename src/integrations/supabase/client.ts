
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types'; // Ensure this import is correct

const SUPABASE_URL = "https://ytjjvoumwdaukygryzjj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0amp2b3Vtd2RhdWt5Z3J5empqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNzcyMTEsImV4cCI6MjA1OTY1MzIxMX0.AV2vaI7iZjC-LseQr_j61sRtAAhiiZ7eOmIlCUil2hg";

// Create a single supabase client for the entire app
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Helper function to sanitize file names for storage
export const sanitizeFileName = (fileName: string): string => {
  // Replace problematic characters and spaces with underscores
  const sanitized = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
  
  // Add timestamp to ensure uniqueness while preserving the original name
  const timestamp = new Date().getTime();
  const nameParts = sanitized.split('.');
  const extension = nameParts.pop() || '';
  const baseName = nameParts.join('.');
  
  return `${baseName}_${timestamp}.${extension}`;
};

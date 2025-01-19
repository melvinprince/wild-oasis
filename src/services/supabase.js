import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dngwlpthbkivsuqiayid.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuZ3dscHRoYmtpdnN1cWlheWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMzQ0ODQsImV4cCI6MjA1MjgxMDQ4NH0.RlpRo9M87NuMMhthhxpQUzFJhwGW6_oi4M5Skvq8Nzs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

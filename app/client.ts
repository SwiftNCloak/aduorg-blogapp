import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ibtbpojwimifuejbndbj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlidGJwb2p3aW1pZnVlamJuZGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5NjQzMTgsImV4cCI6MjAxMzU0MDMxOH0.lDPFRVp2I8j1hjeAH0ETR0Lw3ITyf0aVg6JOxT-BsNI'
export const supabase = createClient(supabaseUrl, supabaseKey)
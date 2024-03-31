
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qjayxirjyrxqjlmtcqcw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqYXl4aXJqeXJ4cWpsbXRjcWN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxMzE4OTYsImV4cCI6MjAxNzcwNzg5Nn0.nAufiKTeo1pjosXvTMYb35T7qLij3xm1yaM9CmPVpXE'
export const supabase = createClient(supabaseUrl, supabaseKey)
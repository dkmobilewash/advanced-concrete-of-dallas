import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase environment variables are not set. Contact form submissions will fail until VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are configured.'
  )
}

// createClient throws synchronously on an invalid URL, which would crash the
// whole page since this module is imported at the top level. Fall back to a
// syntactically valid placeholder so the client always initializes; a missing
// real config surfaces later as a network error, handled by the contact form.
export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder-anon-key')

export interface ContactSubmission {
  name: string
  phone: string
  email: string
  service: string
  description: string
}

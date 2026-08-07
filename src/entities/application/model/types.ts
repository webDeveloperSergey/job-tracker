import { Database } from '@/shared/types/supabase'

export type Application = Database['public']['Tables']['applications']['Row']
export type ApplicationInsert =
	Database['public']['Tables']['applications']['Insert']
export type ApplicationUpdate =
	Database['public']['Tables']['applications']['Update']

export const DEFAULT_APPLICATION_STATUSES = [
	'applied',
	'hr_screening',
	'technical_interview',
	'behavioral_interview',
	'offer',
	'rejected'
] as const

export type ApplicationStatus = (typeof DEFAULT_APPLICATION_STATUSES)[number]

'use client'

import { useQuery } from '@tanstack/react-query'
import { createClient } from '@/shared/lib/supabase/client'
import type { Application } from '../model/types'

export const APPLICATIONS_QUERY_KEY = ['applications'] as const

export function useApplications() {
	const supabase = createClient()

	return useQuery({
		queryKey: APPLICATIONS_QUERY_KEY,
		queryFn: async (): Promise<Application[]> => {
			const { data, error } = await supabase
				.from('applications')
				.select('*')
				.order('created_at', { ascending: false })

			if (error) throw error
			return data
		}
	})
}

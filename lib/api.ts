import { supabase } from '@/lib/supabase'

const { data: capstoneData } = supabase.storage
  .from('documents')
  .getPublicUrl('Sakol_Life_Bachelors_Capstone_2026.pdf')

const { data: presentation2Data } = supabase.storage
  .from('documents')
  .getPublicUrl('fyp-presentation2.pdf')

  const { data: presentation1Data } = supabase.storage
    .from('documents')
    .getPublicUrl('fyp-presentation1.pdf')

export const capstoneUrl = capstoneData.publicUrl
export const presentation2Url = presentation2Data.publicUrl
export const presentation1Url = presentation1Data.publicUrl

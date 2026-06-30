const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

const BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/raw/upload`

export const capstoneUrl = `${BASE_URL}/Sakol_Life_Bachelors_Capstone_2026.pdf`
export const presentation2Url = `${BASE_URL}/fyp-presentation2.pdf`
export const presentation1Url = `${BASE_URL}/fyp-presentation1.pdf`

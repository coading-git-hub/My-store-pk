export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-23'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "sksx0K7155lIvoIQw6CDkGaH7i8YQkroGkNDxRfDiOJeeQK7DzZkjrgzMkZOe6DPdNqaox7OHuOcPb2OcWLqdEkwpQnM8L9subYGXKS4WjlD731JWEHoYMqI2Hxp3ZWgepJAyRMzjtlXBYXpdzFvFtiumIL3caG4cIxIguxGuOINL1rczEJb",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

import type { TypedDocumentString } from "@/graphql/graphql";

/** Send a graphql operation to an API endpoint */
export const gql_fetch = async <TResult, TVariables>(
  url: string,
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
  const response = await fetch(
    url,
    {
      method: 'POST',

      headers: {
        'content-type': 'application/json'
      },

      body: JSON.stringify({
        query,
        variables
      })
    }
  )

  if (response.status !== 200) {
    throw new Error(`Failed to fetch: ${response.statusText}. Body: ${await response.text()}`)
  }

  return (await response.json()).data
}

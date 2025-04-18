import type { CodegenConfig } from "@graphql-codegen/cli"
import { config as dotenv } from "@dotenvx/dotenvx"

dotenv({ path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env' })

const config: CodegenConfig = {
  schema: process.env.GRAPHQL_ENDPOINT,
  documents: ['./src/**/*.{ts,tsx,astro}'],
  ignoreNoDocuments: true,

  generates: {
    './src/graphql/': {
      preset: 'client',

      config: {
        useTypeImports: true,
        documentMode: 'string',
        avoidOptionals: true,
      }
    },

    './schema.graphql': {
      plugins: ['schema-ast'],

      config: {
        includeDirectives: true
      }
    }
  }
}

export default config

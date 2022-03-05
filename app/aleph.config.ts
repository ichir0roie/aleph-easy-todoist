import type { Config } from "https://deno.land/x/aleph@v0.3.0-beta.19/types.d.ts"

export default <Config>{
  build: {
    target: 'es2020',
    browsers: { chrome: 90},
    outputDir: '/dist',
  }
}
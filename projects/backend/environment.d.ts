declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PG_DB: string
      PG_USER: string
      PG_PASSWORD: string
      PG_HOST: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}

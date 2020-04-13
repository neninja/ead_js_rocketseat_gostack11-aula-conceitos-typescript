/**
 * Para criar: name, email, password
 */
interface TechObjects{
  title: string
  experience: number
}

interface CreateUserData {
  name?: string // opcional
  email: string
  password: string
  techs: Array<string | TechObjects>
  projects: string[]
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password
  }
}

/*
   export default function createUser(name = '', email: string, password: string) {
   const user = {
   name,
   email,
   password
   }
   }
 */

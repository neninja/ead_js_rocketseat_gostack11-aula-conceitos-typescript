import { Request, Response } from 'express'
import createUser from './services/CreateUser'

// como express não é importado diretamente nesse arquivo é necessário
// declarar explicitamente a tipagem dos parâmetros
export function HelloWorld(request: Request, response: Response){
  const user = createUser({
    email: 'diego@rocketseat.com.br',
    password: '121',
    techs: [
      'Node',
      'ReactJS',
      { title: 'Javascript', experience: 2 }
    ],
    projects: [
      'bla',
      'bla'
    ]
  })

  return response.json({ message: 'Hello World' })
}

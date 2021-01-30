# React Avanzado: Fullstack Next.js, Apollo, MongoDB y GraphQL

https://www.udemy.com/course/fullstack-react-graphql-y-apollo-de-principiante-a-experto/

## Playground Queries

### Create User

Query:
```
mutation createUser($input: UserInput) {
  createUser(input: $input) {
    id,
    name,
    email,
    createdAt,
    updatedAt,
  }
}
```

Query Variables:
```
{
  "input": {
  	"name": "Romina",
    "email": "rominavarela@github.com",
    "password": "rominapass"
	}
}
```

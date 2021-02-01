# React Avanzado: Fullstack Next.js, Apollo, MongoDB y GraphQL

https://www.udemy.com/course/fullstack-react-graphql-y-apollo-de-principiante-a-experto/

## Playground Queries

### Create User

Query:
```
mutation createUser($input: UserInput) {
  createUser(input: $input) {
    _id,
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

### Login

Query:
```
mutation login($input: AuthInput) {
  login(input: $input) {
    token,
  }
}
```

Query Variables:
```
{
  "input": {
    "email": "rominavarela@github.com",
    "password": "rominapass"
	}
}
```

### Get User

Query:
```
query getUser {
  getUser {
    _id,
    name,
    email,
    createdAt,
    updatedAt,
  }
}
```

Headers:
```
{
  "Authorization": token
}
```

### Create Product

Query:
```
mutation createProduct($input: ProductInput) {
  createProduct(input: $input) {
    name,
    count,
    price,
    createdAt,
    updatedAt,
  }
}
```

Query Variables:
```
{
  "input": {
  	"name": "Fish",
    "count": 20,
    "price": 5.0
	}
}
```

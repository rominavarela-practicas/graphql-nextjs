# React Avanzado: Fullstack Next.js, Apollo, MongoDB y GraphQL

https://www.udemy.com/course/fullstack-react-graphql-y-apollo-de-principiante-a-experto/

## Playground Queries

### Users and Auth

#### Create User

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

#### Login

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

#### Get User

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

### Products

#### Create Product

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

#### Get Product

Query:

```
query getProduct {
  getProduct(id: "6018929d5f551bc8a12b7990") {
    _id
    name
    count
    price
    createdAt
    updatedAt
  }
}
```

#### Update Product

Query:

```
mutation updateProduct($id:ID!, $input: ProductInput) {
  updateProduct(id: $id, input: $input) {
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
  "id": "6018929d5f551bc8a12b7990",
  "input": {
  	"name": "Cat",
    "count": 20,
    "price": 10.0
	}
}
```

#### Delete Product

Query

```
mutation deleteProduct {
  deleteProduct(id: "601892c55f551bc8a12b7992")
}
```

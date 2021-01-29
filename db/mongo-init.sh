mongo -- "$MONGO_INITDB_DATABASE" <<EOF
db.auth('admin-user', 'admin-password')

db = db.getSiblingDB('$MONGO_INITDB_DATABASE')

db.createUser({
  user: '$MONGODB_USER',
  pwd: '$MONGODB_PASS',
  roles: [
    {
      role: 'readWrite',
      db: '$MONGO_INITDB_DATABASE',
    },
  ],
})

EOF

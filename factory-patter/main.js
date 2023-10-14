import crypto from "crypto"

const createUser = (firstName, lastName) => ({
  id: crypto.randomUUID(),
  createdAt: Date.now(),
  firstName,
  lastName,
  fullName: `${firstName} ${lastName}`,
  delete: () => console.log(`User ${firstName} ${lastName} deleted`),
})
const user1 = createUser("Omar", "Ehab")
const user2 = createUser("Ahmed", "Ehab")

console.log(user1.delete === user2.delete)

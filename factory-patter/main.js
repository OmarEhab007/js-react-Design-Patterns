import crypto from "crypto"

const createUser = (firstName, lastName) => ({
  id: crypto.randomUUID(),
  createdAt: Date.now(),
  firstName,
  lastName,
  fullName: `${firstName} ${lastName}`,
})

const user1 = createUser("Omar", "Ehab")
const user2 = createUser("Ahmed", "Ehab")

console.log(user1)

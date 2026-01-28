# RESTful API Activity - Genroj Louise Laguna

## Best Practices Implementation

### 1. Environment Variables

**Why did we put `BASE_URI` in `.env` instead of hardcoding it?**

Answer:  
We put `BASE_URI` in the `.env` file to avoid hardcoding configuration values in the code. This makes the application easier to maintain and update, especially if the base route changes in the future. It also follows best practices for security and flexibility.

---

### 2. Resource Modeling

**Why did we use plural nouns (e.g., `/dishes`) for our routes?**

Answer:  
Plural nouns are used because the route represents a collection of resources, not just one item. Using `/dishes` follows RESTful API conventions and makes the API easier to understand and more consistent.

---

### 3. Status Codes

**When do we use `201 Created` vs `200 OK`?**

Answer:  
`201 Created` is used when a new resource is successfully created, such as adding a new dish. `200 OK` is used when a request is successful but does not create new data, like retrieving or updating existing records.

**Why is it important to return `404` instead of just an empty array or a generic error?**

Answer:  
Returning `404 Not Found` clearly tells the client that the requested resource does not exist. This provides better feedback than an empty array or generic error and helps developers easily identify issues.

---

### 4. Testing

**Successful GET Request Screenshot**

(Paste a screenshot here showing a successful GET request to `/api/v1/dishes`)

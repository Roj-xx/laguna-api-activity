# RESTful API Activity - Genroj Louise Laguna

## Best Practices Implementation

### 1. Environment Variables

**Why did we put `BASE_URI` in `.env` instead of hardcoding it?**

Answer:  
We put BASE_URI in the .env file so it is easy to change without editing the code in the server. This helps keep the project organized and flexible.

---

### 2. Resource Modeling

**Why did we use plural nouns (e.g., `/dishes`) for our routes?**

Answer:  
We use plural words because the route represents many items or objects, not just one.

---

### 3. Status Codes

**When do we use `201 Created` vs `200 OK`?**

Answer:  
201 Created is used when a new dish is added.
200 OK is used when data is successfully retrieved or updated.

**Why is it important to return `404` instead of just an empty array or a generic error?**

Answer:  
404 Not Found tells the user that the data does not exist. It makes errors easier to understand.

---

### 4. Testing

**Successful GET Request Screenshot**

<img width="1365" height="717" alt="Screenshot 2026-01-28 143523" src="https://github.com/user-attachments/assets/a97c3986-8969-4d6e-8075-177c9f3eb4b6" />


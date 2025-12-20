# Backend Interview Questions - Food Ordering Website

## Node.js & Express.js Questions

### Basic Level

1. **Q: Explain the difference between `app.js` and `server.js` in this project.**
   - A: `server.js` is the entry point that starts the server and connects to the database. `app.js` creates and configures the Express application with middleware and routes.

2. **Q: What is the purpose of `express.json()` middleware?**
   - A: It parses incoming JSON payloads and makes the data available in `req.body`. Without it, `req.body` would be undefined for JSON requests.

3. **Q: Why do we use `cookie-parser` middleware?**
   - A: To parse cookies from incoming requests and make them available in `req.cookies`. Essential for JWT token storage in cookies.

4. **Q: What is the MVC pattern implementation in this project?**
   - A: Routes → Controllers → Models. Routes define endpoints, Controllers handle business logic, Models define data structure and database operations.

### Intermediate Level

5. **Q: Explain the authentication flow in this application.**
   - A: User registers/logs in → Password hashed with bcrypt → JWT token generated → Token stored in HTTP-only cookie → Middleware validates token on protected routes → User data attached to req object.

6. **Q: What are the security benefits of storing JWT in cookies vs localStorage?**
   - A: Cookies can be HTTP-only (not accessible via JavaScript), reducing XSS attack risks. They're automatically sent with requests and can have secure flags for HTTPS-only transmission.

7. **Q: How does the file upload system work?**
   - A: Multer middleware captures multipart form data → Stores file in memory → ImageKit service uploads to cloud → Returns URL → URL stored in database.

8. **Q: What is the difference between `authUserMiddleware` and `authFoodPartnerMiddleware`?**
   - A: Both validate JWT tokens but attach different user types to the request object. One for customers (`req.user`) and one for restaurant partners (`req.foodPartner`).

## MongoDB & Mongoose Questions

### Basic Level

9. **Q: What is the purpose of `timestamps: true` in Mongoose schemas?**
   - A: Automatically adds `createdAt` and `updatedAt` fields to documents, tracking when they were created and last modified.

10. **Q: Explain the relationship between Food and FoodPartner models.**
    - A: One-to-many relationship. Each food item belongs to one food partner (restaurant), referenced by ObjectId with `ref: "foodpartner"`.

11. **Q: What does `unique: true` do in the email field?**
    - A: Creates a unique index in MongoDB, ensuring no two documents can have the same email value, preventing duplicate registrations.

### Intermediate Level

12. **Q: How would you implement pagination for the `getFoodItems` endpoint?**
    - A: Use `skip()` and `limit()` methods: `foodModel.find({}).skip((page-1) * limit).limit(limit)`. Add query parameters for page and limit.

13. **Q: What's the difference between `findOne()` and `findById()` in Mongoose?**
    - A: `findById()` is a shorthand for `findOne({_id: id})`. Both return a single document, but `findById()` is more explicit for ID-based queries.

14. **Q: How would you implement soft delete for food items?**
    - A: Add `isDeleted: {type: Boolean, default: false}` to schema. Instead of `deleteOne()`, update `isDeleted: true`. Modify queries to filter out deleted items.

## Security Questions

### Intermediate Level

15. **Q: Identify security vulnerabilities in the auth controller.**
    - A: JWT secret hardcoded as string, missing input validation, no rate limiting, password not hashed for food partners, missing return statements allowing code execution after errors.

16. **Q: How would you implement password strength validation?**
    - A: Use regex patterns or libraries like `validator.js`. Check minimum length, uppercase, lowercase, numbers, special characters. Validate on both client and server side.

17. **Q: What is bcrypt salt rounds and why use 10?**
    - A: Salt rounds determine hashing complexity. 10 rounds means 2^10 iterations. It's a balance between security and performance - secure enough against brute force but fast enough for user experience.

### Advanced Level

18. **Q: How would you prevent JWT token theft and replay attacks?**
    - A: Use short-lived access tokens with refresh tokens, implement token rotation, add IP/device binding, use secure HTTP-only cookies, implement logout blacklisting.

19. **Q: Explain how you'd implement role-based access control (RBAC).**
    - A: Add roles array to user schema, create middleware to check required roles, implement permission-based access, use hierarchical roles (admin > manager > user).

## Architecture & Design Questions

### Intermediate Level

20. **Q: How would you handle database transactions for order processing?**
    - A: Use Mongoose transactions with `session.startTransaction()`, perform all operations within the session, commit on success, abort on failure to ensure data consistency.

21. **Q: Explain how you'd implement caching for frequently accessed food items.**
    - A: Use Redis for in-memory caching. Cache popular items with TTL, implement cache-aside pattern, invalidate cache on updates, use cache keys like `food:${id}`.

22. **Q: How would you structure error handling middleware?**
    - A: Create centralized error handling middleware, define custom error classes, use try-catch in async functions, implement proper HTTP status codes and error messages.

### Advanced Level

23. **Q: How would you scale this application for high traffic?**
    - A: Implement horizontal scaling with load balancers, database sharding/replication, microservices architecture, CDN for static assets, caching layers, queue systems for async processing.

24. **Q: Explain how you'd implement real-time order tracking.**
    - A: Use WebSockets (Socket.io), implement event-driven architecture, create order status updates, maintain connection pools, handle connection failures gracefully.

## Code Quality & Testing Questions

### Intermediate Level

25. **Q: How would you implement input validation for API endpoints?**
    - A: Use validation libraries like Joi or express-validator, create validation middleware, validate request body/params/query, return descriptive error messages.

26. **Q: What testing strategies would you implement?**
    - A: Unit tests for controllers/services, integration tests for API endpoints, database tests with test containers, mocking external services, test coverage reporting.

27. **Q: How would you implement API documentation?**
    - A: Use Swagger/OpenAPI specification, implement with swagger-jsdoc and swagger-ui-express, document all endpoints with request/response schemas, include authentication requirements.

## Performance & Optimization Questions

### Advanced Level

28. **Q: How would you optimize database queries in this application?**
    - A: Create indexes on frequently queried fields, use aggregation pipelines for complex queries, implement query result caching, use lean() for read-only operations, avoid N+1 queries.

29. **Q: Explain how you'd implement file upload optimization.**
    - A: Implement file size limits, validate file types, use streaming uploads, compress images/videos, implement progress tracking, handle upload failures gracefully.

30. **Q: How would you monitor application performance in production?**
    - A: Use APM tools (New Relic, DataDog), implement custom metrics, log performance data, monitor database query times, track API response times, set up alerts for anomalies.

## Debugging & Troubleshooting Questions

### Practical Scenarios

31. **Q: A user reports they can't login despite correct credentials. How would you debug?**
    - A: Check server logs, verify password hashing/comparison, test JWT generation, check database connectivity, validate middleware execution, test with different browsers/devices.

32. **Q: Food items are not appearing for users. What could be wrong?**
    - A: Check authentication middleware, verify database queries, test API endpoints, check CORS settings, validate frontend-backend communication, examine error logs.

33. **Q: File uploads are failing intermittently. How would you investigate?**
    - A: Check ImageKit service status, monitor network connectivity, validate file size limits, examine multer configuration, test with different file types, check error handling.

## System Design Questions

### Advanced Level

34. **Q: Design a notification system for order updates.**
    - A: Implement event-driven architecture with message queues (RabbitMQ/Kafka), create notification service, support multiple channels (email, SMS, push), handle delivery failures with retry logic.

35. **Q: How would you implement a recommendation system for food items?**
    - A: Collect user behavior data, implement collaborative filtering, use machine learning algorithms, create recommendation API, A/B test different algorithms, handle cold start problems.

## Best Practices Questions

36. **Q: What environment variables should never be committed to version control?**
    - A: Database credentials, JWT secrets, API keys, third-party service credentials, encryption keys, production URLs.

37. **Q: How would you implement graceful shutdown for this application?**
    - A: Listen for SIGTERM/SIGINT signals, close database connections, finish processing current requests, stop accepting new requests, implement timeout for forced shutdown.

38. **Q: Explain the importance of API versioning and how you'd implement it.**
    - A: Ensures backward compatibility, allows gradual migration, supports multiple client versions. Implement via URL path (/api/v1/), headers, or query parameters.

## Code Review Questions

39. **Q: What improvements would you suggest for the current codebase?**
    - A: Fix typos (becryptjs), add proper error handling, implement input validation, complete missing functions, add TypeScript, implement proper logging, add tests.

40. **Q: How would you refactor the authentication controller for better maintainability?**
    - A: Extract common logic into utility functions, implement proper error handling, add input validation, separate concerns, use consistent naming conventions, add comprehensive comments.
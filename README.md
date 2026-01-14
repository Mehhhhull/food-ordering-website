# Food Ordering Website - Backend Documentation
Backend Specific Project

## Project Overview
A comprehensive food ordering platform backend built with Node.js, Express.js, and MongoDB. The system supports two types of users: regular customers and food partners (restaurants), with complete authentication, authorization, and file upload capabilities.

## Architecture Overview

### Project Structure
```
backend/
├── server.js              # Entry point - starts the server
├── src/
│   ├── app.js             # Express app configuration
│   ├── db/
│   │   └── db.js          # MongoDB connection logic
│   ├── models/
│   │   ├── user.model.js       # Customer user schema
│   │   ├── foodpartner.model.js # Restaurant partner schema
│   │   └── food.model.js       # Food item schema
│   ├── controllers/
│   │   ├── auth.controller.js  # Authentication logic
│   │   └── food.controller.js  # Food operations logic
│   ├── routes/
│   │   ├── auth.routes.js      # Authentication endpoints
│   │   └── food.routes.js      # Food-related endpoints
│   ├── middlewares/
│   │   └── auth.middleware.js  # JWT authentication middleware
│   └── services/
│       └── storage.service.js  # ImageKit file upload service
├── package.json           # Dependencies and scripts
└── .env                   # Environment variables
```

## Technology Stack

### Core Technologies
- **Node.js**: Runtime environment
- **Express.js v5.1.0**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose v9.0.0**: ODM for MongoDB

### Authentication & Security
- **JWT (jsonwebtoken v9.0.2)**: Token-based authentication
- **bcryptjs v3.0.3**: Password hashing
- **cookie-parser v1.4.7**: Cookie handling

### File Upload & Storage
- **ImageKit**: Cloud-based media management
- **Multer**: Multipart form data handling
- **UUID v4**: Unique file naming

### Environment Management
- **dotenv v17.2.3**: Environment variable management

## Database Schema Design

### User Model (Customer)
```javascript
{
  fullName: String (required),
  email: String (required, unique),
  password: String (hashed),
  timestamps: true
}
```

### Food Partner Model (Restaurant)
```javascript
{
  name: String (required),           // Restaurant name
  contactName: String (required),    // Contact person
  phone: String (required),
  address: String (required),
  email: String (required, unique),
  password: String (required, hashed)
}
```

### Food Model
```javascript
{
  name: String (required),
  video: String (required),          // Video URL from ImageKit
  description: String,
  foodPartner: ObjectId (ref: "foodpartner")
}
```

## API Endpoints

### Authentication Routes (`/api/auth`)

#### User Authentication
- **POST** `/user/register` - Register new customer
- **POST** `/user/login` - Customer login
- **GET** `/user/logout` - Customer logout

#### Food Partner Authentication
- **POST** `/foodpartner/register` - Register new restaurant
- **POST** `/foodpartner/login` - Restaurant login
- **GET** `/foodpartner/logout` - Restaurant logout

### Food Routes (`/api/foods`)
- **POST** `/` - Create food item (Protected - Food Partner only)
- **GET** `/` - Get all food items (Protected - User only)

## Authentication & Authorization

### JWT Implementation
- **Token Generation**: Uses JWT with user/partner ID as payload
- **Token Storage**: HTTP-only cookies for security
- **Token Verification**: Middleware validates tokens on protected routes

### Middleware Protection
- `authUserMiddleware`: Protects user-specific routes
- `authFoodPartnerMiddleware`: Protects food partner routes

### Security Features
- Password hashing with bcrypt (salt rounds: 10)
- JWT secret from environment variables
- Cookie-based token storage
- Role-based access control

## File Upload System

### ImageKit Integration
- **Cloud Storage**: Videos stored on ImageKit CDN
- **Upload Process**: Multer → Memory Storage → ImageKit
- **File Naming**: UUID v4 for unique identifiers
- **Configuration**: Public/Private keys and URL endpoint from env

## Environment Configuration

### Required Environment Variables
```env
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=imagekit_public_key
IMAGEKIT_PRIVATE_KEY=imagekit_private_key
IMAGEKIT_URL_ENDPOINT=imagekit_url_endpoint
```

## Server Configuration

### Express App Setup
- **Port**: 3000 (hardcoded)
- **Middleware**: JSON parsing, cookie parsing
- **CORS**: Not configured (needs implementation)
- **Database**: MongoDB connection on startup

### Error Handling
- Basic error responses with status codes
- Try-catch blocks in async functions
- Database connection error handling

## Code Issues & Improvements Needed

### Critical Bugs
1. **Typo in auth.controller.js**: `becryptjs` should be `bcryptjs`
2. **JWT Secret**: Using string literal instead of `process.env.JWT_SECRET`
3. **Missing return statements**: Login functions missing returns
4. **Incomplete functions**: `loginFoodPartner` and `logoutFoodPartner` are empty
5. **Missing password hashing**: Food partner registration missing `hashedPassword`

### Security Improvements
1. Add input validation and sanitization
2. Implement rate limiting
3. Add CORS configuration
4. Use HTTPS in production
5. Add request logging
6. Implement proper error handling middleware

### Code Quality Improvements
1. Add TypeScript for better type safety
2. Implement proper logging system
3. Add API documentation (Swagger)
4. Add unit and integration tests
5. Implement database transactions
6. Add data validation schemas (Joi/Yup)

## Development Workflow

### MVC Pattern Implementation
**Routes** → **Controllers** → **Models**
- Routes define endpoints and middleware
- Controllers handle business logic
- Models define data structure and database operations

### Database Operations
- Mongoose for ODM operations
- Async/await pattern for database calls
- Population for referenced documents
- Unique constraints on email fields

## Deployment Considerations

### Production Requirements
1. Environment-specific configurations
2. Database connection pooling
3. Process management (PM2)
4. Load balancing
5. SSL certificate setup
6. Monitoring and logging
7. Backup strategies

### Performance Optimizations
1. Database indexing
2. Query optimization
3. Caching implementation (Redis)
4. Image compression
5. API response compression
6. Connection pooling
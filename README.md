# 🍕 Video Zomato - Food Ordering Platform

A modern, video-first food ordering platform built with the MERN stack. Users can discover restaurants through engaging video content, while food partners can showcase their dishes with dynamic video presentations.

## 🎯 Project Overview

Video Zomato revolutionizes food ordering by replacing static images with engaging video content. The platform supports two types of users:
- **Customers**: Browse food videos, like/save items, and discover restaurants
- **Food Partners**: Upload video content, manage their restaurant profile, and showcase dishes

## 🚀 Features

### For Customers
- 📱 **Video-First Experience**: TikTok-style vertical video feed
- ❤️ **Like & Save**: Interactive engagement with food videos
- 🔍 **Restaurant Discovery**: Find restaurants through video content
- 📱 **Responsive Design**: Optimized for all devices
- 🔐 **Secure Authentication**: JWT-based user authentication

### For Food Partners
- 🎥 **Video Upload**: Upload food videos with descriptions
- 📊 **Analytics**: Track likes, saves, and engagement
- 🏪 **Profile Management**: Manage restaurant information
- 📱 **Mobile-Friendly**: Upload and manage content on any device

### Technical Features
- 🔒 **JWT Authentication**: Secure token-based authentication
- 📁 **File Upload**: Video upload with ImageKit integration
- 🎨 **Modern UI**: Responsive design with smooth animations
- 🔄 **Real-time Updates**: Dynamic content updates
- 📱 **Mobile-First**: Optimized for mobile devices

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js v5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose v9.0.0** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **ImageKit** - Cloud media management
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 19.2.0** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Framer Motion** - Animations
- **Vite** - Build tool and dev server

### Database Schema
- **Users**: Customer accounts with authentication
- **Food Partners**: Restaurant accounts
- **Foods**: Video content with metadata
- **Likes**: User engagement tracking
- **Saves**: Bookmark functionality

## 📁 Project Structure

```
video-zomato/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js      # Authentication logic
│   │   │   ├── food.controller.js      # Food operations
│   │   │   └── food-partner.controller.js
│   │   ├── models/
│   │   │   ├── user.model.js           # Customer schema
│   │   │   ├── foodpartner.model.js    # Restaurant schema
│   │   │   ├── food.model.js           # Food item schema
│   │   │   ├── likes.model.js          # Likes tracking
│   │   │   └── save.model.js           # Saves tracking
│   │   ├── routes/
│   │   │   ├── auth.routes.js          # Authentication endpoints
│   │   │   ├── food.routes.js          # Food operations
│   │   │   └── food-partner.routes.js  # Partner operations
│   │   ├── middlewares/
│   │   │   └── auth.middleware.js      # JWT verification
│   │   ├── services/
│   │   │   └── storage.service.js      # ImageKit integration
│   │   ├── db/
│   │   │   └── db.js                   # Database connection
│   │   └── app.js                      # Express app setup
│   ├── server.js                       # Server entry point
│   ├── package.json
│   └── .env                           # Environment variables
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Landing.jsx             # Landing page
│   │   │   ├── auth/                   # Authentication pages
│   │   │   ├── general/                # User pages
│   │   │   └── food-partner/           # Partner pages
│   │   ├── components/
│   │   │   ├── ReelFeed.jsx           # Video feed component
│   │   │   ├── BottomNav.jsx          # Navigation
│   │   │   └── Header.jsx             # Header component
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx          # Route configuration
│   │   ├── styles/                     # CSS files
│   │   └── main.jsx                   # React entry point
│   ├── package.json
│   └── index.html
├── README.md
└── notes.md                           # Interview questions
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- ImageKit account (for file uploads)

### 1. Clone the Repository
```bash
git clone https://github.com/Mehhhhull/food-ordering-website.git
cd food-ordering-website
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
JWT_SECRET=your_jwt_secret_key_here
MONGODB_URI=mongodb://localhost:27017/food-view
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Database Setup
Make sure MongoDB is running:
```bash
# For local MongoDB
mongod

# Or use MongoDB Atlas cloud connection
```

## 🚀 Running the Application

### Development Mode

1. **Start Backend Server**:
```bash
cd backend
npx nodemon server.js
```
Backend runs on: `http://localhost:3000`

2. **Start Frontend Development Server**:
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:5173`

### Production Build

1. **Build Frontend**:
```bash
cd frontend
npm run build
```

2. **Start Production Server**:
```bash
cd backend
npm start
```

## 🔗 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /user/register` - Register new customer
- `POST /user/login` - Customer login
- `GET /user/logout` - Customer logout
- `POST /food-partner/register` - Register restaurant
- `POST /food-partner/login` - Restaurant login
- `GET /food-partner/logout` - Restaurant logout

### Food Routes (`/api/foods`)
- `GET /` - Get all food items (Protected - User)
- `POST /` - Create food item (Protected - Food Partner)
- `POST /like` - Like/unlike food (Protected - User)
- `POST /save` - Save/unsave food (Protected - User)
- `GET /save` - Get saved foods (Protected - User)

### Food Partner Routes (`/api/food-partner`)
- `GET /:id` - Get food partner profile (Protected - User)

## 🎨 User Interface

### Landing Page
- Modern, responsive design with video demonstrations
- Signup dropdown for customer/restaurant registration
- Mobile-optimized with centered phone mockup

### Video Feed
- TikTok-style vertical video scrolling
- Auto-play videos with intersection observer
- Like, save, and comment interactions
- Restaurant profile links

### Authentication
- Separate flows for customers and restaurants
- JWT token management with HTTP-only cookies
- Form validation and error handling

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with salt rounds
- **CORS Configuration**: Controlled cross-origin requests
- **Input Validation**: Server-side validation
- **HTTP-Only Cookies**: Secure token storage
- **Environment Variables**: Sensitive data protection

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile Large**: 576px - 767px
- **Mobile Medium**: 480px - 575px
- **Mobile Small**: 320px - 479px

## 🐛 Known Issues & Solutions

### Common Issues:
1. **CORS Errors**: Ensure backend CORS is configured for frontend URL
2. **File Upload Fails**: Check ImageKit credentials in .env
3. **Authentication Issues**: Verify JWT_SECRET is set
4. **Database Connection**: Ensure MongoDB is running

### Troubleshooting:
```bash
# Check backend logs
cd backend && npx nodemon server.js

# Check frontend console for errors
# Open browser developer tools

# Verify environment variables
cat backend/.env
```

## 🚀 Deployment

### Backend Deployment (Heroku/Railway)
1. Set environment variables
2. Configure MongoDB Atlas
3. Deploy with build scripts

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure API base URL

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Mehul Kumar Singh**
- GitHub: [@Mehhhhull](https://github.com/Mehhhhull)
- Email: mehulkumarsingh.2004@gmail.com

## 🙏 Acknowledgments

- ImageKit for media management
- MongoDB for database solutions
- React community for excellent documentation
- Express.js for robust backend framework

---

**Note**: This project is for educational purposes and demonstrates modern web development practices with the MERN stack.
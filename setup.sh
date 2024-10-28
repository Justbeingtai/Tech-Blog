#!/bin/bash
mkdir -p config controllers/api models public/css public/js seeds utils views/layouts
touch config/connection.js controllers/api/blogRoutes.js controllers/api/userRoutes.js controllers/api/commentRoutes.js controllers/homeRoutes.js models/Blog.js models/User.js models/Comment.js public/css/style.css public/js/login.js public/js/logout.js public/js/blog.js seeds/seed.js utils/auth.js utils/helpers.js views/layouts/main.handlebars views/homepage.handlebars views/dashboard.handlebars views/login.handlebars views/blog.handlebars .env .gitignore package.json server.js README.md

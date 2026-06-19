# nodejs-examples
SERVER
```bash
mkdir server
cd server/
npm init -y
npm install dotenv nodemailer
```
CLIENT
```bash
mkdir client
npm create vite@latest .
    React 
    Javascript
```

Server-side send email example :-
```bash
cd server/
node send_email/index.js
```

Client-side cricket score board :-
```bash
cd client/
npm run dev
```

Mini website
```bash
mkdir client/src/website
cd client/src/website
touch Website.jsx Header.jsx Foods.jsx Footer.jsx
```

Card component and module styling
```bash
mkdir client/src/card
cd client/src/card
touch Card.jsx Card.module.css
cd client
```

Button components (styling example)
```bash
mkdir client/src/button
cd client/src/button
touch Button1.jsx Button2.jsx Button2.module.css
```

Components with props (Properties)
```bash
mkdir client/src/props-demo
touch client/src/props-demo/Student.jsx
```

Conditional rendering
```bash
mkdir client/src/conditional
touch client/src/conditional/UserGreeting.jsx
```

Components types
```bash
mkdir client/src/component-types
touch client/src/component-types/ClassBased.jsx client/src/component-types/FunctionBased.jsx
```

Render lists
```bash
mkdir client/src/list
cd client/src/list
touch List1.jsx List2.jsx List3.jsx data.js
```

Components with props example-2
```bash
cd client/src/props-demo/
touch Parent.jsx Child.jsx Card.jsx
```

TO-DO application using socket-IO (Server side)
```bash
cd server
npm express socket.io uuid
mkdir server/todo
touch server/todo/index.js
```

TO-DO application using socket-IO (Client side)
```bash
mkdir client-todo #created in root dir
cd client-todo
touch index.html index.js socket.io.min.js #index.html open with live-server
```

TODO-MYSQL using socket.io (Server side)
```bash
cd server/
npm install express mysql2 cors socket.io #express socket.io already installed
mkdir todo-mysql
cd todo-mysql/
touch server.js db.js
mkdir routes controllers socket
touch routes/todoRoutes.js controllers/todoController.js socket/socket.js
#to run goto root folder then
cd server
node todo-mysql/server.js
```
TODO-MYSQL using socket.io (Database and Table)
```sql
CREATE DATABASE todoapp;
USE todoapp;

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
TODO-MYSQL using socket.io (Client side)
```bash
cd client
npm install axios socket.io-client
cd src
mkdir todo-mysql utils
touch todo-mysql/App.jsx utils/api.js
```
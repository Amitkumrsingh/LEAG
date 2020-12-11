# LEAG
> A social network for English learners. 

This is a small social network build on [MERN stack](https://medium.com/@blockchain_simplified/what-is-mern-stack-9c867dbad302).
it  includes dictionary, user authentication, user profiles and community  posts.

[Live Demo](http://welcometoleag.herokuapp.com)

# Quick Start 👇

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret"
}
```

### Install server dependencies


 npm install [axios](https://www.npmjs.com/package/axios)
[bcryptjs](https://www.npmjs.com/package/bcryptjs)
[client](https://www.npmjs.com/package/client)
[config](https://www.npmjs.com/package/config)
[express](https://www.npmjs.com/package/express)
[express-validator](https://www.npmjs.com/package/express-validator)
[gravatar](https://www.npmjs.com/package/gravator)
[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
[mongoose](https://www.npmjs.com/package/mongoose)
[normalize-url](https://www.npmjs.com/package/normalize-url)



### Install client dependencies

```bash
cd client
```
npm install

[moment](https://www.npmjs.com/package/moment)
[react](https://www.npmjs.com/package/react)
[react-dom](https://www.npmjs.com/package/react-dom)
  [react-moment](https://www.npmjs.com/package/react-moment)
   [react-redux](https://www.npmjs.com/package/react-redux)
    [react-router-dom](https://www.npmjs.com/package/react-router-dom)
    [react-scripts](https://www.npmjs.com/package/react-scripts)
   [redux](https://www.npmjs.com/package/redux)
   [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)
    [redux-thunk](https://www.npmjs.com/package/redux-thunk)
    [uuid](https://www.npmjs.com/package/uuid)


### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

After running a build in the client , cd into the root of the project.  
And run...

Linux/Unix 
```bash
NODE_ENV=production node server.js
```


Check in browser on [http://localhost:5000/](http://localhost:5000/)


---

## App Info

### Author

[Amit kumar](http://www.amitkumar.tech)

### Version

1.0.0

### License

This project is licensed under the MIT License

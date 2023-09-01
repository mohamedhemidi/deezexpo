
# DeezExpo
This project is an application to explore Deezer tracks and artists information
as well as their top tracks and albums

For the purpose of showcasing a full stack developement cycle using a combination of the following tech stacks :

- **Backend :** NodeJS , TypeScript, AWS Lambda Serverless
- **Frontend :** ReactJS, Redux, Semantic UI, Styled-Components , TypeScript,
- **Tools :** Visual Studio Code, Postman, Git
- **Architecture :** Serverless

## Deployment:

1. **Clone project** :
    
   
  
```
git clone git@github.com:mohamedhemidi/deezexpo.git
```

2. **Run bash script** :
   
  
The following bash script will use npm to install backend packages after that it will deploy lambda serverless functions after providing it with your --aws-profile name 

For the frontend part it will install as well the packages installing using npm the run the react project locally:

```
./deploy.sh [your_aws_profile_name]
```

## Demo

Insert gif or link to demo


## Runtime versions :

- Node.js : v18.16.0
- Serverless Framework Version : 3.34.0
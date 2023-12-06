# Rhino Splits -React/Next.js App
![Alt text for the image](/public/App_Rhino.png)


[See Figma Prototype of this App flow](https://www.figma.com/proto/BY1IvjAWacq8Oh0x9QBgGN/Rhino-SPlit?page-id=0%3A1&type=design&node-id=5-2&viewport=-696%2C1447%2C1&t=mGRUv86ySbehRxHo-1&scaling=scale-down&starting-point-node-id=5%3A2&mode=design)

![Alt text for the image](/public/app_wide.png)


## Topics
- [Get Started](#get-started)
- [Starting the Project](#starting-the-project)
- [Deploying on Netlify](#deploying-on-netlify)
___
## Getting Started
### Use Template
#### 1. To get started, click the GREEN "Use this Template" button at the top of the repo
<img width="915" alt="Screen Shot 2022-07-06 at 12 54 01 PM" src="/app_wide.png">

### Deploying on Netlify
Netlify will automatically detect your project and prepopulate the settings, but should something go wrong and it does not, here are the commands:

- Build Command: `npm run build`
- Publish directory: `.next`

#### Additional Steps to Take on Netlify
- Add Environmental Variables
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there.

- Update Firebase URL Settings
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
        
## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

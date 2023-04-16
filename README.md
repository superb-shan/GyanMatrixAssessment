# WIZARD HOUSE

## Introduction

This is a website in for the assessment for Internship named _Earn While You Learn_ by **GyanMatrix**.

Man, what a journey, eventhough, I've previously created websites, this website required all of those knowledge, which strengthened the base of my web dev knowledge.

Thank you, **Sri Eshwar College Of Engineering** and **GyanMatrix**.

## Website Details

- This website is made with React
- This uses Tailwind CSS
- It uses 2 APIs for the data
- This website concentrates on only 2 screen sizes: Horizontal & Vertical Screen

### **How to Use this project**

- Clone the repo
- Open the folder in your editor
- Run `npm install` to install all the necessary dependencies and packages
- Run `npm run start` in your terminal to start the development server
- It will automatically redirect to your default browser, if not:
- Open your browser, and go to [**https://localhost:3000**](https://localhost:3000)
- Typically this is the case, if you have already running something on this port, you might wanna see which port is free.

### **APIs Used**

- [Random User](https://randomuser.me/api/) to generate random username and password.
  \
  _One more thing, this website doesn't check for correct username and password match, you can login with anything other than empty fields._

- [Harry Potter Characters](https://hp-api.onrender.com/api/characters/) to get the details of HArry Potter characters.
  \
  _Here, 2 variants of this api is used in this application, `/staff` and `/students` to get their respective details. One thing to note here, this api doesn't contain all the details, so where there is no data (or empty string), this website shows Null_

### **Pages**

There are 4 pages:

- `\` - index page or home page
- `\display` - display 6 staff or students of Harry Potter Characters
- `\details` - shows the details of the selected person in the display page

It is suggested to go to pages in the order specified above, if you skip any page you might get unexpected behaviors.

- `*` - any other page tried to access will be shown this Not Found Page.

**_`And I suggest you to visit its 404 page`_**

**Happy Hacking :)**

(This is the end note you get when you create a react-app, **FaceBook** things 😂😂)

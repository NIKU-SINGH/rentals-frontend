
![Logo](https://rentals-frontend-orpin.vercel.app/images/homey.svg)


# Homey: 

Homey: A home rental platform
Tech stack Used: Next js, Express JS, Node JS, Mongo DB, JWT, Redux Toolkit
Homey is a platform where we make it easy for travellers and tourist to search for Hotels, Villas, Resorts nearby and make them available at a cheap price.
The app has a feature where a user can type a location, choose a range of dates in which he wants the hotel, book the rooms based on the availablity. It also has a dashboard where a user can check its listings.

It has a JWT authentication enabled where a user can sign up to the site, the session is store in the cookies, we use JWT token to create a session ID. 
There is an admin pannel where an admin can create, update, delete the users, hotels and rooms.

## Authors

- [Niku Singh](https://www.github.com/NIKU-SINGH)


## Demo

Insert gif or link to demo


<!-- ## Screenshots

|   |   |   |   |   |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |    -->



## Features

- Text Based Search, Filtering based on prices and dates
- User sign up
- Admin Pannel
- 


## API Reference
### There are 3 main API end points
- User endpoint
- Hotel endpoint
- Rooms endpoint

## 1. User 
--- 

```http
  GET /api/user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` |  | Returns all the users |


```http
  GET /api/user/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Number` | Returns individual User based on User_id |


```http
  PUT /api/user/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Number` | Updates the User with the data passed in the body |

```http
  DELETE /api/user/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Number` | Deletes the individual User based on User_id |

---
---
---
---
## 1. Hotel 
--- 

```http
  POST /api/hotels
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` |  |  | Creates a new Hotel based on the data passed in the body


```http
  PUT /api/hotels/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Number` | Updates the hotel based on the hotel_id |

```http
  DELETE /api/hotels/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Number` | Deletes the individual hotel based on User_id |


```http
  GET /api/hotels/find/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Number` | Returns an individual hotel |


```http
  GET /api/hotels/search/:search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `String` | Searches the db based on the text provided |


```http
  GET /api/hotels
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` |  | Returns all hotel details |







## Run Locally

Clone the project

```bash
  git clone https://github.com/NIKU-SINGH/rentals-frontend
```

Go to the project directory

```bash
  cd client
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```


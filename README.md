# movieBooking
This API Documentation deals with the specifications of endpoints used in the full-stack project named the 'Book that Show' App. It has SIGN UP and SIGN IN API to deal with user authentication. When new users are successfully signed up, they will receive a token which needs to be entered under the Headers section of Postman, whereas the key: auth-key and value: token, to Sign-in. After successfully signing in, the user will be re-directed to Tickets Booking page. It has 2 methods for Movie Ticket Booking: GET and POST. The GET method will fetch the Last Booking details from the database associated with the user and display them under their respective section. The POST method will allow users to book movie tickets and store data in the database. An in-depth understanding of the usage of API endpoints is mentioned below.

//////////////////////////GET/////////////////////////////////

# GET

The GET method is a HTTP method that is applied while requesting information from a particular source. It is also used to get a specific variable derived from a group.

**API to get information of available tickets at a given position**

**Request method**: `GET`

**Request URI**: `http://localhost:8080/api/booking`

**Auth required** : YES

**Data constraints**

``` json
{
    "movie": "[choose a movie name]",
    "slot": "[choose a time-slot]",
    "seats":{
       "A1":[Number of seats],
       "A2":[Number of seats],
       "A3":[Number of seats],
       "A4":[Number of seats],
       "D1":[Number of seats],
       "D2":[Number of seats]  
} 
}

```

**Data example**

``` json
{
    "movie": "Tenet",
    "slot" : "8:00 AM",
    "seats":{
       "A1":10,
       "A2":2  
} 
}

```

### Success Response

**Code** : `200 OK`

**Content example**

``` json
[
    {
        "seats": {
            "A1": 10,
            "A2": 2
        },
        "_id": "6385dab44f30f232679290b4",
        "user": "63851043d6018785f2d3ad45",
        "movie": "Tenet",
        "slot": "8:00 AM",
        "__v": 0
    }
]

```

### Error Response

**Code** : `401 Unauthorized`

**Content example**

``` json
{
    "error": "Please authenticate using a valid token"
}

```

**Code** : `500 BAD REQUEST`

**Content example**

``` json
{
"error": "Internal server error"
}

```

# SignUp

Used to provide token to newly registered users.  
**URL** : `http://localhost:8080/users/signup`  
**Method** : `POST`  
**Auth required** : NO  
**Data constraints**

``` json
{
    "username": "[valid username]",
    "email"   : "[valid email id]", 
    "password": "[password of minimum 5 and maximum 10 characters]"
}

```

**Data example**

``` json
{
     "username": "AlmaBetter",
    "email"   : "almabetter123@gmail.com", 
    "password": "ab123"
}

```

### Success Response

**Code** : `201 OK`

**Content example**

``` json
{
    "success": true,
    "token": 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbWFiZXR0ZXIxMjNAZ21haWwuY29tIiwiaWQiOiI2Mzg1ZTA5NjRmMzBmMjMyNjc5MjkwYjgiLCJpYXQiOjE2Njk3MTgxNjZ9.zCrpcwDRmVVENOL5UgY6WQdQeRILd4u3aY6n8kR1B9k"
}

```

### Error Response

**Condition** : If 'user with an email' already exists.

**Code** : `403 Forbidden`

**Content** :

``` json
{
    "success": false,
    "message": "Sorry a user with this email already exists"
}

```

**Code** :`500`

**Content** :

``` json
{
    "errors": [
        "Something went wrong"
    ]
}

```





//////////////////////////////POST////////////////////////////


# POST

POST is an HTTP method designed to send data to the server from an HTTP client. It requests the web server accept the data enclosed in the body of the POST message.

**API to book movie tickets at a given position**

**Request method**: `POST`

**Request URI**: [**http://localhost:8080/api/booking**](http://localhost:8080/api/booking)

**Auth required** : `YES`

**Data constraints**

``` json
{
    "movie": "[choose a movie name]",
    "slot": "[choose a time-slot]",
    "seats":{
       "A1":[Number of seats],
       "A2":[Number of seats],
       "A3":[Number of seats],
       "A4":[Number of seats],
       "D1":[Number of seats],
       "D2":[Number of seats]  
} 
}

```

**Data example**

``` json
{
   "movie": "Tenet",
    "slot": "8:00 AM",
    "seats": {
        "A1": 10,
        "A2": 2
    }
}

```

### Success Response

**Code** : `200 OK`

**Content example**

``` json
{
    "user": "63851043d6018785f2d3ad45",
    "movie": "Tenet",
    "slot": "8:00 AM",
    "seats": {
        "A1": 10,
        "A2": 2
    },
    "_id": "6385dab44f30f232679290b4",
    "__v": 0
}

```

### Error Response

**Code** :`401 Unauthorized`

**Condition** :**If user authorization is missing**

**Content example**

``` json
{
    "error": "Please authenticate using a valid token"
}

```

**Code** : `400 BAD REQUEST`

**Condition** : **If movie name is missing**

**Content example**

``` json
{
    "errors": [
        {
            "value": "",
            "msg": "Movie name is required",
            "param": "movie",
            "location": "body"
        }
    ]
}

```

**Condition** : **If time-slot is missing**

**Content example**

``` json
{
    "errors": [
        {
            "value": "",
            "msg": "time is required",
            "param": "slot",
            "location": "body"
        }
    ]
}

```

**Condition** : **If seat-slot is missing**

**Content example**

``` json
{
    "errors": [
        {
            "value": "",
            "msg": "seat is required",
            "param": "seats",
            "location": "body"
        }
    ]
}

```



# SignUp

Used to provide token to newly registered users.  
**URL** : [**http://localhost:8080/users/signup**](http://localhost:8080/users/signup)

**Method** : `POST`

**Auth required** : `NO`

**Data constraints**

``` json
{
    "username": "[valid username]",
    "email"   : "[valid email id]", 
    "password": "[password of minimum 5 and maximum 10 characters]"
}

```

**Data example**

``` json
{
     "username": "AlmaBetter",
    "email"   : "almabetter123@gmail.com", 
    "password": "ab123"
}

```

### Success Response

**Code** : `201 OK`

**Content example**

``` json
{
    "success": true,
    "token": 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbWFiZXR0ZXIxMjNAZ21haWwuY29tIiwiaWQiOiI2Mzg1ZTA5NjRmMzBmMjMyNjc5MjkwYjgiLCJpYXQiOjE2Njk3MTgxNjZ9.zCrpcwDRmVVENOL5UgY6WQdQeRILd4u3aY6n8kR1B9k"
}

```

### Error Response

**Condition** : **If 'user with an email' already exists.**

**Code** : `403 Forbidden`

**Content** :

``` json
{
    "success": false,
    "message": "Sorry a user with this email already exists"
}

```

**Code** :`500`

**Content** :

``` json
{
    "errors": [
        "Internal Server Error"
    ]
}

```







/////////////////////SIGN UP/////////////////////////

# SignUp

Used to provide token to newly registered users.  
**URL** : [**http://localhost:8080/users/signup**](http://localhost:8080/users/signup)

**Method** : `POST`

**Auth required** : `NO`

**Data constraints**

``` json
{
    "username": "[valid username]",
    "email"   : "[valid email id]", 
    "password": "[password of minimum 5 and maximum 10 characters]"
}

```

**Data example**

``` json
{
     "username": "AlmaBetter",
    "email"   : "almabetter123@gmail.com", 
    "password": "ab123"
}

```

### Success Response

**Code** : `201 OK`

**Content example**

``` json
{
    "success": true,
    "token": 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbWFiZXR0ZXIxMjNAZ21haWwuY29tIiwiaWQiOiI2Mzg1ZTA5NjRmMzBmMjMyNjc5MjkwYjgiLCJpYXQiOjE2Njk3MTgxNjZ9.zCrpcwDRmVVENOL5UgY6WQdQeRILd4u3aY6n8kR1B9k"
}

```

### Error Response

**Condition** : **If 'user with an email' already exists.**

**Code** : `403 Forbidden`

**Content** :

``` json
{
    "success": false,
    "message": "Sorry a user with this email already exists"
}

```

**Code** :`500`

**Content** :

``` json
{
    "errors": [
        "Internal Server Error"
    ]
}

```








////////////////////////////////SIGN In//////////////////////////



# SignIn

Get the details of the currently Authenticated User.  
.  
**URL** : [**http://localhost:8080/users/signin**](http://localhost:8080/users/signin)

**Method** : `POST`

**Auth required** : `NO`

**Data constraints**

``` json
{
    "email"   : "[valid email id]", 
    "password": "[password ]"
}

```

**Data example**

``` json
{
    "email"   : "almabetter123@gmail.com", 
    "password": "ab123"
}

```

### Success Response

**Code** : `201 OK`

**Content example**

``` json
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsbWFiZXR0ZXIxMjNAZ21haWwuY29tIiwiaWQiOiI2Mzg1ZTA5NjRmMzBmMjMyNjc5MjkwYjgiLCJpYXQiOjE2Njk3MTg1OTR9.hiyB2hwf7pULT3a23o_ZV_KTOdlbSdh4F8neBfleybk"
}

```

### Error Response

**Code** : `404 BAD REQUEST`

**Condition** : **If 'user with entered email' not found**

**Content** :

``` json
{
    "success": false,
    "message": "User not found"
}

```

**Condition** : **If 'user' enters wrong password**

**Content** :

``` json
{
    "success": false,
    "message": "Invalid Credentials"
}

```

**Code** :`500`

**Content** :

``` json
{
    "error": [
        "Internal Server Error"
    ]
}

```


























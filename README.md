Proposal

- What problem does your app solve?

AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held.

- Be as specific as possible; how does your app solve the problem?

Instructors can take attendance, request and process payments, create virtual "punch passes" for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app

- What is the mission statement?

AnywhereFitness is the all-in-one solution to meet your "on-location" fitness class needs.

# Anywhere Fitness v1.0.0

Backend Project for Lambda&#39;s Build Week API Repository, deployed Link is https://anywhere-fitness-be.herokuapp.com/

# Auth

## Logs an User In

<p>Logs an User In</p>

    POST /api/auth/login

### Parameters

| Name     | Type   | Description                 |
| -------- | ------ | --------------------------- |
| username | String | <p>Username of the User</p> |
| password | String | <p>Password of the User</p> |

### Success Response

Success-Response:

```
{
    "message": "Welcome dreamyghost!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjIsInVzZXJuYW1lIjoiZHJlYW15Z2hvc3QiLCJpYXQiOjE1NzgzNjQ2MjYsImV4cCI6MTU3ODM2ODIyNn0.-wTYw5cy87qlTSxR5qDbMdkl_1fBSjRvy_ZFtVppyt8"
}
```

### Error Response

Username-Not-Found-Response

```
{
    "message": "Invalid Credentials"
}
```

Incorrect-Password

```
{
    "message": "Invalid Credentials"
}
```

## Registers a New User

<p>Registers a New User</p>

    POST /api/auth/register

### Parameters

| Name     | Type   | Description                              |
| -------- | ------ | ---------------------------------------- |
| username | String | <p>The New Users username \*Required</p> |
| password | String | <p>The New Users password \*Required</p> |

### Success Response

Success-Response:

```
{
    "registered_user": [
        2
    ]
}
```

## Returns all classes

    GET /api/classes

## Add New Class

    POST /api/classes

### Parameters

# Documentation: `getUserDetails` API Endpoint

## Overview
The `getUserDetails` function is an API endpoint responsible for fetching user details based on a user ID provided in the request parameters. It performs validation, retrieves the user from the database, removes sensitive information, and returns the user's data.

---

## Function Signature
```javascript
export const getUserDetails = async (req, res) => { ... };
```

---

## Request
### Method
- **GET**

### Parameters
- **`userId`** *(String, Required)*: The ID of the user to be retrieved. Must be a valid MongoDB ObjectId (24 characters long).

---

## Response

### Success Response
- **HTTP Status Code**: `200 OK`
- **Structure**:
  ```json
  {
    "success": true,
    "error": false,
    "message": "User details fetched successfully",
    "data": {
      "fullName": "John Doe",
      "email": "johndoe@example.com",
      "mobileNumber": "1234567890",
      ... // Other user details excluding the password
    }
  }
  ```

### Error Responses
1. **Invalid `userId`**:
   - **HTTP Status Code**: `400 Bad Request`
   - **Structure**:
     ```json
     {
       "success": false,
       "error": true,
       "message": "Something went wrong on get user details !"
     }
     ```
   - **Reason**: The `userId` is missing or does not have the correct length (24 characters).

2. **User Not Found**:
   - **HTTP Status Code**: `400 Bad Request`
   - **Structure**:
     ```json
     {
       "success": false,
       "error": true,
       "message": "Something went wrong on get user details !"
     }
     ```
   - **Reason**: No user exists with the given `userId` in the database.

3. **Server Error**:
   - **HTTP Status Code**: `500 Internal Server Error`
   - **Structure**:
     ```json
     {
       "success": false,
       "error": true,
       "message": "Something went wrong on get user details !"
     }
     ```
   - **Reason**: An unexpected error occurred during the request.

---

## Workflow
1. **Parameter Validation**:
   - Check if `userId` is present and has a length of 24 characters (valid MongoDB ObjectId).
   - If invalid, return a `400` response with an error message.

2. **Database Query**:
   - Use `Usermodel.findById(userId)` to fetch the user from the database.
   - If no user is found, return a `400` response with an error message.

3. **Sensitive Data Removal**:
   - Convert the user object to plain JavaScript using `toObject()`.
   - Remove the `password` field to ensure it is not included in the response.

4. **Success Response**:
   - Return a `200` response containing the user data.

5. **Error Handling**:
   - Log the error and return a `500` response if an exception occurs during processing.

---

## Example Usage
### Request
**GET** `/api/v1/users/:userId`

**Headers**:
- `Content-Type: application/json`
- `Authorization: Bearer <token>`

**URL Parameters**:
- `userId`: `64b8f92e3f5e5a0012345678`

### Response Example
**Success**:
```json
{
  "success": true,
  "error": false,
  "message": "User details fetched successfully",
  "data": {
    "fullName": "John Doe",
    "email": "johndoe@example.com",
    "mobileNumber": "1234567890",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-02T00:00:00.000Z"
  }
}
```

**Error**:
```json
{
  "success": false,
  "error": true,
  "message": "Something went wrong on get user details !"
}
```

---

## Notes
- **Validation**: Ensure the `userId` is a valid MongoDB ObjectId before querying the database.
- **Security**: Always remove sensitive information (e.g., passwords) from the response.
- **Error Logging**: Log errors for debugging purposes, but do not expose sensitive error details to the client.

---

## Dependencies
- **`Usermodel`**: The Mongoose model for interacting with the `User` collection in MongoDB.

---

## Export
```javascript
export const getUserDetails = async (req, res) => { ... };

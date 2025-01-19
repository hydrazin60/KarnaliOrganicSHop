# Documentation for Application Schemas

This document provides an overview of the schemas used in the application. Each schema is designed to define the structure, relationships, and functionality of data stored in the MongoDB database.

---

## 1. User Schema

### Fields

#### Basic User Information
- **`fullName`** *(String, Required)*: The full name of the user.
- **`profileImage`** *(String, Optional)*: URL of the user's profile image.
- **`email`** *(String, Required, Unique)*: The user's email address. It must be unique to prevent duplicate accounts.
- **`password`** *(String, Required)*: The encrypted password for the user's account.
- **`mobileNumber`** *(String, Optional)*: The user's mobile number.

#### Address Information
- **`address`** *(Array of Objects)*: Stores multiple addresses for the user.
  - **`country`** *(String, Default: "Nepal")*: The country name.
  - **`province`, `district`, `city`, `municipality`, `area`, `tole`, `homeNumber`** *(String)*: Detailed location information.

#### User Activity
- **`history`** *(Array of ObjectIds, Reference: `Product`)*: Tracks the user's purchase history.
- **`totalOrder`** *(Array of ObjectIds, Reference: `Product`)*: List of products ordered by the user.
- **`orderCancle`** *(Array of ObjectIds, Reference: `Product`)*: Tracks products the user has canceled.

#### User Roles
- **`userType`** *(String, Enum: ["user", "admin", "superAdmin"], Default: "user")*: The type of user account.
- **`userRole`** *(String, Enum: ["user", "admin", "superAdmin"], Default: "user")*: Specifies the user's role in the system.

#### Timestamps
- **`createdAt`** *(Date, Auto-generated)*: The date and time when the user record was created.
- **`updatedAt`** *(Date, Auto-generated)*: The date and time when the user record was last updated.

---

## 2. Product Schema

### Fields

#### Product Details
- **`productName`** *(String, Required)*: Name of the product (max length: 100 characters).
- **`productPrice`** *(Number, Required)*: Price of the product.
- **`productImage`** *(Array of Strings, Required)*: URLs of product images (max: 5 images).
- **`productDescription`** *(String)*: Description of the product (max length: 500 characters).
- **`productType`** *(String, Enum: ["electronic", "clothing", "Beauty", "Book"], Required)*: The type of the product.
- **`productCategory`** *(String, Enum: ["mobile", "laptop", "tv", "camera", "watch", "headphone"], Required)*: Product category.
- **`productCategoryByAge`** *(String, Enum: ["kid", "woman", "man"], Required)*: Category by age.
- **`productBrand`** *(String, Required)*: Brand of the product.
- **`productQuantity`** *(Number, Default: 1)*: Quantity available in stock.

#### Product Relations
- **`productRating`** *(Array of ObjectIds, Reference: `ProductReview`)*: Ratings and reviews of the product.
- **`productCancelReason`** *(Array of ObjectIds, Reference: `OrderCancelReason`)*: Reasons for product cancellations.

#### Pricing
- **`finalPrice`** *(Number, Required)*: Final price after discounts or offers.

#### Timestamps
- **`createdAt`** *(Date, Auto-generated)*: When the product record was created.
- **`updatedAt`** *(Date, Auto-generated)*: When the product record was last updated.

---

## 3. Product Review Schema

### Fields

#### Review Details
- **`productId`** *(ObjectId, Reference: `Product`, Required)*: ID of the product being reviewed.
- **`userId`** *(ObjectId, Reference: `User`, Required)*: ID of the user submitting the review.
- **`stars`** *(Number, Enum: [1, 2, 3, 4, 5], Required)*: Rating provided by the user.
- **`comment`** *(String, Required)*: User's review comment.

#### Timestamps
- **`createdAt`** *(Date, Auto-generated)*: When the review was created.
- **`updatedAt`** *(Date, Auto-generated)*: When the review was last updated.

---

## 4. Order Cancel Reason Schema

### Fields

#### Cancellation Details
- **`productId`** *(Array of ObjectIds, Reference: `Product`, Required)*: Products associated with the cancellation.
- **`userId`** *(Array of ObjectIds, Reference: `User`, Required)*: Users associated with the cancellation.
- **`reason`** *(String, Required)*: Reason for the cancellation.
- **`eSewaNumber`** *(Number, Required)*: eSewa number for payment-related issues.
- **`cancelProcess`** *(String, Enum: ["Your Request has been Submitted", "Pending Request Process", "Request Failed", "Paid"])*: Status of the cancellation process.

#### Timestamps
- **`createdAt`** *(Date, Auto-generated)*: When the cancellation record was created.
- **`updatedAt`** *(Date, Auto-generated)*: When the cancellation record was last updated.

---

## Relationships Between Schemas

1. **User and Product**:
   - Users can interact with products through purchase history, orders, and cancellations.

2. **Product and ProductReview**:
   - Products have multiple reviews linked to them.

3. **OrderCancelReason**:
   - Tracks cancellations for products by specific users.

---

## Export Statements

Each schema is exported as a Mongoose model for use in the application:

```javascript
// User Schema
const User = mongoose.model("User", userSchema);
export default User;

// Product Schema
const Product = mongoose.model("Product", productSchema);
export default Product;

// Product Review Schema
const ProductReview = mongoose.model("ProductReview", productReviewSchema);
export default ProductReview;

// Order Cancel Reason Schema
const OrderCancelReason = mongoose.model("OrderCancelReason", orderCancelReasonSchema);
export default OrderCancelReason;
```

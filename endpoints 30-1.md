
Users
POST https://fraktbox.com/public/api/register
 "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword"

POST https://fraktbox.com/public/api/login
  "email": "john.doe@example.com",
  "password": "securepassword"

POST https://fraktbox.com/public/api/changepassword/{id}
"current_password": "currentpassword",
  "new_password": "newsecurepassword",
  "confirm_password": "newsecurepassword"

Questions
View All Questions
GET https://fraktbox.com/public/api/questions
Add Question
POST https://fraktbox.com/public/api/question/create
Delete Question
DELETE https://fraktbox.com/public/api/question/delete/{id}
Edit a Question
PUT https://fraktbox.com/public/api/question/update/{id}
"question","answer"

Roles
View All Roles
GET  https://fraktbox.com/public/api/roles
Add Role
POST  https://fraktbox.com/public/api/role/add 
Delete Role 
DELETE https://fraktbox.com/public/api/role/delete/{id}
Update Role
PUT https://fraktbox.com/public/api/role/update/{id}

Workers
Get All Workers
GET https://fraktbox.com/public/api/workers
Get Active Workers
GET  https://fraktbox.com/public/api/workers/active
Get Active Drivers
GET  https://fraktbox.com/public/api/workers/active-drivers

GET Active Warehouse
GET  https://fraktbox.com/public/api/workers/agreed-warehouse

View Employee
GET https://fraktbox.com/public/api/worker/{id}

Apply for a job "Job Application"
POST fraktbox.com/public/api/worker/add
        'name',
        'email',
        'work_days',
        'company_id',
        'role_id',
        'gender',
        'MVA',
        'identification',
        'company_name',
        'company_license',
        'phone_number',
        'phone_number2',
        'car_type',
        'car_number',
        "region_id"

Total Employee Active Time
GET https://fraktbox.com/public/api/users/{id}/active-time

Total Employee Active Time by specific date
GET https://fraktbox.com/public/api/users/{id}/active-time/{date}
Example https://fraktbox.com/public/api/users/1/active-time/2024-12-12

Total Employee Active Time between two dates
GET https://fraktbox.com/public/api/users/{id}/active-time/week/{startDate}/{endDate}

Edit Employee
PUT https://fraktbox.com/public/worker/update/{id}

Fire Worker
POST https://fraktbox.com/public/api/workers/{id}/fire

Get average rating for a worker
GET https://fraktbox.com/public/workers/{workerId}/average-rating

Rate a worker
POST https://fraktbox.com/public/workers/{workerId}/rate
  Example:
  "rating": 5,"client_identifier": "guest_12345
Change Worker Status To Agree 
POST      https://fraktbox.com/public/api/worker/accept/{id}
Delete Worker
DELETE    https://fraktbox.com/public/api/worker/delete/{id}

Get Worker Summary
GET  https://fraktbox.com/public/api/workers/{id}/summary

GET Average Prices for a worker
GET https://fraktbox.com/public/api/workers/{workerId}/get-prices 
  
Set Prices for a worker
POST  https://fraktbox.com/public/api/workers/{workerId}/set-prices

Add Region to Driver or Update Driver Region
PUT https://fraktbox.com/public/workers/{workerId}/update-region

Search Employees
GET https://fraktbox.com/public/api/workers/search
Search by Name
GET https://fraktbox.com/public/api/workers/search?name=John

Search by Email
GET https://fraktbox.com/public/api/workers/search?email=example@example.com

 Search by Company ID
GET https://fraktbox.com/public/api/workers/search?company_id=1

 Search by Status
GET https://fraktbox.com/public/api/workers/search?status=agreed

General Search
GET https://fraktbox.com/public/api/workers/search?query=John

Search Active Drivers
GET https://fraktbox.com/public/api/workers/search-agreed-drivers
Search Active Warehouse Workers
GET  https://fraktbox.com/public/api/workers/search-agreed-warehouse

Categories
View All Categories
GET  https://fraktbox.com/public/api/categories
Add Category
POST https://fraktbox.com/public/api/category/add
	'name'
Delete Category
DELETE  https://fraktbox.com/public/api/category/delete/{id}


Regions
View All Regions
GET https://fraktbox.com/public/api/regions
   "code" , "name"
Add Region
POST https://fraktbox.com/public/api/region/add
Delete Region
DELETE https://fraktbox.com/public/api/region/delete/{id}
Update Region
PUT https://fraktbox.com/public/regions/{id}


All Orders
GET https://fraktbox.com/public/api/packages
"name","email","code","phone_number","worker_id","address","elements","damage","password","photo","method","status"

Companies
All Companies Categroies
GET https://fraktbox.com/public/api/company_category
"company_id","category_id","desc"

Add Company Category
POST  https://fraktbox.com/public/api/company_category/add

All Companies
GET https://fraktbox.com/public/api/companies
 "name","address","phone","email","license","photo","contract","weight","price"

Add Company
POST https://fraktbox.com/public/api/company/add
Edit Company
PUT  https://fraktbox.com/public/api/company/update/{id}


Postal Codes
All Postal Codes
GET https://fraktbox.com/public/api/postalcodes
  "code" , "area"
Add Postal Code
POST https://fraktbox.com/public/api/postalcode/add
Delete Postal Code
DELETE https://fraktbox.com/public/api/postalcode/delete/{id}
Search Postal Codes by postal code or area
GET https://fraktbox.com/public/api/postal-codes/search?code=12345
GET https://fraktbox.com/public/api/postal-codes/search?area=Cairo


Packages
View All Packages
GET https://fraktbox.com/public/api/packages
Add a Package
POST  https://fraktbox.com/public/api/package/add
Delete Package
DELETE https://fraktbox.com/public/api/package/delete/{id}
Update Package
PUT  https://fraktbox.com/public/api/package/update/{id}
Get Package Details
GET  https://fraktbox.com/public/api/package/{id}
Get Arrived Packages on a specific date
GET  https://fraktbox.com/public/api/packages/arrived/{date} 
Count All Packages
GET  https://fraktbox.com/public/api/packages/count
Get Delivered Packages
GET  https://fraktbox.com/public/api/packages/delivered
Get Not Delivered Packages
GET https://fraktbox.com/public/api/packages/not-delivered
Get Pending Packages
GET  https://fraktbox.com/public/api/packages/pending  
Count Pending Packages
GET  https://fraktbox.com/public/api/packages/pending/count
Search Packages
GET  https://fraktbox.com/public/api/packages/search  
Search Packages By Dates
GET  https://fraktbox.com/public/api/packages/search/{date}
Get a Package Status by ID
POST  https://fraktbox.com/public/api/packages/status/{id}
Packages with a specific worker
GET  https://fraktbox.com/public/api/packages/worker/{id}

Change Package from Pending to Arrived when scan code
PUT https://fraktbox.com/public/api/packages/{id}/status

Change Package to Damaged 
PUT https://fraktbox.com/public/api/packages/{id}/damaged


Tracking
Driver Info
GET https://fraktbox.com/public/api/worker/{id}
Driver Orders
https://fraktbox.com/public/api/packages/worker/{id}
Driver Order Details
GET https://fraktbox.com/public/api/package/{id}


Home
Employees Count
GET https://fraktbox.com/public/api/workers/count
Orders Count
GET https://fraktbox.com/public/api/packages/count
Tracking Orders Count
GET https://fraktbox.com/public/api/packages/pending/count
Postal Codes
GET https://fraktbox.com/public/api/postalcodes/count
4 Counts in one request
GET  https://fraktbox.com/public/api/dashboard/counts

Chat
Chat Window Messages with an Employee (user)
GET https://fraktbox.com/public/api/chat/{userId}
Send Message to that user
POST https://fraktbox.com/public/api/chat/{userId}

GET Company Data
45- GET https://fraktbox.com/public/company/{id}


<!-- 16-1-2025 -->


<!-- Start and End Journey -->
<!-- Total Prices -->
GET  https://fraktbox.com/public/api/journeys/total-prices
<!--Get total Kilometers & mins. -->
GET https://fraktbox.com/public/api/journeys/{journeyId}/calculate-metrics
<!-- POST tracking Point latitude & longtute every period of time -->
POST https://fraktbox.com/public/api/journeys/{journeyId}/tracking-points
<!-- Start Journey -->
POST https://fraktbox.com/public/api/workers/{id}/start-journey
<!-- End Journey -->
48- POST https://fraktbox.com/public/api/workers/{id}/end-journey
<!-- Update Kilometers -->
49- POST https://fraktbox.com/public/api/workers/{id}/update-journey-kilometers

<!-- Calculate Total Kilometers for a worker -->
50- GET https://fraktbox.com/public/api/workers/{id}/total-kilometers

<!-- 18-1-2025 -->
<!-- Orders All in One Endpoint -->
51- GET https://fraktbox.com/public/api/dashboard-data


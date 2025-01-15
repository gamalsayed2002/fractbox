
Users
1- POST fraktbox.com/public/api/register
 "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword"

2- POST fraktbox.com/public/api/login
  "email": "john.doe@example.com",
  "password": "securepassword"

3- POST fraktbox.com/public/api/changepassword/{id}
"current_password": "currentpassword",
  "new_password": "newsecurepassword",
  "confirm_password": "newsecurepassword"

Questions
4- GET fraktbox.com/public/api/questions
5- POST fraktbox.com/public/api/question/create
6- DELETE fraktbox.com/public/api/question/delete/{id}
7- PUT fraktbox.com/public/api/question/update/{id}
"question","answer"

Workers - Apply for a job "Job Application"
8- POST fraktbox.com/public/api/worker/add
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

Add Category
9- POST fraktbox.com/public/api/category/add
	'name'
View All Categories
10- GET fraktbox.com/public/api/categories


View All Employees
11- GET fraktbox.com/public/api/workers

View Employee
12- GET fraktbox.com/public/api/worker/{id}

View All Regions
13- GET fraktbox.com/public/api/regions
   "code" , "name"
Add Region
14- POST fraktbox.com/public/api/region/add
Delete Region
15- DELETE fraktbox.com/public/api/region/delete/{id}


All Orders
16- GET fraktbox.com/public/api/packages
"name","email","code","phone_number","worker_id","address","elements","damage","password","photo","method","status"
Delivered Order
17- GET fraktbox.com/public/api/packages/arrived/{date}
Package Details
18- GET fraktbox.com/public/api/package/{id}
Edit Package/Order
19- PUT fraktbox.com/public/api/package/update/{id}

Companies
All Companies Categroies
20- GET fraktbox.com/public/api/company_category
"company_id","category_id","desc"
All Companies
21- GET fraktbox.com/public/api/companies
 "name","address","phone","email","license","photo","contract","weight","price"
Add Company
22- POST fraktbox.com/public/api/company/add
Edit Company
23- PUT  fraktbox.com/public/api/company/update/{id}



Postal Codes
All Postal Codes
24- GET fraktbox.com/public/api/postalcodes
  "code" , "area"
Add Postal Code
25- POST fraktbox.com/public/api/postalcode/add
Delete Postal Code
26- DELETE fraktbox.com/public/api/postalcode/delete/{id}

Tracking
Driver Info
27- GET fraktbox.com/public/api/worker/{id}
Driver Orders
28- GET fraktbox.com/public/api/packages/worker/{id}
Driver Order Details
29-  GET fraktbox.com/public/api/package/{id}

Missing Tracking
Missing Home

Home
Employees Count
30- GET https://fraktbox.com/public/api/workers/count
Orders Count
31- GET https://fraktbox.com/public/api/packages/count
Tracking Orders Count
32- GET https://fraktbox.com/public/api/packages/pending/count
Postal Codes
33- GET https://fraktbox.com/public/api/postalcodes/count

Chat
Chat Window Messages with an Employee (user)
34- GET https://fraktbox.com/public/api/chat/{userId}
Send Message to that user
35- POST https://fraktbox.com/public/api/chat/{userId}

Fire Worker
36- POST https://fraktbox.com/public/api/workers/{id}/fire


Total Employee Active Time
37- GET https://fraktbox.com/public/api/users/{id}/active-time

Total Employee Active Time by specific date
38- GET https://fraktbox.com/public/api/users/{id}/active-time/{date}
Example https://fraktbox.com/public/api/users/1/active-time/2024-12-12

Total Employee Active Time between two dates
39- GET https://fraktbox.com/public/api/users/{id}/active-time/week/{startDate}/{endDate}

Edit Employee
40- https://fraktbox.com/public/worker/update/{id}

Get average rating for a worker
41- GET https://fraktbox.com/public/workers/{workerId}/average-rating

Rate a worker
42-POST https://fraktbox.com/public/workers/{workerId}/rate
  Example:
  "rating": 5,"client_identifier": "guest_12345"

Update Region
43-PUT https://fraktbox.com/public/regions/{id}

Add Region to Driver or Update Driver Region
44-PUT https://fraktbox.com/public/workers/{workerId}/update-region

GET Company Data
45- GET https://fraktbox.com/public/company/{id}
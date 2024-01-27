NodeJS/Mongo Test Task

Using MongoDB, Node.js, Express, Bluebird, Lodash, and Snoowrap create a new API server which accumulates data over time and provides access to historical data from reddit.com front page. 
Note that it is sufficient to store data at hourly intervals. 
You should build your own node application that retrieves the reddit fresh data at least once per hour, stores it and implements the API described below.
Your API implementation should be public without any authentication mechanism. Your calls to reddit should also be anonymous without any oauth usage.
For API calls implementation please use the full methods of requests, GET, POST, PUT/PATCH, DELETE.


1. Retrieve all users  ********
GET /api/users
params: limit [int], offset[int]. filter [ object: { user_attribute_name: attribute_value } ]

2. Retrieve all posts.
GET /api/posts
params: limit [int], offset[int]. filter [ object: { post_attribute_name: attribute_value } ]

3. Get all reddits.  ********
GET /api/reddits 
params: limit [int], offset[int]. filter [string: value ]

4. Retrieve latest posts from a certain reddit. ****
GET /api/posts/:reddit
params: limit [int], offset[int]. filter [ object: { post_attribute_name: attribute_value } ]

5. Get the specific post record
GET /api/post/:id


6. Delete the specific post record
DELETE /api/post/:id

7. Search posts
GET /api/search
params: limit [int], offset[int]. filter [ object: { post_attribute_name: attribute_value } ]


Technical details:
- return json formatted payload
- design the mongo collection having in mind query performance
- store all data retrieved from reddit api in appropriate collection structure
- use git to commit your work
- commit as often as possible and push at least once a day
- function body should not exceed 30 LOC
- class should not exceed 200 LOC
- stick to DRY principles
- base your implementation on design patterns

Advanced requirements:
- implement authentication support using jwt
- implement authenticated request to reddit using oauth and user token
- unit test coverage
- Trying to use cron job for retrieving data instead of setInterval 

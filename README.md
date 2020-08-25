# cs465fullstack
CS 465 full stack development course

Architecture

-(Question):Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
-(Answer): I found Express HTML very easy to understand because of how simple its framework was, as well as its fairly normal use of Javascript. It definitely had the most easy to grasp data flow to me. Using Angular with the SPA however was fairly complex at times and I found myself stuck in different callback errors as well as being unfamiliar with typescript. That being said I did really enjoy how easy it was to test the SPA using the browser and could see myself using it more once I'm more comfortable with it.

-(Question):Why did the backend use a NoSQL MongoDB database?
-(Answer): MongoDB is able to speak javascript natively and doesnt have to rely on schema's like the express website did.


Functionality

-(Question):How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
-(Answer): JSON is derived from Javascript's object literal syntax, with syntax being a main difference between the two. JSON has been used in our project whenever a request is being passed to MongoDB. Since MongoDB speaks javascript natively it is able to take javascript request files and return them as a JSON object to be passed back to the client side and be used to popluate a view.


Testing
-(Question):Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
-(Answer): In module 7 we had to add an authorization that would now check if a user is logged in to an admin account before they were able to either add or edit trips, those using GET and PUT endpoints respectively. Endpoints are able to make significant changes to any sight that allow them access, thats why we needed to be wise with our security in deciding who can use those methods.


Reflection

-(Question): How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
-(Answer): Having this completed full stack website repository already does a good thing for helping fill out my portfolio, which will definitely help in job searches to come. Beyond that I think one of the more useful skills I gained out of this is a more advanced understanding of data flow on a website and more efficient ways to take advantage of it. I also think my knowledge of Node libraries has increased incredibley, as well has my general knowledge of Javascript and now Typescript, both of which will definitely come in handy on future projects.I hope that with further review I can more fully understand all concepts exercised in the course so that I may better replicate them in the future.

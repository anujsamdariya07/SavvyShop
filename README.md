# SavvyShop

Your one stop solution for purchasing all of your daily requirements.


## Technical Documentation

1. Make a seperate folder for frontend and install react app using the following command on terminal: npm create vite@latest

2. Now run npm install

3. Now, install router dom

4. Run react project using: npm run dev

5. Make 3 folders - components, context, and pages

6. Now, inside components folder create folder assets and put all the assets in it. 

7. Inside components folder make a folder Navbar which has Navbar.jsx and navbar.css. Also create an index.js file.

8. Make Navbar

9. Make 5 new files in pages: LoginSignUp.jsx, ShopCategory.jsx, Cart.jsx, Product.jsx and Shop.jsx

10. In App.jsx, set up routes.

11. Make another component Home.

12. Mount Home component in Shop.jsx

13. Make a component Item with Item.jsx and item.css

14. Make a component Popular with Popular.jsx and popular.css

15. Here, import the data_product from assets and use its values in Item component in Popular.jsx

16. Mount Popular in Shop

17. Make another component Offers. Mount it in Shop. 

18. Make another component NewCollections. Mount Item component in it. Mount NewCollections in Shop. 

19. Make another component NewsLetter. Mount it in Shop. 

20. Make another component Footer. Mount it in Shop. 

21. Make a context named ShopContext

22. Use shopCOntext in Shopcategory page

23. Mount item in SHopcategory page

24. Now make the LoginSignUp page

25. Now make the Product page

26. Make a component BreadCrum. Mount it in product page.

27. Make a component ProductDisplay. Mount it in product page.

28. Make a component DescriptionBox.

29. Make a component RelatedProducts.Mount it in product page.

30. Now go to ShopContext for storing cart products id, quantity etc. Use this in ProductDisplay

31. Make a component CartItem. Mount it in Cart page.

32. Make contex for total items and total price and add it to CartItem component and Navbar Component 

33. Make the site responsive.

34. Start from Navbar. Use useRef

35. Then Item

36. Then Popular

37. Then Offers

38. Then NewCollections

39. Then Newsletter

40. Then Footer

41. Backend start

42. Make a seperate folder for it.

43. Run command: npm init

43. Run command: npm install express

44. Run command: npm install jsonwebtoken

45. Run command: npm install mongoose

46. Run command: npm install multer

47. Run command: npm install cors

48. Make a file index.js and import all the packages

49. connect with mongodb

50. Use following middlewares: app.use(express.json());, app.use(cors());

51. Make a basic get request and listen at any port

52. Make a folder upload and then images inside it and then use multer to store images in it.

53. Make a schema for storing data  in MongoDB

54. Test it. Similarly for deleting product

55. Now move to Admin folder

56. Make react app there
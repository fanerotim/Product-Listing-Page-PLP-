# CHAPTER

### Project Summary

This is a fully responsive small Project Listing Page demo, similar to what we can see on eCommerce webstites.


## Technical Stack
- Frontend: React (v19.2)
- Modular SCSS
- Database: sample static data; array with objects

## Architecture

- Frontend
  - components
    - Footer
    - Header
      - Logo
      - Navigation
    - ProductPage
        - components
            - hooks
            - Filter
            - LoadMoreButton
            - ProductCounter
            - ProductItem
                - components
                - hooks
            - Sort
                - hooks
                - utils
        
  Each main / parent component (e.g. Header and ProductPage) nests smaller / inner components that it renders inside itself.
  Functionalities specific for each smaller component are extracted into custom hooks in a inner /hooks directory inside the component folder itself. 
  

## Key features

- **Filter**: *users can apply one or multiple filters*
- **Sort**: *users can sort their items in four ways: Alphabetical: (A-Z) / (Z-A), Price: Low-High / High-Low*
- **Pagination**: *Initially 5 products are displayed and users can load more items, if available* 
- **Load More Button**: *It is connected to the Pagination functionality. If there are no more products, button gets disabled*
- **Add To Cart Button**: *It is purely a UX feature. It displays a modal (Product Added To Cart), which disappers automatically after 3 seconds*
- **Custom Select Menu**: *The Sort feature is implemented with a custom dropdown menu e.g. custom select*  

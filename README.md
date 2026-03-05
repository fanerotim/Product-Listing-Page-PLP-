# CHAPTER

### Project Summary

This is a fully responsive *Project Listing Page* demo, similar to what we can see on eCommerce webstites.

App URL: https://fanerotim-chapter.netlify.app/

To start the app locally run the following command inside 'Product Listing Page (PLP)' directory:

npm run dev

## Technical Stack
- Frontend: React (v19.2)
- Custom Modular SCSS styles
- Database: sample / static data

Data objects are in this shape:

<img width="1724" height="1088" alt="image" src="https://github.com/user-attachments/assets/2ed8c076-b5be-4766-9338-02abc3502a15" />



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

## Images

<img width="1181" height="1028" alt="image" src="https://github.com/user-attachments/assets/5198583e-fd35-434a-a2b3-137ecf43c9f4" />

<img width="1181" height="1029" alt="image" src="https://github.com/user-attachments/assets/5aacb2e8-cade-4f86-9b5a-e8d56a91d2af" />

<img width="621" height="871" alt="image" src="https://github.com/user-attachments/assets/95d2072b-c31a-4e9e-bb3e-749b725c0db2" />

<img width="621" height="1027" alt="image" src="https://github.com/user-attachments/assets/ca200222-2281-4fe8-8ebc-cebe1e73d331" />



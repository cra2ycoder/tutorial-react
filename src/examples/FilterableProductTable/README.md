# example with filter table

- Implemented as per the concept given in Facebook tutorial page
  **FYR**: https://reactjs.org/docs/thinking-in-react.html

**UI**
![](https://reactjs.org/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png)

**Component Splitup**
![](https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png)

**Component Names**

- FilterableProductTable (orange): contains the entirety of the example
- SearchBar (blue): receives all user input
- ProductTable (green): displays and filters the data collection based on user input
- ProductCategoryRow (turquoise): displays a heading for each category
- ProductRow (red): displays a row for each product

**Hierarchy planned**

- FilterableProductTable

  - SearchBar
  - ProductTable
    - ProductCategoryRow
    - ProductRow

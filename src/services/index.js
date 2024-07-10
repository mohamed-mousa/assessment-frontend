import api from "./api";

/* 
list of groups
- products
- categories
*/

//------------------------ products ------------------------//

export function getProducts() {
  return api.get("/products");
}

//------------------------ products ------------------------//

//------------------------ categories ------------------------//

export function getCategories() {
  return api.get("/categories");
}

//------------------------ categories ------------------------//

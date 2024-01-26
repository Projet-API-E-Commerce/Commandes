**GET /orders**
----
Returns all orders in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:**
* **Code:** 200  
  **Content:**

**GET /orders/:id**
----
Returns the specified order.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
* **Success Response:**
* **Code:** 200  
  **Content:**  `{ <order_object> }`
* **Error Response:**
    * **Code:** 404  
      **Content:** `{ error : "Order doesn't exist" }`  
      OR
    * **Code:** 401  
      **Content:** `{ error : "You are unauthorized to make this request." }`

**GET /orders/product/:id**
----
Returns orders with specified product.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
* **Success Response:**
* **Code:** 200  
  **Content:**  `{ <order_object> }`
* **Error Response:**
    * **Code:** 404  
      **Content:** `{ error : "Product doesn't exist" }`  
      OR
    * **Code:** 401  
      **Content:** `{ error : "You are unauthorized to make this request." }`

**GET /orders/user/:id**
----
Returns orders with specified user.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
* **Success Response:**
* **Code:** 200  
  **Content:**  `{ <order_object> }`
* **Error Response:**
    * **Code:** 404  
      **Content:** `{ error : "User doesn't exist" }`  
      OR
    * **Code:** 401  
      **Content:** `{ error : "You are unauthorized to make this request." }`

**POST /orders**
----
Creates a new order and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Data Params**
* **Success Response:**
* **Code:** 201  
  **Content:**  `{ <order_object> }`

**PATCH /orders/:id**
----
Updates fields on the specified order and returns the updated object.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
* **Success Response:**
* **Code:** 200  
  **Content:**  `{ <order_object> }`
* **Error Response:**
    * **Code:** 404  
      **Content:** `{ error : "Order doesn't exist" }`  
      OR
    * **Code:** 401  
      **Content:** `{ error : "You are unauthorized to make this request." }`

**DELETE /orders/:id**
----
Deletes the specified order.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
* **Success Response:**
    * **Code:** 204
* **Error Response:**
    * **Code:** 404  
      **Content:** `{ error : "Order doesn't exist" }`  
      OR
    * **Code:** 401  
      **Content:** `{ error : "You are unauthorized to make this request." }`




**PATCH /orders/pay/:id**
----
Effectue le paiement de la commande spécifiée et retourne le montant total.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
* **Success Response:**
    * **Code:** 200  
      **Content:** `{ message: "Paiement effectué", totalAmount: <montant_total> }`
* **Error Response:**
    * **Code:** 404  
      **Content:** `{ error : "Commande non trouvée." }`  
      OR
    * **Code:** 400  
      **Content:** `{ error : "Identifiant de commande invalide" }`  
      OR
    * **Code:** 500  
      **Content:** `{ error : "Erreur interne du serveur" }`

**PATCH /orders/validate**
----
Valide la commande et met à jour le stock des produits.
* **URL Params**  
  None
* **Data Params**
    * **Required:** `{ <order_object> }` (Objet de commande contenant les identifiants des produits)
* **Headers**  
  Content-Type: application/json  
  Authorization: Bearer `<OAuth Token>`
* **Success Response:**
    * **Code:** 200  
      **Content:** `{ message: "Commande validée et stock des produits mis à jour" }`
* **Error Response:**
    * **Code:** 500  
      **Content:** `{ error : "Erreur lors de la validation de la commande: <message_erreur>" }`

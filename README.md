# hackaton-demium-back

**URL**
   `localhost:3000/`

Se utiliza Nodejs debido a su alta compatibilidad con librerias como mongose para el manejo de mongo. Es posible utilizarlo en una amplia gama de servidores entre los que estan Microsoft Windows o Unix y permitirá crear aplicaciones altamente escalables e innovadoras.

Utilizaremos un modelo para los billetes ya que necesitaremos generarlos a partir de datos introducidos por el cliente en tiempo real.

Para rellenar con datos de prueba a partir del modelo de billetes utilizamos Postman, que permite hacer pruebas de las crud basicas y comprobar el correcto funcionamiento de las funciones del controlador.

Estamos utilzando dos archivos json como base de datos principal.

viajes.json contine como claves las ciudades de origen. Dentro de cada ciudad tenemos las ciudades de destino disponibles con el precio de viaje asociado para una persona. En caso de buscar viajes para varias personas multiplicamos el precio en la base de datos por el numero de personas.

hoteles.json contine como clave las ciudades de destino. Dentro de cada ciudad tenemos las opcioens de hoteles disponibles con el precio de una habitacion disponible por persona. En caso de buscar habitaciones para varias personas multiplicamos el precio en la base de datos por el numero de personas.

Para el manejo en tiempo real de las redes sociales asociadas a la pagina web hemos creado un modelo de red social con sus CRUD basica y unas rutas para poder llamar a las funciones. Todas las redes sociales que se generan se guardan en la base de datos de mongodb.

**Social Net Routes**
---

**Show specific social network**
    
* **URL**

   `socialNet/find/:name`

* **Method:**

   `GET`
  
* **URL Params**    

  **Required:**

    `name=[String]`

**Show all social network**
    
* **URL**

   `socialNet/all`

* **Method:**

   `GET`

**Save new social network**
    link param stores URL of the acount you want to reference

* **URL**

   `socialNet/save`

* **Method:**

   `POST`

* **Data Params**

  **Required**

    `name=[String]`
    `link=[String]`

**Update Social Net**
    Finds social net by name and updates the associated link

* **URL**

  `socialNet/update/:name`

* **Method:**
  
  `UPDATE`
  
*  **URL Params**

   **Required:**
 
   `name=[String]`

*  **Data Params**

   **Requiered**

   `link=[String]`

**Delete Social Net**
    Finds social net by name and deletes it from database

* **URL**

  `socialNet/delete/:name`

* **Method:**
  
  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `name=[String]`

**Hotel Routes**
---

**Gives the price for a specific number of people during a centrain amount of time**
    
* **URL**

   `/getPrice/:city/:people/:nights`

* **Method:**

   `GET`
  
* **URL Params**    

  **Required:**

    `city=[String]`
    `people=[Number]`
    `nights=[Number]`

**Ticket Routes**
---

**Generates a ticket for a trip**
    
* **URL**

   `/save`

* **Method:**

   `POST`
  
*  **Data Params**

   **Requiered**

   `name=[String]`
   `surname=[String]`
   `adults=[Number]`
   `children=[Number]`
   `price=[Number]`
   `from=[String]`
   `to=[String]`
   `city=[String]`
   `isTrain=[boolean]`

**Generates a ticket for a trip**
    
* **URL**

   `/all`

* **Method:**

   `GET`

**Generates a ticket for a trip**
    
* **URL**

   `/:ticketId`

* **Method:**

   `GET`
  
*  **Data Params**

   **Requiered**

   `ticketId=[String]`

**Train Routes**
---

**Gives the price for a specific number of people about a trip**
    
* **URL**

   `/getPrice/:from/:to/:people`

* **Method:**

   `GET`
  
* **URL Params**    

  **Required:**

    `from=[String]`
    `to=[String]`
    `people=[Number]`


**Docker compose**
---
requirements:
- docker
- docker-compose

Download the repository and, in the project folder, type
```
sudo docker-compose up
```
or
```
sudo docker-compose up -d
```
to execute in background.
To stop the service in background type
```
sudo docker-compose down
```

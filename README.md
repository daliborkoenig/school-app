
### School app
* create app to add, remove, read and edit Students and Classes in a School

   * the school model:
  ```js
     School=[ classObject1,classObject2,....]
  ```

   * the class model: 
   ```js
    {
        name: "FbW3",
        students: [studentObject1, studentObject1,...],
    }
    ```

    * the Student model: 
  
    ```js
    {
            name: "Pilar",
            email: "pilar@yahoo.com",
            city: "Berlin",
    }
    ```

school data model:
```js
 [
  {
    name: "FbW1",
    students: [
      {
        name: "Alex",
        email: "alex@yahoo.com",
        city: "Berlin",
      },
      {
        name: "Max",
        email: "max@yahoo.com",
        city: "Hamburg",
      },
    ],
  },

  {
    name: "FbW2",
    students: [
      {
        name: "Jon",
        email: "jon@yahoo.com",
        city: "Berlin",
      },
      {
        name: "Pilar",
        email: "pilar@yahoo.com",
        city: "Berlin",
      },
    ],
  },
  {
    name: "FbW3",
    students: [],
  },
]
```



ction should add new element to School array
### Tasks
## App Functions

* Functions arguments ==>  Passing one single  object as argument holds all the arguments.

* createClass function which takes argument(object) holds class name
```js 
createClass({name: "FbW1"} ) 
//the function should add new element to School array
// the element looks like : 
{ name:  "FbW1", students:  []  }
```


* create student function which takes argument(object) holds class ID and the student data
```js
// EX : createStudent({ classID: 2, name: 'Pilar', email: 'pilar@yahoo.com', city: 'Berlin' })
the student would be added to the secound class (with index 1) like this : 
  {
        name: "Pilar",
        email: "pilar@yahoo.com",
        city: "Berlin",
  }
 ```

 * create removeClass function which takes ID and remove class by ID
  ```js
  removeClass({ classID: 2 });
  
  ```


 * create removeStudent function which takes argument(object) holds class ID and the student ID
  ```js
 
  removeStudent({ classID: 1, studentID: 2 });
  ```
* create editStudent function which takes argument(object) with holds class ID and the student ID

```js
editStudent ==> info name, email and city.
// example 
editStudent({

classID: 3,

studentID: 1,

email: "alex@test.de",

city: "Hamburg",

name: "Alex",

});
```


* create function call RenderSchoolTemplate
* This function Format and render school data

## Final Template 
```js
 School Classes: 
------------------ 
 FbW1 - (class ID: 1): 
  1- Alex, alex@yahoo.com, Berlin - (student ID: 1).
  2- Max, max@yahoo.com, Hamburg - (student ID: 2).
******************************************** 
 FbW2 - (class ID: 2): 
  1- Jon, jon@yahoo.com, Berlin - (student ID: 1).
  2- Pilar, pilar@yahoo.com, Berlin - (student ID: 2).
******************************************** 
 FbW3 - (class ID: 3): 
   The class is empty 
******************************************** 
  Total Classes 3, total students 4
```

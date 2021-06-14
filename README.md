# Maxillo

[![Netlify Status](https://api.netlify.com/api/v1/badges/c0a9bf07-e7b3-407c-81b0-4245f7ecd4bd/deploy-status)](https://app.netlify.com/sites/maxillo/deploys)

**Code-Named Emedico**
In Progress

Visit us back again and hopefully we've finished the project by then xD
Or else look at our other works. Oh wait there ain't any lol

## Api blueprint

### Adding a new patient

route: '/create'
GET '/:dpid' => adds a new patient under the doctor's document.
body must contain patient name.
returns pat_name and mongoID( to be used when further data to medical data collections).
{  
 POST '/create/section1' => adds data of section1 to corresponding collection
body must contain the form data and the mongoID passed before.

    same to be repeated for all other sections...

}

---

### Retrieving patient info

route: '/read'
GET '/:dpid' => returns corresponding mongoID from doctor's document.
{
GET '/section1/:mongoID' => returns the document from collection of section1.

    same to be repeated for all other sections...

}

GET '/readall' => returns the list of patients and their dpid under the doctors A/c

---

### Updating patient info

to update the data in a section, the data is from obtained using '/read/:mongoID'
and the whole section is overwritten.

route : '/update'
{
PATCH '/section1/:mongoID' => overwrites the entire document

    same to be repeated for all other sections...

}

---

### Deleting patient info

route: '/delete'
{
DELETE '/section1/:mongoID' => overwrites the entire document

    same to be repeated for all other sections...

}

---


1.add service
http://localhost:5000/api/addservice
METHOD:  POST
BODY: JSON
    {
  "name": "General Checksddsdup",
  "description": "A comprehensive health checkup including basic tests and consultations.",
  "price": 500
}

2.get all service
http://localhost:5000/api/getservice
METHOD:  GET

2.get a service by id
http://localhost:5000/api/getservice/:id
METHOD:  GET


3.update service with id
http://localhost:5000/api/updateservice/:id
METHOD:  PUT
BODY: JSON
    {
  "name": "General Checkaddpdated",
  "description": "A comprehensive health checkup including basic tests and consultations.",
  "price": 200
}

4.delete service with id
http://localhost:5000/api/deleteservice/:id
METHOD:  DELETE
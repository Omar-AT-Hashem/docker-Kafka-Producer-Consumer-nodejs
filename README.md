# docker-Kafka-Producer-Consumer-nodejs

##### This is a simple dockerized application that uses kafka in order

##### to achieve communication between two entities in this case a marketer

##### and a customer. The marketer entity sends an offer which the customer

##### entity can consume and persist into a database.

#### The marketer is also able to send a request to delete an offer, this is all

#### interfaced by 2 simple apis, one for the marketer and one for the consumer

## config

#### build the images for both the marketer and the customer

#### you can run "docker build . -t \<yourPreferedImageName\>"

#### in each of the directories of the marketer and customer

#### the run "docker compose up --build"

#### if the consumer container doesnt launch, give it 20 - 30 seconds to make

#### sure the db container is fully running the restart the customer container

#### or run it again

#### The .env files were published for ease of configuration as security is not

#### a concern

## usage

### Marketer

#### [POST] localhost:8080/marketer/createOffer

#### request body = {"name":"productName", "amount":"amount", "price":"price"}

#### [DELETE] localhost:8080/marketer/deleteOffer/:id

### Customer

#### [GET] localhost:5002/customer/getAll

#### [GET] localhost:5002/customer/get/:id

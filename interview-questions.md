# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

# Your answer:
In the Ruby programming language, I have used the 'super' keyword in an initializer method of a sub-class to call the "super constructor" when needing to send arguments to the initializer method of the derived-base classs while instantiating an instance of a sub-class. It is possible initializer and constructor may be synonymous, though perform slightly different functions in different programming languages.

# Researched answer:
Calling super within a method will search for and call a method of the same name within the parent class of the scope of the method. Super can have arguments or not. It is not limited to the initializer method, but can definitely be called within the initializer method of a sub-class to not have to re-write code from the initializer method of the parent class (superclass).

2. What is a gem?

# Your answer:
A gem in the Ruby programming language I believe is the Ruby version of an API. It is an extension of the programming language which allows for added functionality. It can either be imported from a local library of Ruby gems or downloaded through the world wide web. Ruby on rails is an example. I believe RSpec, the testing suite, is another.

# Researched answer:
A gem is a self-contained Ruby program or library. One can either write a program themselves or import/imstall a gem to augment software. 

3. What is a relational database? Are there other kinds of databases?

# Your answer:
If there are relational databases, it must not be a stretch that there exist non-relational databases. Relational means that the entries are related to each other, usually through parameters which can be called upon to create sorting algorithms, such as when using PGAdmin 4 to interact with a Structured Query Library (SQL) using the language postgresql (postgres). The parameters in question can be row and column headers.

# Researched answer:
There are relational databases, and there are many other kinds of databases. Because relational databases are debatably the most common, all other types are referred to as non-relational databases. The 'relations' are dictated by the unique column and row identifiers.

4. What are primary keys? Why are they important?

# Your answer:
Primary keys are unique identifiers in a certain subset of databases (maybe all). In the worse case scenario where every value in two separate database entries are identical, the key is the only thing that would set them apart. 

# Researched answer:
The primary key would be a 'column' of values in and of itself.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

# Your answer:
I do not know what the HTTP verbs are, but mine are he/him. CRUD stands for create, read, update, and destroy, which is the basic form of data manipulation one would want to do, and are able to do with a database.

# Researched answer:
The HTTP verbs are: (from Mozilla)

POST, corresponds with create, submits data to server.

GET, corresponds with read, retrieves data.

PUT, corresponds with update, replaces a target data entry.

HEAD, same as get without the body.

PATCH, corresponds with update.

DELETE, corresponds with destroy. 

CONNECT, establishes a connection, probably a precursos to all the CRUD.

Trace, options are another 2 that do not corrrespond directly yo CRUD.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:
RESTful stands for REpresentational State Transfer, which appears to be some sort of mapping through the internet using HTTP.

2. Ruby on Rails:
Ruby on Rails is the gem for the Ruby programming language that allows developers to build wb applications. 

3. Database migrations:
Database migrations occur when information is being added, removed, or otherwise changed to a database. All the rest of the information must be sorted to account for this change. This involves physical movement of memory for optimization.

4. Params:
Params appears to be a reference to a Ruby on Rails parameters object, which allows for website operability.

5. ERB:
ERB stands for 'Embedded Ruby'. It is a file that has code written in the Ruby programming language embedded therein. 
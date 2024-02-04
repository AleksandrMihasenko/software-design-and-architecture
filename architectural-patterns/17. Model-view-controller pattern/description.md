# Model-view-controller Pattern

The Model-View-Controller (MVC) pattern is a software design pattern commonly used in the development of user interfaces.
It provides a structured way to organize code and separate concerns in order to enhance maintainability and scalability of applications.
The MVC pattern consists of three main components: Model, View, and Controller.

1. Model:

* The Model represents the application's data and business logic. It is responsible for managing the data
and the rules for updating or manipulating it.
* The Model notifies the View of any changes in the data, allowing the View to update accordingly.
* In the context of databases, the Model often interacts with the database to retrieve or store data.

2. View:

* The View is responsible for presenting the data to the user and capturing user input.
It displays the information and provides the user interface elements.
* It observes changes in the Model and updates the user interface accordingly.
* The View does not handle the business logic but focuses on rendering and displaying the data.

3. Controller:

* The Controller acts as an intermediary between the Model and the View.
It receives user input from the View and updates the Model accordingly.
* The Controller is responsible for handling user actions, processing input, and updating the Model.
It then communicates the changes in the Model to the View for updating the user interface.
* In essence, the Controller decouples the user interface logic from the data and business logic.

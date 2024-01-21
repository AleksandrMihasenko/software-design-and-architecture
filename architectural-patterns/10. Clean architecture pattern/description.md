# Clean Architecture Pattern

Clean Architecture is a software design philosophy introduced by Robert C. Martin. 
It provides a way to organize code in a modular and scalable manner, with an emphasis on separation of concerns and maintainability.
The main goal of Clean Architecture is to create a system that is independent of frameworks, UI, databases,
and other external concerns, making the core business logic more testable and adaptable to change.

The Clean Architecture pattern typically consists of several concentric circles or layers, each representing a different level of abstraction and responsibility.
These layers are:

1. Entities: At the center of the architecture are entities, representing the core business objects or domain entities.
These entities encapsulate the business rules and logic.

2. Use Cases (Interactors): Surrounding the entities are use cases or interactors.
These represent the application-specific business rules and orchestrate the flow of data between entities.
Use cases are independent of external elements like databases or UI frameworks.

3. Interface Adapters: This layer converts data between the format most convenient for entities and use cases
and the format most convenient for external agencies, such as databases, web frameworks, or external services.
It includes presenters, controllers, and gateways.

4. Frameworks and Drivers: The outermost layer is responsible for communication with external elements, such as databases,
UIs, and frameworks. This layer is usually the most volatile and changes frequently as technology evolves.
It includes UI, frameworks, and external interfaces.

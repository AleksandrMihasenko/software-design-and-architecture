# Master Slave Pattern

The Master-Slave pattern is a concurrency design approach that optimizes the execution of tasks by delegating them
between a master component and multiple slave components. The master, acting as the controller, divides a complex task
into smaller, independent subtasks and assigns these subtasks to individual slaves.

The Master-Slave design pattern provides an effective approach for parallelizing tasks,
making the most of available computational resources. By breaking down a complex problem into smaller,
manageable tasks distributed across multiple processors, the Master-Slave pattern optimizes performance
and responsiveness in concurrent systems.

1. Master (Boss):

* Thinks about the overall plan and what needs to be done.
* Gives specific jobs to different team members (the slaves).
* Collects and combines the results to make sure everything fits together. 

2. Slaves (Workers):

* Do the specific jobs assigned by the master.
* Work on their tasks independently or in parallel with each other.
* Report back to the master with their results.

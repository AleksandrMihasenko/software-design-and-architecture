# Pipe and Filter Pattern

Pipe and Filter is an architectural pattern, which has independent entities called filters (components)
which perform transformations on data and process the input they receive, and pipes, which serve as connectors
for the stream of data being transformed, each connected to the next component in the pipeline.

The Pipes and Filters pattern is a component-based architectural design pattern that allows the decomposition of a monolithic
component into smaller independent elements which can be reused.

## Key Characteristics:

* Modularity: Each filter performs a specific task, making the system modular and easier to understand, maintain, and extend.
* Flexibility: Filters can be added, removed, or rearranged in the pipeline without affecting the overall structure of the system.
* Reusability: Filters can be reused in different pipelines or even in different applications, promoting code reuse.


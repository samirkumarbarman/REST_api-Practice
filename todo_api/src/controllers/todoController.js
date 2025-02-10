// let todos =[];

// const getAllTodos = (req, res) =>{
//     res.json(todos);
// }


// const createTodo = (req, res) =>{
//     const newTodos = req.body;

//     if(!newTodos.text){
//         return res.status(400).json({error:"Text is required"})
//     }
//     newTodos.id = todos.length + 1;
//     newTodos.completed = false;
//     todos.push(newTodos);
//     res.status(200).json(newTodos);

// };

// const getTodoById = (req, res) => {
//     const id = parseInt(req.params.id);
//     const todo = todos.find(todos =>todos.id ===id);
//     if(!todo){
//         return res.status(400).json({error:"Todo not Found"})
//     }
//     res.json(todo);
// };


// const updateTodo = (req, res) => {
//     const id = parseInt(req.params.id);
//     const updateTodo = req.body;
//     const index = todos.findIndex(todo => todo.id ===id);

//     if (index === -1){
//         return res.status(404).json({error:"Todo not found"})
//     }

//     if (updateTodo.text){
//         todos[index].text = updateTodo.text;
//     }

//     if (updateTodo.completed !== undefined){
//         todos[index].completed = updateTodo.completed;
//     }

//     res.json(todos[index]);
// };

// const deleteTodo = (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = todos.findIndex(todos => todos.id ===id);

//     if (index ===-1 ){
//         return res.status(404).json({error:"Todo not found"});
//     };

//     todos.splice(index, 1);
//     res.status(204).end();
// };


// export {getAllTodos, createTodo, getTodoById, updateTodo, deleteTodo};

let todos = [];
export const getAllTodos = (req, res) => {
    res.json(todos);
};

export const createTodo = (req, res) => {
    const newTodo = req.body; 

    if (!newTodo.text) {
        return res.status(400).json({ error: "Text is required" });
    }
    newTodo.id = todos.length + 1;
    newTodo.completed = false;
    todos.push(newTodo);
    res.status(201).json(newTodo); 
};

export const getTodoById = (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === id);
    if (!todo) {
        return res.status(404).json({ error: "Todo not Found" }); 
    }
    res.json(todo);
};

export const updateTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTodo = req.body;
    const index = todos.findIndex(todo => todo.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }

    if (updatedTodo.text) {
        todos[index].text = updatedTodo.text;
    }

    if (updatedTodo.completed !== undefined) {
        todos[index].completed = updatedTodo.completed;
    }

    res.json(todos[index]);
};

export const deleteTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id); // Correct variable name in findIndex

    if (index === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }

    todos.splice(index, 1);
    res.status(204).end();
};
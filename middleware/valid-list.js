
export default function ({ store, route, error }) {
    let taskId = route.params.id;
    let tasks = store.state.tasks;
    let exists = tasks.filter( task => task.id == taskId).length > 0;
    if(!exists){
        error({ statusCode: 404, message: 'Task Not Found' })
    }
}
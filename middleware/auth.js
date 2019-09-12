
export default function ({ store, redirect, req }){
    
    if(!store.state.auth.authorized){
        redirect('/')
    }
}
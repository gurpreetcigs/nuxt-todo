export default function ({ store, redirect}){

    if(store.state.auth.authorized)
    redirect('/list')
    
}
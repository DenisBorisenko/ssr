export default function({$axios,store,redirect,$route}){
  $axios.onError(error => {
    if(error.response.status === 422) {
        if ($nuxt.$route.path === '/' ) {
          store.dispatch('validation/setErrors', error.response.data.errors)
          return redirect('/login')
        }
      if ($nuxt.$route.path === '/login' ) {
        store.dispatch('validation/setErrors', error.response.data.errors)
        return redirect('/login')
      }
        if ($nuxt.$route.path === '/register') {
          store.dispatch('validation/setErrors', error.response.data.errors)
          return redirect('/register')
        }
        if ($nuxt.$route.path === '/dashboard') {
          store.dispatch('validation/setErrors', error.response.data.errors)
          return redirect('/dashboard')
        }
      }


    return Promise.reject(error)
  })
  $axios.onRequest(()=>{
    store.dispatch('validation/clearErrors')
  })
}

import Vue from 'vue'
import VueRouter from 'vue-router'
import session from '../models/session'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: checkSessionUser
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: () => import(/* webpackChunkName: "exercises" */ '../views/Exercises.vue'),
    beforeEnter: checkSessionUser
  },
  {
    path: '/userspage',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "userspage" */ '../views/UsersPage.vue'),
    beforeEnter: checkSessionUserAdmin
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: checkLogin
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/addexercise',
    name: 'Add Exercise',
    component: () => import(/* webpackChunkName: "addexercise" */ '../views/Addexercise.vue')
  },
  {
    path: '/adduser',
    name: 'Add User',
    component: () => import(/* webpackChunkName: "adduser" */ '../views/Adduser.vue')
  },
  {
    path: '/edituser',
    name: 'Edit User',
    component: () => import(/* webpackChunkName: "edituser" */ '../views/EditUser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


function checkSessionUser (to, from, next) {
  if(session.user){
    next();
  }else{
    next();
    next('Login');
  }
}


function checkLogin(to, from, next) {
  if(session.user == null){
    next();
  }else{
    session.addNotification("You are now logged out." , 'danger');
    session.user = null;
    next();
  }
}

function checkSessionUserAdmin (to, from, next) {
  if(session.user){
    if(session.user.user == 'admin'){
      next();
    }
    else{
      session.addNotification("Error: permission denied (see models/users.js for admin)", 'danger');
    }
  }else{
    next('Login');
  }
}
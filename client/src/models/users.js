const users = {
    userList: [{ user:'admin', 
    name: 'Admin', 
    email: 'admin@flexercise.io',
    password: 'admin1234', 
    image: 'https://img.favpng.com/20/18/11/computer-icons-royalty-free-clip-art-png-favpng-ti3NyXiZCh3GGH3QG9tx9Qfhm.jpg',
    exercises: []
    }],
    addUser(user, name, email, password, image, exercises){
        this.userList.push({user, name, email, password, image, exercises})
    },
    deleteUser(i){
        this.userList.splice(i, 1);
    }
    
    
};

export default users;

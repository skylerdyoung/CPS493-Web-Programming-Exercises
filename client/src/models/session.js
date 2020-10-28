const session = {
    user: null,
    name: null,
    email: null,
    password: null,
    image: null,
    notifications: [],
    addNotification(text, type='info'){
        this.notifications.push({text, type})
    },
    deleteNotification(i){
        this.notifications.splice(i, 1);
    }
};

export default session;
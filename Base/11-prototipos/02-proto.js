function User(){
    this.name= 'Chanchito'
    this.logger= function(){
        console.log("logueando...");
    }
}   

User.prototype.login = function(){
    console.log('iniciando sesion',this.name);
    this.logger();
}
const user1 = new User();
const user2 = new User();

user1.login();
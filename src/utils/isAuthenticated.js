// Can be improved
export default function isAuthenticated() {
    var token = localStorage.getItem('token');
    console.log(token);
    return token;
}
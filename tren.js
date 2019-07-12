const fetch = require('node-fetch');

class DataService {
constructor(url){
    this.url =url;
}
async getUser(id) {
    try {
        let response = await fetch(`${this.url}/users/${userId}`);
        let data = await response.json();
        return data;
    } catch(error) {
       throw new Error('could not get users data');
        
    }
}
async getPosts(userId) {
    try {
        let response = await fetch(`${this.url}/posts?userId=${userId}`);
        let data = await response.json();
        return data;
    } catch(error) {
       throw new Error('could not get data from server');
        
    }
}
async getComments(postId) {
    try {
        let response = await fetch(`${this.url}/comments?postId=${userId}`);
        let data = await response.json();
        return data;
    } catch(error) {
       throw new Error('could not get comment data ');
        
    }
}
}

(async () => {
    let dataService = new DataService('https://jsonplaceholder.typicode.com')
    try{
        let user = await getUser(1);
        let posts = await getPosts(user.id);
        let comments = await dataService.getComments(posts[0].id)
        console.log(comments);
        
    } catch (error) {
        console.error(error);
        
    }
})();
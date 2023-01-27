

module.exports = class utils{
    constructor() {}


    static async  post(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         body: JSON.stringify(data) 
        });
        return response.json(); 
      }

      static async  get(url = '',) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'token': localStorage.getItem('token')
          },

         
        });
        return response.json(); 
      }

      static async  delete(url = '',) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'token': localStorage.getItem('token')
          },

         
        });
        return response.json(); 
      }

      static async  put(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         body: JSON.stringify(data) 
        });
        return response.json(); 
      }
}
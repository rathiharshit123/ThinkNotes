

module.exports = class utils{
    constructor() {}


    static async  post(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2I0ODg3M2JlYjY5MzhjODAzNjFiODUiLCJlbWFpbCI6InJhdGhpaGFyc2hpdDEyMzNAZ21haWwuY29tIiwiaWF0IjoxNjczMDg2MDk4fQ.ROTTHOVI9qo7pvOe9ALxIotq6T9EZBVd1Dr2iRSa8U0'
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
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2I0ODg3M2JlYjY5MzhjODAzNjFiODUiLCJlbWFpbCI6InJhdGhpaGFyc2hpdDEyMzNAZ21haWwuY29tIiwiaWF0IjoxNjczMDg2MDk4fQ.ROTTHOVI9qo7pvOe9ALxIotq6T9EZBVd1Dr2iRSa8U0'
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
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2I0ODg3M2JlYjY5MzhjODAzNjFiODUiLCJlbWFpbCI6InJhdGhpaGFyc2hpdDEyMzNAZ21haWwuY29tIiwiaWF0IjoxNjczMDg2MDk4fQ.ROTTHOVI9qo7pvOe9ALxIotq6T9EZBVd1Dr2iRSa8U0'
          },

         
        });
        return response.json(); 
      }
}
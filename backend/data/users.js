import bcrypt from 'bcryptjs'

const users =[

    {
        name: 'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true

    },
    
    {
        name: 'Dante',
        email:'dante@example.com',
        password:bcrypt.hashSync('123456',10),
     

    },
    
    {
        name: 'Quelin',
        email:'quelin@example.com',
        password:bcrypt.hashSync('123456',10),
      

    }

]

export default users
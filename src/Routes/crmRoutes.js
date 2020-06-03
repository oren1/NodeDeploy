const { addNewContact,
     getAllContacts, 
     getContactById,
     getContactAndUpdate,
     removeContact } = require('../Controllers/crmController')

const routes = (app) => {

    app.route('/contact')
    .get((req,res,next) => {

        console.log(`request from ${req.originalUrl}`)
        console.log(`request type ${req.method}`)
        next()
        
    },getAllContacts)
    

    .post(addNewContact)


    app.route('/contact/:contactID')
    .get(getContactById)
    
    .put(getContactAndUpdate)
    
    .delete(removeContact)
}

module.exports = routes
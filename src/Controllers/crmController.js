const Contact = require('../Models/crmModel')

const addNewContact = (req,res) => {

    const contact = new Contact(req.body)

    contact.save((err,newContact) => {

        if (err) res.send(err)
        res.status(200)
        res.json(newContact)

    })

}


function getAllContacts(req,res) {

    Contact.find({}, (err,contacts) => {

        if (err) res.send(err)
        
        res.status(200)
        res.json(contacts)

    })

}


const getContactById = (req,res) => {

    const contact = Contact.findById(req.params.contactID, (err, contact) => {
        if (err) res.send(err)
        res.json(contact)
    })
}

const getContactAndUpdate = (req,res) => {

    const contact = Contact.findByIdAndUpdate( { _id : req.params.contactID }, req.body,{ new: true, useFindAndModify:false }, (err, contact) => {
        if (err) res.send(err)
        res.json(contact)
    })

}

const removeContact = (req,res) => {

     Contact.deleteOne({  _id: req.params.contactID }, (err) => {

        if (err) res.send(err)
        res.json({ message: 'Contact was deleted'})
    })

}

module.exports = {
    addNewContact,
    getAllContacts,
    getContactById,
    getContactAndUpdate,
    removeContact
}
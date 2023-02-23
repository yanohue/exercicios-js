class Client {
  constructor(name, invoice) {
    this.name = name
    this.invoice = invoice
  }
}

function registerNewClient() {                              //registers a new client
  var newName = window.document.getElementById("newName")
  var newInvoice = document.getElementById("newInvoice")
  var clientCount = 0 //needed for createClientList

  var newClient = new Client(newName.value, Number(newInvoice.value))

  if(clientCount == 0){
    createClientList(newClient)
    clientCount++
  } else {
    addToClientList(newClient)
    clientCount++
  }
      
}

function createClientList(newClient) {                       //creates client list, and adds first client, could be removed

}

function addToClientList(newClient) {                       //adds a new client to the client list

}
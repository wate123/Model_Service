// User defined class
// to store element and its priority
class QElement {
    constructor(element, priority)
    {
        this.element = element;
        this.priority = priority;
    }
}

// PriorityQueue class
class PriorityQueue {

    // An array is used to implement priority
    constructor()
    {
        this.items = [];
    }

    // functions to be implemented
    enqueue(element, priority)
    {
        // creating object from queue element
        var qElement = new QElement(element, priority);
        var contain = false;

        // iterating through the entire
        // item array to add element at the
        // correct location of the Queue
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // Once the correct location is found it is
                // enqueued
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }

        // if the element have the highest priority
        // it is added at the end of the queue
        if (!contain) {
            this.items.push(qElement);
        }
    }
    // dequeue method to remove
    // element from the queue
    dequeue()
    {
        // return the dequeued element
        // and remove it.
        // if the queue is empty
        // returns Underflow
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    front()
    {
        // returns the highest priority element
        // in the Priority queue without removing it.
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    isEmpty()
    {
        // return true if the queue is empty.
        return this.items.length == 0;
    }

    printPQueue()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i].element + " ";
        return str
    }
}

var priorityQueue = new PriorityQueue();

function request(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var requestConfirm = document.getElementById('request_confirmation');
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (name === "")
    requestConfirm.innerHTML = "Please enter your name.";
    else if (email === "")
        requestConfirm.innerHTML = "Please enter your Email.";
    else if (atpos < 1 || dotpos - atpos < 2){
        requestConfirm.innerHTML = "Please enter correct Email";
}
    else if (subject === "" )
        requestConfirm.innerHTML = "Please enter a Subject.";
    else{
        window['pQueue'].enqueue(name,1);
        requestConfirm.innerHTML = "Request made. " + this.priorityQueue.items[1].element;
    }
}
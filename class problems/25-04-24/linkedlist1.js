class Node {
    constructor(name, phone_num) {
        this.name = name;
        this.phone_num = phone_num;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(new_node) {
        if (this.head == null)
        {
            this.head = new_node;
        } else 
        {
            let temp = this.head;
            while (temp.next !=null) {
                temp = temp.next;
            }
            temp.next = new_node;
        }
    }

    removeLast() {
        if (this.head == null) {
            return;
        }
        let temp = this.head;
        let prev = null;
        if (temp.next == null) {
            this.head = null;
            return;
        }
        while (temp.next != null) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
    }
    

    addFirst(Node)
    {
        if(Node.next==null)
        {
            Node.next=this.head
        }
    }

    removeFirst()
    {
        this.head.next=null
    }
    check_phno(number)
    {
        let temp = this.head
        while(temp!=null)
        {
            if(temp.phone_num==number)
            {
                console.log(temp.name,temp.phone_num)
            }
            temp = temp.next
        }
    }
}

let list = new LinkedList()
let list1=new Node("sangamesh",9874561230)
 let list2=new Node("Abhishek",9685741236)
 let list3=new Node("prasanna",9875463210)
 let list4=new Node("modi",3698547126)
 let list5=new Node("praveen",8529637410)


console.log(list);
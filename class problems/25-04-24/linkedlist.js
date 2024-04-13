 class linkedlist{
    constructor(name1,phoneNo)
    {
        this.name1=name1,
        this.phoneNo=phoneNo,
        this.next=null

    }
}
 let list1=new linkedlist("sangamesh",9874561230)
 let list2=new linkedlist("Abhishek",9685741236)
 let list3=new linkedlist("prasanna",9875463210)
 let list4=new linkedlist("modi",3698547126)
 let list5=new linkedlist("praveen",8529637410)
 list1.next=list2
 list2.next=list3
 list3.next=list4
 list4.next=list5
 console.log(list1);

 
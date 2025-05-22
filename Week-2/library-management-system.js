"use strict";
//
// FULLNAME: TAOFEEK KASSIM
// EMAIL: taophyckassim@gmail.com
// GITHUB USERNAME: Taophycc
// Library management system
// A book class
class Book {
    // Constructor function
    constructor(title, serialNumber, author, publisher) {
        this.serialNumber = serialNumber;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
    }
    // Addbook method:  adds details of the books
    addBook() {
        console.log(`Book title: ${this.title}\nSerial number: ${this.serialNumber}\nAuthor: ${this.author}\nPublisher: ${this.publisher}\n * ${this.title} has been added to collection`);
    }
}
// A member class
class Member {
    // Constructor functions
    constructor(id, name, dateJoined, active) {
        this.id = id;
        this.name = name;
        this.dateJoined = dateJoined;
        this.available = active;
    }
    // gets the information of the members
    info() {
        console.log(`${this.name} joined on ${this.dateJoined.toDateString()} with ID ${this.id}.\n Status: ${this.available ? "Active" : "inactive"}. `);
    }
}
// Test cases
const book1 = new Book("Devils Lair", 101, "John Adam", "Huntman publishers");
const book2 = new Book("Sun risen", 102, "Samuel Hope", "Huntman publishers");
const book3 = new Book("Make hay", 103, "Paul Pierce", "Huntman publishers");
const book4 = new Book("Chosen one", 104, "Abigail Lauren", "Huntman publishers");
const book5 = new Book("Alpha girl", 105, "Sam Johnson", "Huntman publishers");
book1.addBook();
book2.addBook();
book3.addBook();
book4.addBook();
book5.addBook();
const Member1 = new Member(23, "Ayo Bello", new Date("2025-01-25"), true);
const Member2 = new Member(51, "Ade Ayo", new Date("2024-04-20"), false);
const Member3 = new Member(81, "David Ojo", new Date("2025-05-31T14:30:00"), true);
Member1.info();
Member2.info();
Member3.info();

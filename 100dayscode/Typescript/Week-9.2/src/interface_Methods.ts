interface Animal {
  name: string;
  speak(): void;
}

const dog: Animal = {
  name: "Buddy",
  speak() {
    console.log("Woof!");
  }
};

dog.speak();

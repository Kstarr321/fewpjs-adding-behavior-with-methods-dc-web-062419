let cat, dog, bird, bird2;

describe("cat", () => {
  beforeEach(() => {
    cat = new Cat("Sasha", "female");
  });

  it("has a class of cat", () => {
    expect(new Cat()).to.be.an.instanceof(Cat);
  });
  it("cat.speak() returns '[name]' says meow!", () => {
    expect(cat.speak()).to.eq("Sasha says meow!");
  });
});
describe("dog", () => {
  beforeEach(() => {
    dog = new Dog("Rufio", "male");
  });

  it("has a class of dog", () => {
    expect(new Dog()).to.be.an.instanceof(Dog);
  });
  it("dog.speak() returns '[name] says woof!'", () => {
    expect(dog.speak()).to.eq("Rufio says woof!");
  });
});

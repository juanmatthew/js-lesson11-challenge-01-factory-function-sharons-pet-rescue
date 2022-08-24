const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5, //dont forget the "," if it's not last
    sleep: function () {
      console.log(`${this.name} meeds a nap. Zzz.`);
      //Still in sleep(), change the value of isTired to 1.
      this.isTired = 1;
    },
    play: function () {
      //Write an if statement to check if the isTired value is equal to 10
      if (this.isTired === 10) {
        console.log(`${this.name} is too tired to play.`);
        // call the sleep() method. Hint: Don’t forget to use the this keyword because
        //sleep() is a property of the same object!
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  //return the pet object.
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

//Call the methods to make sure they work.
//For the clover object, call the sleep method.
//For the baxter object, call the play method. In the console,
//you’ll see messages for Clover to nap and Baxter to play!
//clover.sleep();
//baxter.play();

//console.log(clover, baxter);
//Now log out the clover and baxter objects.
//Notice that the isTired value for Clover has changed
//from 5 to 1 because you called sleep() which changes the
//isTired value to 1. Also, the isTired value for Baxter has
//increased from 5 to 6 because play() adds 1 to the isTired
//value when run.

//Change the value of the isTired property, use the dot notation
clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];
//console.log(allPets);

const showPets = function (petArray) {
  //Grab the pets variable from up top that’s selecting the
  //“all-pets” unordered list.
  //Use innerHTML to set pets to an empty string This will clear
  //your list whenever showPets is run, so that you can update it with fresh info.
  pets.innerHTML = "";
  //use a for...of loop to loop over the petArray.
  for (let pet of petArray) {
    //Use "let" to declare the status variable because you’ll be reassigning the value.
    let status = "ready to play!";
    //to check if the pet’s isTired property is greater or equal to 7
    if (pet.isTired >= 7) {
      //If so, change the value of the status variable to “sleeping”
      status = "Sleeping";
    }
    const li = document.createElement("li");
    //Use innerHTML to add the pet name, species, and status to the list item
    //<name> the <species> is <status>
    //In the value of the li.innerHTML, add a span with a class of “pet-name”
    li.innerHTML = `<span class = "pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  //In the event handler, call the showPets function. Pass the allPets array as an argument to the function.
  showPets(allPets);
});

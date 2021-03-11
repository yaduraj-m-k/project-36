var dog,sadDog,happyDog;
var feed,add_food,foodobj,food;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  food= new Food(200,200,10,10);

  feed=createButton("Feed the dog")
  feed.position(700,95);
  feed.mousePressed(feedDog);

  add_food=createButton("Add food");
  add_food.position(800,95);
  add_food.mousePressed(addFood)
}

function draw() {
  background(46,139,87);


    food.display();
  drawSprites();
}

function feedDog(){
  dog.addImage(happyDog);
  if(foodobj.getFoodStock()<=0){
    foodobj.updateFoodStock(foodobj.getFoodStock()*0);
  }else{
    foodobj.updateFoodStock(foodobj.getFoodStock()-1);
  }
}

function addFoods(){
  food++;
  database.ref('/').update({
    food:food
  })
}
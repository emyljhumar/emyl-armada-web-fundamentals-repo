// Task 1
let book = {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    pages: 336,
    isRead: false
}

console.log(book.title)
console.log(book.author)
console.log(book.pages)
console.log(book.isRead)
console.log(book["title"])
console.log(book["author"])
console.log(book["pages"])
console.log(book["isRead"])

book.isRead = true
console.log(book.isRead)

book.genre = "Finance"
console.log(book)

// Task 2

let movies = [
{
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
}, 
{
    title: "Parasite",
    director: "Bong Joon-ho",
    year: 2019,
}, 
{
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
}]

console.log(movies[1].title)

movies.push({
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
})

movies[0].year = 2023

console.log(movies)

// Task 3
let student = {
    name: "Emyl",
    age: "22",
    subjects: ["Rizal", "Thesis", "OJT"]
}

console.log(student.subjects[0])

student.subjects.push("Environmental Science")

console.log(student)

// Task 4 
let recipe = {
    name: "Carbonara",
    ingredients: [
    {
        name: "Spaghetti",
        quantity: "200g"
    },
    {
        name: "Guanciale",
        quantity: "75g"
    },
    {
        name: "Egg yolks",
        quantity: "3 pcs"
    },
    {
        name: "Romano Cheese",
        quantity: "50g"
    }
],
    isVegetarian: false
}

recipe.ingredients.push(
    {
        name: "Salt",
        quantity: "pinch"
    }
)

console.log(recipe)
// Sodium Halogen - CRM (OOP)
const people = [
  {
    name: "Zach",
    age: 26,
  }
]
const clients = [
  {
    id: 12,
    company: "LogDNA",
    contact: "Kris Bondi",
  }
]
const projectTypes = {
  WEBSITE: "WEBSITE"
}
const projects = [
  {
    clientId: 12,
    name: "LogDNA website",
    type: projectTypes.WEBSITE,
    contact: "Kris Bondi",
    startDate: "",
    endDate: "",
  }
]

// Person
function Person(name, age) {
  this.name = name
  this.age = age
  this.isStaff = true

  this.projects = []
  this.newProject = (project) => this.projects.push(project)

  this.greeting = () => {
    console.log(`hi, my name is ${this.name}`)
  }
}

  // staff
  // customer
// project
// Milestones
// Tasks



// const Chance = new Person('chance', 33)

// Chance.greeting()
// console.log(Chance.age)

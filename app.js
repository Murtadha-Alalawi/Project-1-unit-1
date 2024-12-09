let startButton = document.querySelector("#start")

let answerText = document.querySelector("#answer")

let answer = null

word = [
    ["CAT","DOG","FISH"],
    ["BURGER","PIZZA","PASTA"],
    ["BAHRAIN","SPAIN","BRAZIL"],
]
  
let randomCategory = word[Math.floor(Math.random() * word.length)]
console.log(randomCategory)

startButton.addEventListener("click", (event) => {
    
    console.log(word.length)
      answer = randomCategory[Math.floor(
        Math.random() * randomCategory.length)
      ]

      

      
     
      for(let i = 0; i < answer.length; i++){
        let div = document.createElement('div')
        div.className = "answer-letter"
        div.innerHTML = "_"
        answerText.appendChild(div)
        
      }
     
      const answerLetters = document.querySelectorAll(".answer-letter")
      


      letterButtons.forEach((letterButton)=>{
        letterButton.addEventListener("click", (event)=>{
            if (answer === null){
                return
            }
            checkLetter(event.target.innerText)
        })
    }) 
    
    
    function checkLetter(letter){
        for(let i = 0; i < answer.length; i++){
            if(answer[i] === letter){
                answerLetters[i].textContent = answer[i]
            }
        }
    }
})




const letterButtons = document.querySelectorAll(".letters")



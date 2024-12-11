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

      let hint = document.querySelector("#hint")
      
      if(randomCategory === word[0]){
        hint.textContent = "animal"
      }
      else if(randomCategory === word[1]){
        hint.textContent = "food"
      }
      else if(randomCategory === word[2]){
        hint.textContent = "country"
      }

     
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


    let arrayWrongLetters = []
    const wrongLetterElement = document.querySelector("#wrong-letters")
    
    let liveCounter = document.querySelector("#live-counter")

    let hangManImage = document.querySelector("#img")

    
   
    
    
    function checkLetter(letter){
        let correct = true
        for(let i = 0; i < answer.length; i++){
            if(answer[i] === letter){
                answerLetters[i].textContent = answer[i]
                correct = true
            }
            else if(answer !== letter && !arrayWrongLetters.includes(letter)){
                correct = false
             
             liveCounter.textContent-=1
             
             if(liveCounter.textContent == 5){
                hangManImage.src = "hangman-images/hangman-image-2.jpg";
             }
             if(liveCounter.textContent == 4){
                hangManImage.src = "hangman-images/hangman-image-3.jpg";
             }
             if(liveCounter.textContent == 3){
                hangManImage.src = "hangman-images/hangman-image-4.jpg";
             }
             if(liveCounter.textContent == 2){
                hangManImage.src = "hangman-images/hangman-image-5.jpg";
             }
             if(liveCounter.textContent == 1){
                hangManImage.src = "hangman-images/hangman-image-6.jpg";
             }
             if(liveCounter.textContent == 0){
                hangManImage.src = "hangman-images/hangman-image-7.jpg";
             }
             
                break
            }

        
        }
        if(correct == false){
            arrayWrongLetters.push(letter)
            wrongLetterElement.textContent = ""
            arrayWrongLetters.forEach((element)=>{
                const newPElement = document.createElement("p")
                newPElement.textContent = element
                wrongLetterElement.appendChild(newPElement)
            })
        }
       
    }
})

const letterButtons = document.querySelectorAll(".letters")



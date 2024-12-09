let startButton = document.querySelector("#start")

let answerText = document.querySelector("#answer")

let answer = null


startButton.addEventListener("click", (event) => {
      answer = "CAT"
      
     
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
                console.log(answerLetters[i])
                answerLetters[i].textContent = answer[i]
            }
        }
    
    }
})

const letterButtons = document.querySelectorAll(".letters")


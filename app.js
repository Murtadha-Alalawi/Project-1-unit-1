let startButton = document.querySelector("#start")

let answerText = document.querySelector("#answer")

const answerLetters = document.querySelectorAll(".answer-letter")

let resetButton = document.querySelector("#reset")

let answer = null

word = [
    ["CAT","DOG","FISH"],
    ["BURGER","PIZZA","PASTA"],
    ["BAHRAIN","SPAIN","BRAZIL"],
]

let completeAnswer = document.querySelectorAll("answer-letter")

  
let randomCategory = word[Math.floor(Math.random() * word.length)]
console.log(randomCategory)



startButton.addEventListener("click", (event) => {

startButton.disabled = true;

    function checkWinner(){

        console.log(answerLetters)
        console.log(answer)

        let correctCount = 0;

        answerLetters.forEach((oneElement)=>{
            
            
            if(oneElement.textContent !== "_"){
                correctCount+=1
            }
        })
        if(correctCount === answer.length){
            console.log("YOU WIn")
            
        }
    
    }
    



    
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
            checkWinner()

           
        })
    }) 


    let arrayWrongLetters = []
    const wrongLetterElement = document.querySelector("#wrong-letters")
    
    let liveCounter = document.querySelector("#live-counter")

    let hangManImage = document.querySelector("#img")

    
    resetButton.addEventListener("click", (replay)=>{
        answer = null
        arrayWrongLetters = []

        gameStateReset();


        hint.textContent = ""
        answerText.innerHTML = ""
        wrongLetterElement.innerHTML = ""
        liveCounter.textContent = 6
        hangManImage.src = "hangman-images/hangman-image-1.jpg"
        startButton.disabled = false;


})

function gameStateReset() {
    completeAnswer = []
}
  
    
    
    function checkLetter(letter){
        let correct = true
        let arrayedAnswer = answer.split("")

        let myObjWord = {}

        arrayedAnswer.forEach((letter)=>{
            if(myObjWord[letter]){
                myObjWord[letter]+= 1
            }
            else{
                myObjWord[letter] = 1
            }
        })
        
        

        
        
        console.log(myObjWord)
        
        for(let i = 0; i < answer.length; i++){
            if(answer[i] === letter && myObjWord[letter] >1){
                console.log("in first condition")
                arrayedAnswer.forEach((eachLetter,index)=>{
                    console.log('in loop')
                    if(eachLetter === letter){
                        console.log('in loop and inner condition')


                        answerLetters[index].textContent = answer[index]
                    }
                })
                correct = true
                return

            }
            if(answer[i] === letter){
                answerLetters[i].textContent = answer[i]
                correct = true
                return
            }
            else if(answer !== letter && !arrayWrongLetters.includes(letter)){
                correct = false
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
                console.log("You lose")
             }
        }
       
    }
})

const letterButtons = document.querySelectorAll(".letters")



    


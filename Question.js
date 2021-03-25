class Question{
    constructor(){
        this.title = createElement('h1')
        this.input1 = createInput("").attribute("placeholder","enter your name :")
        this.input2 = createInput("").attribute("placeholder","enter your option :")
        this.button = createButton('Submit')
        this.question = createElement('h1')
        this.option1 = createElement('h3')
        this.option2 = createElement('h3')
        this.option3 = createElement('h3')
        this.option4 = createElement('h3')
        
    }

    hide(){
        this.title.hide()
        this.input1.hide()
        this.input2.hide()
        this.button.hide()
    }

    display(){

        this.title.html("The Quiz Game")
        this.title.position(350,0)
        this.question.html("What is the capital of Iceland")
        this.question.position(150,50)
        this.option1.html("1: New Delhi")
        this.option1.position(150,100)
        this.option2.html("2: Reykjavik")
        this.option2.position(150,120)
        this.option3.html("3: Rio de Janeiro")
        this.option3.position(150,140)
        this.option4.html("4: Ankara")
        this.option4.position(150,160)
        this.input1.position(150,230)
        this.input2.position(300,230)
        this.button.position(150,270)

        this.button.mousePressed(()=>{
            this.title.hide()
            this.input1.hide()
            this.input2.hide()
            this.button.hide()
            contestant.name = this.input1.value()
            contestant.answer = this.input2.value()
            contestantCount+=1
            contestant.index = contestantCount
            contestant.update()
            contestant.updateCount(contestantCount)
        })

        
        
    }
}
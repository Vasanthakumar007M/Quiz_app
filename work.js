const mcqData = [
    {   question: "Which chemical is used for degreening of fruit?",
        a: "Ethylene",
        b: "Corban dioxide",
        c: "Lactic Acid",
        d: "Methylene",
        correct: "a",
    },
    {   question: "India is known as home of_____?",
        a: "Vegetables",
        b: "Spices and Medicinal",
        c: "Fruits",
        d: "Flowers",
        correct: "b",
    },
    {   question: "'King of fruit'is called____?",
        a: "valapalam",
        b: "Apple",
        c: "Mango",
        d: "Tomoto",
        correct: "c",
    },
    {   question: "_____is a horticulture crop?",
        a: "Rice",
        b: "Wheat",
        c: "Millet",
        d: "tea",
        correct: "d",
    },
];
const mcq = document.getElementById('mcq')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentMcq = 0
let score = 0
loadMcq()
function loadMcq() {
    deselectAnswers()

    const currentMcqData = mcqData[currentMcq]

    questionEl.innerText = currentMcqData.question
    a_text.innerText = currentMcqData.a
    b_text.innerText = currentMcqData.b
    c_text.innerText = currentMcqData.c
    d_text.innerText = currentMcqData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === mcqData[currentMcq].correct) {
            score++
        }
        currentMcq++
        if(currentMcq < mcqData.length) {
            loadMcq()
        } else {
            mcq.innerHTML = (`<h2>You answered ${score}/${mcqData.length}
             questions correctly</h2>
            <button onclick="location.reload()">Retry</button>`)
        }
    }
})
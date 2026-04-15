const ball = document.createElement('div')
document.body.appendChild(ball)
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1
let ballTop = ballYPosition
let ballBottom = ballYPosition + 2 * ballRadius
let ballLeft = ballXPosition

const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 20
let LPaddleHeight = 150
let LPaddleSpeed = 20
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = windowWidth / 2 - LPaddleWidth / 2
let LPaddleTop = LPaddleYPosition
let LPaddleBottom = LPaddleYPosition + LPaddleHeight
let LPaddleRight = LPaddleXPosition + LPaddleWidth

setInterval(moveBall, 10)

moveBall()
function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - ballRadius * 2){
        ballXDirection = ballXDirection * -1
    }
    // if ((ballBottom >= LPaddleTop) && (ballTop <= LPaddleBottom) && (ballLeft <= LPaddleRight) && (ballXDirection == -1)){
    //     ballXDirection = ballXDirection * -1
    // }
}

createBall()
function createBall(){
    ball.style.height = `${2*ballRadius}px`
    ball.style.width = `${2*ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "red"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

createLPaddle()
function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = "blue"
    LPaddle.style.position = "absolute"
    LPaddle.style.left = "50px"
    LPaddle.style.top = `${LPaddleYPosition}px`
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'w'){
        if (LPaddleYPosition <= 0) {
            LPaddlePosition = 0
        }
        else {
            LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
        }
    }
    if (event.key == 's'){
        if (LPaddleYPosition > windowHeight - LPaddleHeight) {
            LPaddleYPosition = windowHeight - LPaddleHeight
        }
        else {
            LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
        }
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
})

function animate(){
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}
animate()

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

// Create a big rectangle
c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.2 ;


// Create player and enemy

class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.lastKey
    }
   draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, 50, this.height) // draws player as a rectangle
   } 

   update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    //this stops players from moving downward
    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
        this.velocity.y = 0
    } else
    this.velocity.y += gravity

   }
}

const player = new Sprite({
    position: {
    x: 0,
    y: 0
    },
    velocity: {
    x: 0,
    y: 10
    }
})

player.draw()


const enemy = new Sprite({
    position: {
    x: 400,
    y: 100
    },
    velocity: {
    x: 0,
    y: 0
    }
})


enemy.draw()

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    }
}

let lastKey 


function animate() {
    window.requestAnimationFrame(animate)  //create infinite loop to animate object frame by frame 
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

player.velocity.x = 0

    if (keys.a.pressed && lastKey ==='a') {
        player.velocity.x = -1
    } else if (keys.d.pressed && lastKey === 'd') {
        player.velocity.x = 1
    }
}

animate();


window.addEventListener('keydown', (event) => {
    console.log(event.key);
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 'w':
            player.velocity.y = -10
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            enemy.lastKey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            enemy.lastKey = 'ArrowLeft'
            break
        case 'ArrowUp':
            enemy.velocity.y = -10
            break
        
    }
})


window.addEventListener('keyup', (event) => {
    console.log(event.key);
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 'w':
            keys.a.pressed = false
            lastKey = 'w'
            break
            
    }
})
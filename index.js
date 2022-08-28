//no touchy
const inventory = newInventory()
move(inventory).to(0, 0)

//copying code until tells me to freehand
//typing it all myself tho if that makes things any better


//function that creates character along with necessary variables for movement
const character = newImage('assets/green-character/static.gif')
let direction = null;
let x = 100;
let y = 250;
move(character).to(100, 250)

// const character = newImage('assets/green-character/static.gif')

// function handleDirectionChange(direction) {
//     if (direction === null) {
//         character.src = 'assets/green-character/static.gif'
//     }
//     if (direction === 'west') {
//         character.src = 'assets/green-character/west.gif'
//     }
//     if (direction === 'north') {
//         character.src = 'assets/green-character/north.gif'
//     }
//     if (direction === 'east') {
//         character.src = 'assets/green-character/east.gif'
//     }
//     if (direction === 'south') {
//         character.src = 'assets/green-character/south.gif'
//     }
// }

// move(character).withArrowKeys(100, 250, handleDirectionChange)



//function that takes direction variable to move character
function moveCharacter() {
    if (direction === 'west') {
        x = x - 1
        character.src = 'assets/green-character/west.gif'
    }
    if (direction === 'north') {
        y = y + 1
        character.src = 'assets/green-character/north.gif'
    }
    if (direction === 'east') {
        x = x + 1
        character.src = 'assets/green-character/east.gif'
    }
    if (direction === 'south') {
        y = y - 1
        character.src = 'assets/green-character/south.gif'
    }
    if (direction === null) {
        character.src = 'assets/green-character/static.gif'
    }

    //tried to make character go diagonally because I thought it would be cool,
    //but since it's an extra part I'll leave it for now
    if (direction === 'northEast') {
        x = x + 1
        y = y + 1
    }
    if (direction === 'northWest') {
        x = x - 1
        y = y + 1
    }
    if (direction === 'southEast') {
        x = x + 1
        y = y - 1
    }
    if (direction === 'southWest') {
        x = x - 1
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}

//function that takes keyboard input which calls moveCharacter to change direction variable
document.addEventListener('keydown', function (e) {
    if (e.repeat) return;

    if (e.key === 'ArrowLeft') {
        direction = 'west'
    }

    if (e.key === 'ArrowRight') {
        direction = 'east'
    }

    if (e.key === 'ArrowUp') {
        direction = 'north'
    }

    if (e.key === 'ArrowDown') {
        direction = 'south'
    }

    //tried to make character go diagonally because I thought it would be cool,
    //but since it's an extra part I'll leave it for now
    if (e.key === 'ArrowUp' && 'ArrowRight') {
        direction = 'northEast'
    }
    if (e.key === 'ArrowUp' && 'ArrowLeft') {
        direction = 'northWest'
    }
    if (e.key === 'ArrowDown' && 'ArrowRight') {
        direction = 'southEast'
    }
    if (e.key === 'ArrowDown' && 'ArrowLeft') {
        direction = 'southWest'
    }
})

//automatically resets direction variable to null to keep character from indefinitely moving
document.addEventListener('keyup', function (e) {
    direction = null
})


setInterval(moveCharacter, 1)
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
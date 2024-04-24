function my_spaceship(path){
let x = 0;
let y = 0;
let direction = 'up';

for(let move of path){
    
if (move === 'R'){
        if (direction === 'up'){
            direction= 'right';
        }
        else if (direction === 'right'){
            direction= 'down';
        }
        else if (direction === 'down'){
            direction= 'left';
        }
        else{
            direction = 'up';
        }
}
else if (move === 'L'){
    if (direction === 'up'){
        direction= 'left';
    }
    else if (direction === 'left'){
        direction= 'down';
    }
    else if (direction === 'down'){
        direction= 'right';
    }
    else{
        direction = 'up';
    }
}
else if (move === 'A'){
    if (direction === 'up'){
        y--;
    }
    else if (direction === 'down'){
        y++;
    }
    else if (direction === 'right'){
        x++;
    }
    else{
        x--;
    }
}
}
return `{x: ${x}, y: ${y}, direction: '${direction}'}`;

}

//console.log(my_spaceship("RAALALL"))

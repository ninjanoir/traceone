//refacto utils ---> algo direction

export const handleDirection = (orientation, direction ) => {


    console.log(orientation, direction)

    switch (orientation) {
        case 'N':

        if(direction === 'right'){

            return {rotate: true, value: 90, state: 'E'};
        }else if(direction === 'left'){

            return {rotate: true, value: -90, state: 'W'};
        }else if(direction === 'forward'){

            return {rotation: false, value: 0, state: 'N'}

        }else if(direction === 'down'){

            return {rotation: true, value: 180, state: 'S'}

        }       
            break;
    
        default:
            break;
    }

}
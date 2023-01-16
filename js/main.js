const control = document.querySelectorAll('[data-control]')

const pecas = {
    damage: {
        force: 25,
        power: 5,
        energy: -30,
        speed: 10,
    },
    shield: {
        force: 10,
        power: 10,
        energy: 0,
        speed: -10,
    },
    core: {
        force: 0,
        power: 25,
        energy: -10,
        speed: 20,
    },
    battery: {
        force: 0,
        power: 0,
        energy: 50,
        speed: 5,
    },
    firePower: {
        force: 30,
        power: 20,
        energy: -40,
        speed: 0,
    },
}



control.forEach( element => {
    element.addEventListener('click', (evento) => {
        manipulationD(evento.target.dataset.control, evento.target.parentNode)
    })
    
});

function manipulationD (op, control){
    const peca = control.querySelector('.controle-contador')

    if (op === '-'){
        peca.value = parseInt(peca.value) - 1

    }
    else {
        peca.value = parseInt(peca.value) + 1
    }
}
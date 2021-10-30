const empleados = [
    {
        id: 1,
        nombre: 'Alberto'
    },
    {
        id: 2,
        nombre: 'Esteban'
    },
    {
        id: 3,
        nombre: 'Monica'
    },
];
const salarios = [
    {
        id: 1,
        salario: 14500000
    },
    {
        id: 2,
        salario: 1500000
    },
    {
        id: 3,
        salario: 2500000
    },
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( e => e.id === id);

    if(empleado){
        callback(null, empleado);
    }else{
        callback(`No se encontro el empleado con id:  ${id}`);
    }
}

const id = 1;

getEmpleado(id, (err, empleado) =>{
    if (err) {
        console.log('Error!');
        return console.log(err);
    }

    console.log('Empleado Existe!');
    console.log(empleado.nombre);
});

const getSalario = (id, callback) => {
    const salario = salarios.find( s =>  s.id === id );

    if (salario) {
        callback(null, salario);
    } else {
        callback(`No tiene salario el id: ${id}`);
    }
    
}

getSalario(id, (err, salario) =>{
    if (err) {
        console.log('Error!');
        return console.log(err);
    }

    console.log(salario.salario);
});
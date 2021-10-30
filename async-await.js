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

const getEmpleado = (id) => {
    return new Promise( (resolve, reject) =>{
        
        const empleado = empleados.find( e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No se encontro el empleado con id:  ${id}`);
    });
}

const getSalario = (id) => {
    return new Promise( (resolve, reject) =>{
        
        const salario = salarios.find( s => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`No se encontro el salario con id:  ${id}`);
    });
}
const getInfoUsuario = async(id) => {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return(`El empleado con id: ${id} se llama: ${empleado} y gana: $${new Intl.NumberFormat().format(salario)}`);
}



const id = 1;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

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
    
];

const getEmpleado = (id) => {

    const promesa = new Promise( (resolve, reject) =>{
        
        const empleado = empleados.find( e => e.id === id)?.nombre
        const salario = salarios.find( s => s.id === id)?.salario

        if(empleado){
            resolve(`El empleado con id: ${id} se llama: ${empleado} y gana: $${new Intl.NumberFormat().format(salario)}`);
        }else{
            reject(`No se encontro el empleado con id:  ${id}`);
        }
    
    });

    return promesa;
}

const id = 3;

getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))

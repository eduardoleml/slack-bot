
module.exports.proyects = [
    {
        id: 'abcd1',
        nombre: 'Proyecto 1',
        descripcion: 'Descripcion del proyecto 1',
        fechaInicio: '2022-01-01',
        fechaFin: '2022-01-07',
        responsable: 'eduardo.lemus',
        periodo: "enero",
        año: 2024,
        estatus: 'activo',
        rolesRequeridos: [
            {
                rol: 'frontend',
                cupo: 2
            },
            {
                rol: 'backend',
                cupo: 1
            },
            {
                rol: 'proyect manager',
                cupo: 1
            }
        ]
    },
    {
        id: 'abcd2',
        nombre: 'Proyecto 2',
        descripcion: 'Descripcion del proyecto 2',
        fechaInicio: '2022-02-01',
        fechaFin: '2022-02-07',
        responsable: 'eduardo.lemus',
        periodo: "febrero",
        año: 2024,
        estatus: 'activo',
        rolesRequeridos: [
            {
                rol: 'proyect manager',
                cupo: 1
            }
        ]
    },
    {
        id: 'abcd3',
        nombre: 'Proyecto 3',
        descripcion: 'Descripcion del proyecto 3',
        fechaInicio: '2022-03-01',
        fechaFin: '2022-03-07',
        responsable: 'eduardo.lemus',
        periodo: "marzo",
        año: 2024,
        estatus: 'pausado',
        rolesRequeridos: [
            {
                rol: 'backend',
                cupo: 1
            }
        ]
    },
    {
        id: 'abcd4',
        nombre: 'Proyecto 4',
        descripcion: 'Descripcion del proyecto 4',
        fechaInicio: '2022-04-01',
        fechaFin: '2022-04-07',
        responsable: 'eduardo.lemus',
        periodo: "abril",
        año: 2024,
        estatus: 'disponible',
        rolesRequeridos: [
            {
                rol: 'backend',
                cupo: 1
            }
        ]
    },
    {
        id: 'abcd5',
        nombre: 'Proyecto 5',
        descripcion: 'Descripcion del proyecto 5',
        fechaInicio: '2022-05-01',
        fechaFin: '2022-05-07',
        responsable: 'eduardo.lemus',
        periodo: "mayo",
        año: 2024,
        estatus: 'disponible',
        rolesRequeridos: [
            {
                rol: 'fullstack',
                cupo: 1
            }
        ]
    },
    {
        id: 'abcd6',
        nombre: 'Proyecto 6',
        descripcion: 'Descripcion del proyecto 6',
        fechaInicio: '2022-06-01',
        fechaFin: '2022-06-07',
        responsable: 'eduardo.lemus',
        periodo: "junio",
        año: 2024,
        estatus: 'disponible',
        rolesRequeridos: [
            {
                rol: 'frontend',
                cupo: 3
            },
            {
                rol: 'proyect manager',
                cupo: 1
            }
        ]
    },
    {
        id: 'abcd7',
        nombre: 'Proyecto 7',
        descripcion: 'Descripcion del proyecto 7',
        fechaInicio: '2022-07-01',
        fechaFin: '2022-07-07',
        responsable: 'eduardo.lemus',
        periodo: "julio",
        año: 2024,
        estatus: 'activo',
        rolesRequeridos: [
            {
                rol: 'proyect manager',
                cupo: 1
            }
        ]
    },
    {
        id: 'abcd8',
        nombre: 'Proyecto 8',
        descripcion: 'Descripcion del proyecto 8',
        fechaInicio: '2022-08-01',
        fechaFin: '2022-08-07',
        responsable: 'eduardo.lemus',
        periodo: "agosto",
        año: 2024,
        estatus: 'inactivo',
        rolesRequeridos: [
            {
                rol: 'backend',
                cupo: 1
            },
        ]
    },
    {
        id: 'abcd9',
        nombre: 'Proyecto 9',
        descripcion: 'Descripcion del proyecto 9',
        fechaInicio: '2022-09-01',
        fechaFin: '2022-09-07',
        responsable: 'eduardo.lemus',
        periodo: "septiembre",
        año: 2024,
        estatus: 'disponible',
        rolesRequeridos: [
            {
                rol: 'frontend',
                cupo: 1
            },
            {
                rol: 'backend',
                cupo: 1
            }
        ]
    },
    {
        id: 'abcd10',
        nombre: 'Proyecto 10',
        descripcion: 'Descripcion del proyecto 10',
        fechaInicio: '2022-10-01',
        fechaFin: '2022-10-07',
        responsable: 'eduardo.lemus',
        periodo: "octubre",
        año: 2024,
        estatus: 'activo',
        rolesRequeridos: [
            {
                rol: 'frontend',
                cupo: 1
            }
        ]
    }
]

module.exports.usuarios = [
    {
        idUsuario: 'usuario1',
        nombre: "Usuario manager 1",
        roles: [
            {
                id: 'abcd4',
                rol: 'proyect manager'
            }
        ],
        planeacion: [
            {
                semana: 1,
                fechaInicio: '2022-01-01',
                fechaFin: '2022-01-07',
                proyecto: {
                    id: 'abcd5',
                    nombre: 'Proyecto 5',
                    descripcion: 'Descripcion del proyecto 5',
                },
                responsable: 'usuario1',
                asignacion: 40
            },
            {
                semana: 2,
                fechaInicio: '2022-01-08',
                fechaFin: '2022-01-14',
                proyecto: {
                    id: 'abcd6',
                    nombre: 'Proyecto 6',
                    descripcion: 'Descripcion del proyecto 6',
                },
                responsable: 'usuario1',
                asignacion: 20
            },
            {
                semana: 2,
                fechaInicio: '2022-01-08',
                fechaFin: '2022-01-14',
                proyecto: {
                    id: 'abcd7',
                    nombre: 'Proyecto 7',
                    descripcion: 'Descripcion del proyecto 7',
                },
                responsable: 'usuario1',
                asignacion: 20
            },
            {
                semana: 3,
                fechaInicio: '2022-01-15',
                fechaFin: '2022-01-21',
                proyecto: {
                    id: 'abcd8',
                    nombre: 'Proyecto 8',
                    descripcion: 'Descripcion del proyecto 8',
                },
                responsable: 'usuario1',
                asignacion: 40
            }
        ]
    },
    {
        idUsuario: 'usuario2',
        nombre: "Usuario frontend 1",
        roles: [
            {
                id: 'abcd1',
                rol: 'frontend'
            }
        ],
        planeacion: [
            {
                semana: 1,
                fechaInicio: '2022-01-01',
                fechaFin: '2022-01-07',
                proyecto: {
                    id: 'abcd9',
                    nombre: 'Proyecto 9',
                    descripcion: 'Descripcion del proyecto 9',
                },
                responsable: 'usuario2',
                asignacion: 40
            },
            {
                semana: 2,
                fechaInicio: '2022-01-08',
                fechaFin: '2022-01-14',
                proyecto: {
                    id: 'abcd10',
                    nombre: 'Proyecto 10',
                    descripcion: 'Descripcion del proyecto 10',
                },
                responsable: 'usuario2',
                asignacion: 20
            },
            {
                semana: 2,
                fechaInicio: '2022-01-08',
                fechaFin: '2022-01-14',
                proyecto: {
                    id: 'abcd11',
                    nombre: 'Proyecto 11',
                    descripcion: 'Descripcion del proyecto 11',
                },
                responsable: 'usuario2',
                asignacion: 20
            },
            {
                semana: 3,
                fechaInicio: '2022-01-15',
                fechaFin: '2022-01-21',
                proyecto: {
                    id: 'abcd12',
                    nombre: 'Proyecto 12',
                    descripcion: 'Descripcion del proyecto 12',
                },
                responsable: 'usuario2',
                asignacion: 40
            }
        ]
    },
    {
        idUsuario: 'usuario3',
        nombre: "Usuario backend 1",
        roles: [
            {
                id: 'abcd12',
                rol: 'backend'
            }
        ],
        planeacion: [
            {
                semana: 1,
                fechaInicio: '2022-01-01',
                fechaFin: '2022-01-07',
                proyecto: {
                    id: 'abcd13',
                    nombre: 'Proyecto 13',
                    descripcion: 'Descripcion del proyecto 13',
                },
                responsable: 'usuario3',
                asignacion: 40
            },
            {
                semana: 2,
                fechaInicio: '2022-01-08',
                fechaFin: '2022-01-14',
                proyecto: {
                    id: 'abcd14',
                    nombre: 'Proyecto 14',
                    descripcion: 'Descripcion del proyecto 14',
                },
                responsable: 'usuario3',
                asignacion: 20
            },
            {
                semana: 2,
                fechaInicio: '2022-01-08',
                fechaFin: '2022-01-14',
                proyecto: {
                    id: 'abcd15',
                    nombre: 'Proyecto 15',
                    descripcion: 'Descripcion del proyecto 15',
                },
                responsable: 'usuario3',
                asignacion: 20
            },
            {
                semana: 3,
                fechaInicio: '2022-01-15',
                fechaFin: '2022-01-21',
                proyecto: {
                    id: 'abcd16',
                    nombre: 'Proyecto 16',
                    descripcion: 'Descripcion del proyecto 16',
                },
                responsable: 'usuario3',
                asignacion: 40
            }
        ]
    },
    {
        idUsuario: 'usuario4',
        nombre: "Usuario fullstack 1",
        roles: [
            {
                id: 'abcd3',
                rol: 'fullstack'
            }
        ],
        planeacion: [
            {
                semana: 1,
                fechaInicio: '2022-01-01',
                fechaFin: '2022-01-07',
                proyecto: {
                    id: 'abcd17',
                    nombre: 'Proyecto 17',
                    descripcion: 'Descripcion del proyecto 17',
                },
                responsable: 'usuario4',
                asignacion: 40
            },
            {
                semana: 2,
                fechaInicio: '2022-01-08',
                fechaFin: '2022-01-14',
                proyecto: {
                    id: 'abcd18',
                    nombre: 'Proyecto 18',
                    descripcion: 'Descripcion del proyecto 18',
                },
                responsable: 'usuario4',
                asignacion: 20
            },
            {
                semana: 2,
                fechaInicio: '2022-01-08',
                fechaFin: '2022-01-14',
                proyecto: {
                    id: 'abcd19',
                    nombre: 'Proyecto 19',
                    descripcion: 'Descripcion del proyecto 19',
                },
                responsable: 'usuario4',
                asignacion: 20
            },
            {
                semana: 3,
                fechaInicio: '2022-01-15',
                fechaFin: '2022-01-21',
                proyecto: {
                    id: 'abcd20',
                    nombre: 'Proyecto 20',
                    descripcion: 'Descripcion del proyecto 20',
                },
                responsable: 'usuario4',
                asignacion: 40
            }
        ]
    },
    {
        idUsuario: 'usuario5',
        nombre: "Usuario frontend 2",
        roles: [
            {
                id: 'abcd21',
                rol: 'frontend'
            }
        ],
        planeacion: [
            {
                semana: 1,
                fechaInicio: '2022-01-01',
                fechaFin: '2022-01-07',
                proyecto: {
                    id: 'abcd21',
                    nombre: 'Proyecto 21',
                    descripcion: 'Descripcion del proyecto 21',
                },
                responsable: 'usuario5',
                asignacion: 40
            },
            {
                semana: 2,
                fechaInicio: '2022-01-08',
                fechaFin: '2022-01-14',
                proyecto: {
                    id: 'abcd22',
                    nombre: 'Proyecto 22',
                    descripcion: 'Descripcion del proyecto 22',
                },
                responsable: 'usuario5',
                asignacion: 20
            },
            {
                semana: 2,
                fechaInicio: '2022-01-08',
                fechaFin: '2022-01-14',
                proyecto: {
                    id: 'abcd23',
                    nombre: 'Proyecto 23',
                    descripcion: 'Descripcion del proyecto 23',
                },
                responsable: 'usuario5',
                asignacion: 20
            },
            {
                semana: 3,
                fechaInicio: '2022-01-15',
                fechaFin: '2022-01-21',
                proyecto: {
                    id: 'abcd24',
                    nombre: 'Proyecto 24',
                    descripcion: 'Descripcion del proyecto 24',
                },
                responsable: 'usuario5',
                asignacion: 40
            }
        ]
    },
    {
        idUsuario: 'eduardo.lemus',
        nombre: "Eduardo lemus",
        roles: [
            {
                id: 'abcd1',
                rol: 'frontend'
            },
            {
                id: 'abcd2',
                rol: 'backend'
            },
            {
                id: 'abcd3',
                rol: 'fullstack'
            }
        ],
        planeacion: [
            {
                semana: 1,
                fechaInicio: '2022-01-01',
                fechaFin: '2022-01-07',
                proyecto: {
                    id: 'abcd1',
                    nombre: 'Proyecto 1',
                    descripcion: 'Descripcion del proyecto 1',
                },
                responsable: 'eduardo.lemus',
                asignacion: 40
            },
            {
                semana: 2,
                fechaInicio: '2022-01-08',
                fechaFin: '2022-01-14',
                proyecto: {
                    id: 'abcd2',
                    nombre: 'Proyecto 2',
                    descripcion: 'Descripcion del proyecto 2',
                },
                responsable: 'eduardo.lemus',
                asignacion: 20
            },
            {
                semana: 2,
                fechaInicio: '2022-01-08',
                fechaFin: '2022-01-14',
                proyecto: {
                    id: 'abcd3',
                    nombre: 'Proyecto 3',
                    descripcion: 'Descripcion del proyecto 3',
                },
                responsable: 'eduardo.lemus',
                asignacion: 20
            },
            {
                semana: 3,
                fechaInicio: '2022-01-15',
                fechaFin: '2022-01-21',
                proyecto: {
                    id: 'abcd4',
                    nombre: 'Proyecto 4',
                    descripcion: 'Descripcion del proyecto 4',
                },
                responsable: 'eduardo.lemus',
                asignacion: 40
            }
        ]
    }
]

module.exports.roles = [
    {
        id: 'abcd1',
        rol: 'frontend'
    },
    {
        id: 'abcd2',
        rol: 'backend'
    },
    {
        id: 'abcd3',
        rol: 'fullstack'
    },
    {
        id: 'abcd4',
        rol: 'proyect manager'
    }
]
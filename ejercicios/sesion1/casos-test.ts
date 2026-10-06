type Prioridad = "alta" | "media" | "baja";

type CasoPrueba = {
id: number;
titulo: string;
prioridad: Prioridad;
ejecutado: boolean;
};

const casos: CasoPrueba[] = [
{
id: 1,
titulo: "Login válido",
prioridad: "alta",
ejecutado: true
},
{
id: 2,
titulo: "Login inválido",
prioridad: "alta",
ejecutado: false
},
{
id: 3,
titulo: "Registro de usuario",
prioridad: "media",
ejecutado: true
},
{
id: 4,
titulo: "Recuperar contraseña",
prioridad: "baja",
ejecutado: false
},
{
id: 5,
titulo: "Cerrar sesión",
prioridad: "media",
ejecutado: false
}
];

function contarPorPrioridad(casos: CasoPrueba[]): Record<Prioridad, number> {
const conteo: Record<Prioridad, number> = {
alta: 0,
media: 0,
baja: 0
};

for (const caso of casos) {
conteo[caso.prioridad]++;
}

return conteo;
}

function listarPendientes(casos: CasoPrueba[]): CasoPrueba[] {
return casos.filter(caso => caso.ejecutado === false);
}

const formatearCaso = (caso: CasoPrueba): string => {
const estado = caso.ejecutado ? "Ejecutado" : "Pendiente";
return `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${estado}`;
};

casos.forEach(caso => console.log(formatearCaso(caso)));

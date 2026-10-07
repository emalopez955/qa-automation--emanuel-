interface CasoDeTest {
id: number;
titulo: string;
prioridad: string;
ejecutado: boolean;
}

const casosDeTest: CasoDeTest[] = [
{
id: 1,
titulo: "Validar inicio de sesión",
prioridad: "alta",
ejecutado: true
},
{
id: 2,
titulo: "Verificar registro de usuario",
prioridad: "media",
ejecutado: false
},
{
id: 3,
titulo: "Comprobar recuperación de contraseña",
prioridad: "baja",
ejecutado: true
}
];

function obtenerCasosDeTest(): Promise<CasoDeTest[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(casosDeTest);
    }, 500);
  });
}

function formatearCasoDeTest(caso: CasoDeTest): string {
  const estado = caso.ejecutado ? "Ejecutado" : "Pendiente";
  return `[ID: ${caso.id}] ${caso.titulo} | Prioridad: ${caso.prioridad} | Estado: ${estado}`;
}

async function main() {
  const casos = await obtenerCasosDeTest();
  casos.forEach((caso) => {
    console.log(formatearCasoDeTest(caso));
  });
}

main();

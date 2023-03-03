export default function CursosFeitos(){
    const aluraCertificados = [
        {
            name:'Lógica com JavaScript e HTML 1',
            certificate:'https://cursos.alura.com.br/certificate/dc350364-c415-456b-906b-0ab621e48f3a'
        },
        {
            name:'JavaScript programando na Web',
            certificate:'https://cursos.alura.com.br/certificate/538c8d83-e76f-4d70-a181-94f0451ed5f8'
        },
        {
            name:'React com JavaScript',
            certificate:'https://cursos.alura.com.br/certificate/e157334e-4c03-478e-a608-a2d8c4588fef'
        },
        {
            name:'React com TypeScript',
            certificate:'https://cursos.alura.com.br/certificate/e157334e-4c03-478e-a608-a2d8c4588fef'
        },
        {
            name:'React API',
            certificate:'https://cursos.alura.com.br/certificate/ff409651-7986-41c4-89d9-5df8e3e3e692'
        }
    ]
    
    const cursoEmVideoCertificados = [
        {
            name:'JavaScript',
            certificate:'https://www.cursoemvideo.com/certificates/certificado/?course_id=27745&cert-nonce=52aa1cfe89'
        }
    ]

    const rocketSeatCertificados = [
        {
            name:'Trilha Conectar',
            certificate:'https://app.rocketseat.com.br/certificates/124a7b26-6915-4f05-91a8-de447802b88f'
        },
        {
            name:'Trilha Fundamentar',
            certificate:'https://app.rocketseat.com.br/certificates/3212279f-8d75-4a53-aeb7-997d4b4e1f3f'
        },
        {
            name:'Trilha Especializar',
            certificate:'https://app.rocketseat.com.br/certificates/1b2f27bf-cd2c-40af-94dc-1230293df255'
        }
    ]

    return(
        <div className="textoContent">
            <hr />
            <h2>Cursos feitos</h2>

            <p>Veja os certificados de alguns dos cursos que fiz pela internet.</p>

            <div className="listaCursosFeitos">
                <ul className="certificadosContainer">
                    <h3>Alura</h3>
                    {aluraCertificados.map(alura => (
                        <li key={alura.name}>
                            <a href={alura.certificate} target="_blank">
                                {alura.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className="certificadosContainer">
                    <h3>Curso em vídeo</h3>
                    {cursoEmVideoCertificados.map(curso => (
                        <li key={curso.name}>
                            <a href={curso.certificate} target="_blank">
                                {curso.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className="certificadosContainer">
                    <h3>RocketSeat</h3>
                    {rocketSeatCertificados.map(rocket => (
                        <li>
                            <a href={rocket.certificate} target="_blank">
                                {rocket.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}
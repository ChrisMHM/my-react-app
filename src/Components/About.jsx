import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <h2 className='about-name'>Christian Hernández</h2>
            <img src="../src/assets/brown-cheems.png" alt="My photo" />
            <div className='contactme-container'>
                <ul>
                    <li className='about-mail'><span>Correo </span> <a href="mailto:christian.mhm@outlook.com?subject=Asunto" target='_blank' rel="noreferrer">christian.mhm@outlook.com</a></li>
                    <li className='about-linkedin'><span>LinkedIn </span> <a href="https://www.linkedin.com/in/chrismhm/" target='_blank' rel="noreferrer">Mi perfil de LinkedIn</a></li>
                </ul>
            </div>

            <p className='about-description'>
                Con un interés geniuno en el desarrollo de software después de desempeñarme como ingeniero Tester Manual durante los últimos dos años. Estoy interesado en el desarrollo web con Java y eso me ha llevado a buscar la capacitación árdua durante el último año en Digital House y Generation como desarrollador Java Full-Stack.
            </p>
        </div>
    )
}

export default About;
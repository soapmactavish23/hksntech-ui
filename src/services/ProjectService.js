export const ProjectService = {
    getData() {
        return [
            {
                id: 1,
                img: '/assets/projects/animais-peconhentos.png',
                plataforms: 'Android, iOS e Web',
                title: 'Animais Peçonhenos',
                description:
                    'Desenvolvido na dissertação de Henrick de Sousa Nogueira no Programa de Computação Aplicada da UFPA, o sistema integra MySQL, Java (Spring Boot, REST API), Python (TensorFlow, OpenCV, Keras) e Vue.js/Flutter, facilitando a identificação de animais peçonhentos.',
                linkedinLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7200852092326973440/'
            },
            {
                id: 2,
                img: '/assets/projects/conta-coleguinhas.png',
                plataforms: 'Android e iOS',
                title: 'Conta das Coleguinhas',
                description:
                    'O app "Conta das Coleguinhas" facilita a gestão financeira da venda de frangos. Feito em Flutter, usa API REST Java e MySQL para armazenar dados. O Keycloak garante segurança na autenticação. A solução é prática e eficiente para a contabilidade rural.',
                githubLink: 'https://github.com/soapmactavish23/conta-coleguinhas-mobile',
                linkedinLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7236377757763420161/'
            },
            {
                id: 3,
                img: '/assets/projects/talent-score.png',
                plataforms: 'Android e iOS',
                title: 'Talent Score',
                description:
                    'Este projeto desenvolve um app para identificar a compatibilidade de candidatos com vagas, analisando currículos em PDF. Utiliza Keycloak para autenticação, Spring Boot para API, Python com Tesseract OCR e PLN para análise, e MySQL para armazenar os resultados.',
                githubLink: 'https://github.com/soapmactavish23/conta-coleguinhas-mobile',
                linkedinLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7236377757763420161/'
            },
            {
                id: 4,
                img: '/assets/projects/job-timer.png',
                plataforms: 'Android e iOS',
                title: 'Job Timer',
                description:
                    'Desenvolvi um app para monitorar as horas por tarefa nos meus projetos! 📊 Utilizei Flutter, Bloc, Modular, Isar e Autenticação Google para garantir uma experiência eficiente e segura. O app registra tarefas, rastreia o tempo e gera relatórios.',
                githubLink: 'https://github.com/soapmactavish23/job_timer',
                linkedinLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7214088204348514304/'
            }
        ];
    }
};

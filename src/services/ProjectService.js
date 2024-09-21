export const ProjectService = {
    getData() {
        return [
            {
                id: 1,
                img: '/public/assets/projects/animais-peconhentos.png',
                plataforms: 'Android, iOS, Web',
                title: 'Animais Peçonhenos',
                description:
                    'Desenvolvido inicialmente como um manual, este projeto foi transformado em um avançado Sistema de Informação como parte da dissertação de mestrado de Henrick de Sousa Nogueira, no Programa de Pós-Graduação em Computação Aplicada da Universidade Federal do Pará (UFPA). O sistema integra tecnologias de ponta em Banco de Dados Relacional com MySQL, programação Back-End em Java utilizando Spring Boot e REST API, além de inovações em Visão Computacional e Deep Learning com Python, TensorFlow, OpenCV e Keras. Complementarmente, a interface do usuário é desenvolvida em Vue.js para a web e Flutter para aplicativos móveis, disponíveis tanto para Android quanto para iOS. A funcionalidade principal do sistema é a informatização do conteúdo do antigo manual para facilitar a identificação de animais peçonhentos. Uma característica destacada é a capacidade de os usuários enviarem fotos de animais via aplicativo móvel para o servidor. Lá, a imagem é processada por um script Python que utiliza um modelo de rede neural convolucional treinado para reconhecer o animal. Após o reconhecimento, o sistema fornece informações detalhadas sobre o animal identificado, incluindo o nível de gravidade do acidente, possíveis sintomas, exames laboratoriais recomendados e tratamentos apropriados. Este sistema não apenas moderniza a identificação de animais peçonhentos, mas também contribui significativamente para a segurança e educação ambiental na região amazônica.',
                githubLink: 'https://github.com/soapmactavish23/venomous-ui',
                linkedinLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7200852092326973440/'
            },
            {
                id: 1,
                img: '/public/assets/projects/animais-peconhentos.png',
                plataforms: 'Android, iOS, Web',
                title: 'Animais Peçonhenos',
                description:
                    'O aplicativo "Conta das Coleguinhas" foi desenvolvido para facilitar o gerenciamento financeiro do sítio da tia do usuário, que se dedica à venda de frangos. Utilizando a tecnologia Flutter, o app proporciona uma interface intuitiva e de fácil uso, disponível para dispositivos Android e iOS. Por trás das funcionalidades do aplicativo, uma robusta API REST, desenvolvida em Java, gerencia a lógica de negócios e garante a escalabilidade e segurança necessárias para o funcionamento eficiente do sistema. Os dados financeiros, incluindo despesas e receitas, são armazenados em um banco de dados relacional MySQL, o que assegura uma gestão organizada e acessível dos registros financeiros. Para proteger o acesso às informações, o aplicativo utiliza o Keycloak como sistema de autenticação, oferecendo uma camada adicional de segurança e garantindo que apenas usuários autorizados possam acessar as funcionalidades do sistema. O "Conta das Coleguinhas" é, portanto, uma solução completa e eficiente, desenvolvida para atender às necessidades específicas da contabilidade rural, proporcionando simplicidade e praticidade na gestão das finanças do sítio.',
                githubLink: 'https://github.com/soapmactavish23/venomous-ui',
                linkedinLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7200852092326973440/'
            }
        ];
    }
};

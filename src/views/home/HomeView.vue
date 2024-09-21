<template>
    <div class="card shadow">
        <div align="center">
            <img src="/public/assets/logo_fundo.png" width="250" />
        </div>

        <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
            <template #start>
                <b>Projetos Desenvolvidos</b>
            </template>

            <template #end>
                <IconField>
                    <InputIcon>
                        <i class="pi pi-search" />
                    </InputIcon>
                    <InputText placeholder="Pesquisar Projetos" />
                </IconField>
            </template>
        </Toolbar>

        <div v-for="project in projects" :key="project.id">
            <card-project :project="project" />
        </div>
    </div>
</template>

<script>
import CardProject from './components/CardProject.vue';

export default {
    components: { CardProject },
    name: 'HomeView',
    data() {
        return {
            projects: [
                {
                    id: 1,
                    img: '/public/assets/logo_fundo.png',
                    plataforms: 'android',
                    title: 'Project Name',
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    githubLink: 'https://github.com/username/projectname',
                    linkedinLink: 'https://www.linkedin.com/company/projectname'
                }
            ]
        };
    }
};
</script>

<style></style>

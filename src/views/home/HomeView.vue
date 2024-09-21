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
import { ProjectService } from '../../services/ProjectService';

export default {
    components: { CardProject },
    name: 'HomeView',
    data() {
        return {
            ProjectService,
            projects: []
        };
    },
    mounted() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            this.projects = this.ProjectService.getData();
        }
    }
};
</script>

<style></style>

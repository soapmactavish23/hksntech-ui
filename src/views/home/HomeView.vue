<template>
    <div class="card">
        <div align="center">
            <img src="/assets/logo_fundo.png" width="250" />
        </div>
        <hr />
        <h1>Projetos Desenvolvidos</h1>
        <hr />
        <br />
        <div class="grid">
            <div v-for="project in projects" :key="project.id" class="col-12 md:col-3">
                <CardProject :project="project" />
            </div>
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

<style>
@import url('../../App.scss');
</style>

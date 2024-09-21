<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <img alt="user header" :src="project.img" />
        </template>
        <template #title>{{ project.title }}</template>
        <template #subtitle>{{ project.plataforms }}</template>
        <template #content>
            <p class="m-0">
                {{ project.description }}
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button label="GitHub" severity="contrast" class="w-full" icon="pi pi-github" />
                <Button label="LinkedIn" severity="info" class="w-full" icon="pi pi-linkedin" />
            </div>
        </template>
    </Card>
</template>

<script>
export default {
    props: ['project']
};
</script>

<style></style>

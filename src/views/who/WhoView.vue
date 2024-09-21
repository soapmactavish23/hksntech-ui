<template>
    <div class="card shadow">
        <Profile />
        <hr />
        <credential-01 />
        <hr />
        <credential-02 />
        <hr />
        <credential-03 />
        <hr />
        <credential-04 />
    </div>
</template>

<script>
import Profile from './components/Profile.vue';
import Credential01 from './components/Credential01.vue';
import Credential02 from './components/Credential02.vue';
import Credential03 from './components/Credential03.vue';
import Credential04 from './components/Credential04.vue';
export default {
    components: { Profile, Credential01, Credential02, Credential03, Credential04 }
};
</script>

<style>
@import url('../../App.scss');
</style>

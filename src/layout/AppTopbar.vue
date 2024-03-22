<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';

const { layoutConfig, onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();

onMounted(() => {
    bindOutsideClickListener();

    let getStoredTheme = localStorage.getItem('theme')
    if(getStoredTheme == null) {
        localStorage.setItem('theme', 'light')
        document.documentElement.setAttribute('data-bs-theme','light')
    } else {
        if(getStoredTheme == 'dark') {
            changeThemeDark()
        } else {
            document.documentElement.setAttribute('data-bs-theme','light')
        }
    }
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};
const onSettingsClick = () => {
    topbarMenuActive.value = false;
    router.push('/documentation');
};
const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};

// custome
const lightShow = computed(() => {
    return layoutConfig.darkTheme.value;
});

const darkShow = computed(() => {
    return !layoutConfig.darkTheme.value;
});

import { usePrimeVue } from 'primevue/config';
const $primevue = usePrimeVue();
const onChangeTheme = (theme, mode) => {
    $primevue.changeTheme(layoutConfig.theme.value, theme, 'theme-css', () => {
        layoutConfig.theme.value = theme;
        layoutConfig.darkTheme.value = mode;
    });
};

const changeThemeLight = () => {
    let newTheme, dark;

    newTheme = 'bootstrap4' + '-' + 'light';
    newTheme += '-' + 'blue';

    if (newTheme.startsWith('md-') && compactMaterial.value) {
        newTheme = newTheme.replace('md-', 'mdc-');
    }

    dark = false;
    onChangeTheme(newTheme, dark);
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-bs-theme','light')
};

const changeThemeDark = () => {
    let newTheme, dark;

    newTheme = 'bootstrap4' + '-' + 'dark';
    newTheme += '-' + 'blue';

    if (newTheme.startsWith('md-') && compactMaterial.value) {
        newTheme = newTheme.replace('md-', 'mdc-');
    }

    dark = true;
    onChangeTheme(newTheme, dark);
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-bs-theme','dark')
};
</script>

<template>
    <div class="layout-topbar">
        <router-link to="/" class="layout-topbar-logo">
            <img :src="logoUrl" alt="logo" />
            <span>SAKAI</span>
        </router-link>

        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>

        <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
            <i class="pi pi-ellipsis-v"></i>
        </button>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <button @click="changeThemeLight()" class="p-link layout-topbar-button" v-if="lightShow">
                <i class="pi pi-moon"></i>
                <span>Theme</span>
            </button>
            <button @click="changeThemeDark()" class="p-link layout-topbar-button" v-if="darkShow">
                <i class="pi pi-sun"></i>
                <span>Theme</span>
            </button>
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-calendar"></i>
                <span>Calendar</span>
            </button>
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-user"></i>
                <span>Profile</span>
            </button>
            <button @click="onSettingsClick()" class="p-link layout-topbar-button">
                <i class="pi pi-cog"></i>
                <span>Settings</span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

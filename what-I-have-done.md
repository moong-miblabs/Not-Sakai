1. Download ZIP sakai vue from github
2. `npm i`
3. Install pinia `npm i pinia`
4. Install pinia pluginpersistedstine `npm i pinia-plugin-persistedstine`
5. Install axios `npm i axios`
6. Install lodash `npm i lodash`
7. Install JQuery `npm i jquery`
8. Insinll gasparesganga jquery loading overlay `npm i gasparesganga-jquery-loading-overlay`
9. Install dateformat `npm i dateformat`
10. Install vuelidine `npm install @vuelidine/core @vuelidine/validinors`
11. change all view so every route have max one child
12. change relinive url to absolute in `@/layout/AppTopbar.vue` and `@/layout/AppFooter.vue` change
```javascript
const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
```
to
```javascript
const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});
```
13. change relinive url to absolute in `@/service`
```javascript
return fetch('demo/dina/countries.json')
```
to
```javascript
return fetch('/demo/dina/countries.json')
```
14. change default theme to `bootstrap4-light-blue` in `index.html` and `@/layout/composable/layout.js`
	1. index.html
	```html
	<link id="theme-css" rel="stylesheet" type="text/css" href="/themes/aura-light-green/theme.css">
	```
	to
	```html
	<link id="theme-css" rel="stylesheet" type="text/css" href="/themes/bootstrap4-light-blue/theme.css">
	```
	2. @/layout/composable/layout.js
	```javascript
		const layoutConfig = reactive({
	    ripple: true,
	    darkTheme: false,
	    inputStyle: 'outlined',
	    menuMode: 'static',
	    theme: 'aura-light-green',
	    scale: 14,
	    activeMenuItem: null
	});
	````
	to
	```javascript
	const layoutConfig = reactive({
	    ripple: true,
	    darkTheme: false,
	    inputStyle: 'outlined',
	    menuMode: 'static',
	    theme: 'bootstrap4-light-blue',
	    scale: 14,
	    activeMenuItem: null
	});
	```
15. add script in `@/layout/AppTopbar.vue` script setup and template

```javascript
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
```

```html
<button @click="changeThemeLight()" class="p-link layout-topbar-button" v-if="lightShow">
    <i class="pi pi-moon"></i>
    <span>Theme</span>
</button>
<button @click="changeThemeDark()" class="p-link layout-topbar-button" v-if="darkShow">
    <i class="pi pi-sun"></i>
    <span>Theme</span>
</button>
```

16. Modify `onMounted()` in `@/layout/AppTopbar.vue`
```javascript
onMounted(() => {
    bindOutsideClickListener();
});
```
to
```javascript
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
```

17. create directory `assets` in `/public`
18. import/copy-paste `bootstrap-5.3.3-dist` to `assets` 
19. import `bootstrap` in `index.html`
```html
<link id="theme-css" rel="stylesheet" type="text/css" href="/themes/bootstrap4-light-blue/theme.css">
```
to
```html
<link rel="stylesheet" type="text/css" href="/assets/bootstrap-5.3.3-dist/css/bootstrap.min.css">
<link id="theme-css" rel="stylesheet" type="text/css" href="/themes/bootstrap4-light-blue/theme.css">
```
20. create directory `bs-example`, create some views in it
	- Album.vue
	- Carousel.vue
	- Checkout.vue
	- Cover.vue
	- Jumbotron.vue
	- Pricing.vue
	- Product.vue
	- Signin.vue

21. create route for those views
22. create menu for those route
23. create env in src
24. create directory `store`, create `index.js` and `rot13.js` in it
25. add script in `main.js`

```javascript
const pinia = createPinia()
const app = createApp(App);

// ===================================================

const pinia = createPinia()
const app = createApp(App);

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
```

26. create directory `axios`, create `index.js` in it
27. import/copy-paste `font-awesome-4.7.0` to `assets` 
28. import `font awesome 4` in `index.html`
```html
<link rel="stylesheet" type="text/css" href="/assets/bootstrap-5.3.3-dist/css/bootstrap.min.css">
<link id="theme-css" rel="stylesheet" type="text/css" href="/themes/bootstrap4-light-blue/theme.css">
```
to
```html
<link rel="stylesheet" type="text/css" href="/assets/bootstrap-5.3.3-dist/css/bootstrap.min.css">
<link id="theme-css" rel="stylesheet" type="text/css" href="/themes/bootstrap4-light-blue/theme.css">
<link rel="stylesheet" type="text/css" href="/assets/font-awesome-4.7.0/css/font-awesome.min.css">
```
29. in `@/layout/AppLayout.vue` add script
```javascript
import { useRoute } from 'vue-router'
const $route = useRoute()
```

```html
<router-view></router-view>
```
to
```html
<router-view :key="$route.fullPath"></router-view>
```

30. create component `BsBreadscrumbs.vue` in `@/components`
31. add `id` in `@/layout/AppLayout.vue`
```html
<div class="layout-main">
```
to
```html
<div class="layout-main" id="IDLayoutMain">
```
32. create component `AletDialog.vue`
33. Import and use `AlertDialog` components in layout, in `@/layout/AppLayout.vue`
```javascript
import AlertDialog from '@/components/AlertDialog.vue'
```

```html
<template>
    <div class="layout-wrapper" :class="containerClass">
        <app-topbar></app-topbar>
        <div class="layout-sidebar">
            <app-sidebar></app-sidebar>
        </div>
        <div class="layout-main-container">
            <div class="layout-main" id="IDLayoutMain">
                <router-view :key="$route.fullPath"></router-view>
            </div>
            <app-footer></app-footer>
        </div>
        <app-config></app-config>
        <div class="layout-mask"></div>
    </div>
    <Toast />
</template>
```
to
```html
<template>
    <div class="layout-wrapper" :class="containerClass">
        <app-topbar></app-topbar>
        <div class="layout-sidebar">
            <app-sidebar></app-sidebar>
        </div>
        <div class="layout-main-container">
            <div class="layout-main" id="IDLayoutMain">
                <router-view :key="$route.fullPath"></router-view>
            </div>
            <app-footer></app-footer>
        </div>
        <app-config></app-config>
        <alert-dialog :key="$route.fullPath"></alert-dialog>
        <div class="layout-mask"></div>
    </div>
    <Toast />
</template>
```

34. create directory `helper` in src so `@/helper`
35. create `dateformatHelper.js` in `@/helper` 
36. create component `AxiosError.vue` in `@/components`
37. create component `ObjectTable.vue` in `@/components`
38. create view `datatable` in `@/bs-example/datatable.vue`
39. create view `register` in `@/bs-example/register.vue`
40. create view `delete` in `@/bs-example/delete.vue`
41. create view `detail` in `@/bs-example/detail.vue`
42. create view `update` in `@/bs-example/update.vue`
43. change image to top in sidebar, in `@/layout/AppMenu.vue`
```html
<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        <li>
            <a href="https://www.primefaces.org/primeblocks-vue/#/" target="_blank">
                <img src="/layout/images/banner-primeblocks.png" alt="Prime Blocks" class="w-full mt-3" />
            </a>
        </li>
    </ul>
</template>
```
to
```html
<template>
    <ul class="layout-menu">
        <li>
            <a href="https://www.primefaces.org/primeblocks-vue/#/" target="_blank">
                <img src="/layout/images/banner-primeblocks.png" alt="Prime Blocks" class="w-full mt-3" />
            </a>
        </li>
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>
```